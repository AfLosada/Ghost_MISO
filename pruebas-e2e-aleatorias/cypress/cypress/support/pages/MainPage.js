
export class MainPage {
    static visit(section) {
      if(section=="posts"){ 
          cy.get('a[href="#/posts/"]').click();
        }
      if(section=="published posts"){ 
          cy.get('a[href="#/posts/?type=published"]').click();
        }
    }
  }
  
  export default MainPage;