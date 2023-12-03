import resemblejs from "resemblejs";
import fs from "fs";
import path from "path";

const getNewestDirectory = (directoryPath) => {
  const directories = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((name) => path.join(directoryPath, name))
    .sort((a, b) => {
      const statA = fs.statSync(a);
      const statB = fs.statSync(b);
      return statB.mtime.getTime() - statA.mtime.getTime();
    });

  return directories.length > 0 ? directories[0] : null;
};

const readFilesFromDirectory = (directoryPath) => {
  const newestDirectory = getNewestDirectory(directoryPath);
  const screenshots = path.join(newestDirectory, "");
  if (!newestDirectory) {
    return;
  }
  const files = fs
    .readdirSync(screenshots)
    .map((fileName) => path.join(screenshots, fileName));
  return files;
};

const createReport = (comparisions, i) => {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="resemble.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <p>${i}</p>
            </h1>
            <p>Executed: ${new Date()}</p>
            <div id="visualizer">
                ${comparisions}
            </div>
        </body>
    </html>`;
};

const stepReport = (fileResult, { v4, v5 }, i) => {
  return `
      <h1>Report for step 
           <p>${i}</p>
      </h1>
      <p>Executed: ${new Date()}</p>
      <div id="visualizer">
          ${createComparison(fileResult, { v4, v5 }, i)}
      </div>
      `;
};

const createComparison = (fileResult, { v4, v5 }, i) => {
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Version: ${v4} & ${v5}</h2>
      <p>Data: ${JSON.stringify(fileResult)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="${v4}" id="v4img" label="V4">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="${v5}" id="v5img" label="V5">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="${fileResult}" id="diffImage" label="Diff">
    </div>
  </div>
</div>`;
};

const main = async () => {
  
  const v4Path = "./v4/screenshots";
  const v5Path = "./v5/screenshots";
  
  const v4Files = fs.readdirSync(v4Path).map(item =>  v4Path + '/' + item)
  const v5Files = fs.readdirSync(v5Path).map(item =>  v5Path + '/' + item)
  let report = ""
  for (const i in Array(Math.min(v4Files.length, v5Files.length)).fill(0)) {
    const v4Url = fs.readdirSync(v4Files[i]).map(item =>  v4Files[i] + '/' + item) ;
    const v5Url = fs.readdirSync(v5Files[i]).map(item =>  v5Files[i] + '/' + item) ;
      if(v4Url.length == v5Url.length){
      console.log('Comparando: ')
      console.log(v5Files[i])
      console.log(v4Files[i])
      for (var j = 0; j < v5Url.length; j++) {
        const v4Img = fs.readFileSync(v4Url[j]);
        const v5Img = fs.readFileSync(v5Url[j]);
        const compareName = v4Url[j].split('/')[4].split('.')[0]
        const fileResult = `compare-${compareName}.png`;
        resemblejs.compare(v4Img, v5Img, (err, data) => {
          fs.writeFileSync("./resemble-report/" + fileResult, data.getBuffer());
        });
        const v4FromReport = path.relative("resemble-report", v4Url[j])
        const v5FromReport = path.relative("resemble-report", v5Url[j])
        report += stepReport("./" + fileResult, { v4: v4FromReport, v5: v5FromReport }, j);        
      }
      const completeReport = createReport(report, i)
      const compareName = v4Files[i].split('/')[3]
      fs.writeFileSync(`./resemble-report/report-${compareName}.html`, completeReport);
      }
      fs.copyFileSync('./resemble.css', `./resemble-report/resemble.css`);
    }

};

(async () => await main())();
