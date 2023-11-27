
export class MainPage {
    static visit(section) {
      if(section=="posts"){ 
          cy.get('a[href="#/posts/"]').first().click();
          cy.wait(1000)
        }
      if(section=="published posts"){ 
          cy.get('a[href="#/posts/?type=published"]').click();
          cy.wait(1000)
        }
      if(section=="draft posts"){ 
          cy.get('a[href="#/posts/?type=draft"]').click();
          cy.wait(1000)
        }
    }
  }
  
  export default MainPage;