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
  const screenshots = path.join(newestDirectory, "screenshots");
  if (!newestDirectory) {
    return;
  }
  const files = fs
    .readdirSync(screenshots)
    .map((fileName) => path.join(screenshots, fileName));
  return files;
};

const createReport = (fileResult, { v4, v5 }, i) => {
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
                ${createComparison(fileResult, { v4, v5 }, i)}
            </div>
        </body>
    </html>`;
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
  const v4Path = "./v4/reports";
  const v5Path = "./v5/reports";
  const v4Files = readFilesFromDirectory(v4Path);
  const v5Files = readFilesFromDirectory(v5Path);
  for (const i in Array(Math.min(v4Files.length, v5Files.length)).fill(0)) {
    const v4Url = v4Files[i];
    const v5Url = v5Files[i];
    const v4Img = fs.readFileSync(v4Url);
    const v5Img = fs.readFileSync(v5Url);
    const fileResult = `compare-${i}.png`;
    resemblejs.compare(v4Img, v5Img, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFileSync("./resemble-report/" + fileResult, data.getBuffer());
      }
    });
    const v4FromReport = path.relative("resemble-report", v4Url)
    const v5FromReport = path.relative("resemble-report", v5Url)
    const report = createReport("./" + fileResult, { v4: v4FromReport, v5: v5FromReport }, i);
    fs.writeFileSync(`./resemble-report/report-${i}.html`, report);
  }
  fs.copyFileSync('./resemble.css', `./resemble-report/resemble.css`);
};

(async () => await main())();
