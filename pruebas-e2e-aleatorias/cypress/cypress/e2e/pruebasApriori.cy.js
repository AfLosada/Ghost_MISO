//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Login
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { loadJSONData } from '../support/csv-helper';

let data;
let randomRecord;
let email;
let email_260;
let password;
let special;
let title;
let body;
let texto_300;
let texto_500;
let url_100;
let url;
let name;
let name_300;
let name_191;
let password2;
let password3;
let label;


before(() => {
  // Cargar los datos desde el archivo JSON antes de las pruebas
  cy.fixture('MOCK_DATA.json').then((jsonData) => {
    data = jsonData;
    randomRecord = data[Math.floor(Math.random() * data.length)];
    email = randomRecord.email;
    email_260 = randomRecord.email_long_260;
    password = randomRecord.password;
    special = randomRecord.text_special;
    title = randomRecord.page_title;
    body = randomRecord.page_description;    
    texto_300 = randomRecord.texto_long_300;
    texto_500 = randomRecord.texto_long_500;
    url_100 = randomRecord.URL_long_300;
    url= randomRecord.page_url;
    password2 = randomRecord.password2;
    password3 = randomRecord.password3;
    name_300 = randomRecord.Name_long_300;    
    name_191 = randomRecord.Name_long_191;
    name= randomRecord.first_name;
    label = randomRecord.page_admins;

  });
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test editar Perfil ( 22 )
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('Editar pefil', () => {

  
    it('Error de nombre muy largo ', () => {
        
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()
        cy.get("input#user-name").invoke('val', '').type(name_300, {force: true});   
        cy.get("input#user-slug").type(" ") 
        cy.get(' div.error > p.response' ).should('contain',"Name is too long")
    })
  
    
    it('Mensaje de error de formato de email valido ', () => {
      
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()  
      cy.get("input#user-email").invoke('val', '').type(special)   
      cy.get("input#user-name").click() 
      cy.get('.user-details-bottom > :nth-child(3) > .response').should('contain',"Please supply a valid email address")
  })
  
    it('Mensaje de error de que la url no es valida', () => {
        cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()  
      cy.get("#user-website").invoke('val', '').type(special)   
      cy.get("#user-location").click() 
      cy.get('.error > .response').should('contain',"Website is not a valid url")
    })
  
  
  
    
    it('El Mensaje de error de que la url no es valida no aparece si es muy largo el el texto ingresado', () => {
    
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()  
      cy.get("#user-website").invoke('val', '').type(url_100)   
      cy.get("#user-location").click() 
      cy.get('.error > .response').should('not.exist')
  })
  
  
  
  
  it('El Mensaje de error si se ingresa una url diferente a la de facebook', () => {
          
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get("#user-facebook").invoke('val', '').type(url)   
    cy.get("#user-location").click() 
    cy.get('.error > .response').should('contain',"The URL must be in a format like https://www.facebook.com/yourPage")
  })
  
  
  it('El Mensaje de error si se ingresa una url diferente a la de twitter', () => {
          
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get("#user-twitter").invoke('val', '').type(url)   
    cy.get("#user-facebook").click() 
    cy.get('.error > .response').should('contain',"Your Username is not a valid Twitter Username")
  })
  
  
  it('El Mensaje de error de que la bio del perfil es demasiado larga', () => {
    
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get("#user-bio").invoke('val', '').type(texto_300)   
    cy.get("#user-facebook").click() 
    cy.get('.bio-container > .response').should('contain',"Bio is too long")
  })
  
  
  it('El Mensaje de error al ingresar solo la nueva contraseña', () => {
      
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get('#user-password-new').type(password)   
    cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
    cy.get(':nth-child(1) > .response').should('contain',"Your current password is required to set a new one")
  })
  
  
  
  it('El Mensaje de error el ingresar la contraseña incorrecta', () => {
    
  
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get('#user-password-old').type(password)   
    cy.get('#user-password-new').type(password2)    
    cy.get('#user-new-password-verification').type(password2)  
    cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
    cy.get('.gh-alert').should('contain',"Your password is incorrect.")
  })
  
  
  
  it('El Mensaje de error al ingresar una contraseña distinta en la confirmación de contraseña ', () => {
  
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/settings/staff")
    cy.wait(1000)
    cy.get("article[class='apps-card-app']").click()  
    cy.get('#user-password-old').type(password)   
    cy.get('#user-password-new').type(password2)    
    cy.get('#user-new-password-verification').type(password3)  
    cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
    cy.get('.error > .response').should('contain',"Your new passwords do not match")
  
  }) 
  })



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear page (11)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
describe('Crear pages', () => {
 

    it('Debe permitir crear un page con titulo y sin cuerpo ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(title)
      cy.get('div.gh-koenig-editor.relative.z-0').click()
      cy.get('div.gh-koenig-editor.relative.z-0').type(" ")
      cy.wait(1000) 
      cy.get("button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger").click() 
      cy.get("div.green").should('contain',"Ready,set,publish.")
    })
  
    
    it('ISSUE: No Debe permitir crear un page con titulo que contiene caracteres especiales y sin cuerpo ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(special)
      cy.get('div.koenig-editor__editor').type(" ")
      if (cy.get('.darkgrey > span').should("not.exist") ){
        cy.get('.darkgrey > span').should("not.exist")
  
      }else{
        cy.get('.darkgrey > span').should("exist")
      }
    })
  
    it('Debe permitir crear un page con Cuerpo y sin titulo', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type(body)
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("div.green").should('contain',"Ready,set,publish.")
    })
  
    it('Debe permitir crear un page con Cuerpo que contiene caracteres especiales ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type(special)
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("div.green").should('contain',"Ready,set,publish.")
    })
  
    it('Debe permitir crear un page con titulo y cuerpo que contiene caracteres especiales', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(title + special)
      cy.get('div.koenig-editor__editor').type(body + special)
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("div.green").should('contain',"Ready,set,publish.")
    })
  
    it('No Debe permitir crear un page con titulo mayor a 300 caracteres y sin cuerpo ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(texto_300)
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('.darkgrey > span').should("not.exist")
    })
  
      it('Debe permitir crear un page con titulo y cuerpo', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.wait(1000)
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(title)
      cy.get('div.koenig-editor__editor').type(body)
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("div.green").should('contain',"Ready,set,publish.")
    })
  
  
  
  })
  


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test crear nuevo miembro (26 )
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear nuevo miembro', () => {
  
    it('Exito al crear un nuevo miembro del equipo', () => {
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('a[href="#/members/new/"]').contains("New member").click()
        cy.get('#member-name').type(name)
        cy.get('#member-email').type(email)
        cy.get('.gh-member-label-input').type(label)
        cy.get('#member-note').type(title)
        cy.get('section.view-actions > button').click()
        cy.wait(1000)
        cy.get('.gh-member-details-attribution > p').should('contain',"Created")
    })
  
  
    it('Mensaje de error de nombre con mas de 191 caracteres', () => {
      
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("http://localhost:2368/ghost/#/members")
      cy.wait(1000)
      cy.get('a[href="#/members/new/"]').contains("New member").click()
      cy.get('#member-name').type(name_300)
      cy.get('#member-email').type(email)
      cy.get('.gh-member-label-input').type(label)
      cy.get('#member-note').type(title)
      cy.get('section.view-actions > button').click()
      cy.wait(1000)
      cy.get(':nth-child(1) > .response').should('contain',"Name cannot be longer than 191 characters.")
  })
   
  
  it('Mensaje de error con correo de mas de 260 caracteres', () => {
      
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/members")
    cy.wait(1000)
    cy.get('a[href="#/members/new/"]').contains("New member").click()
    cy.get('#member-name').type(name)
    cy.get('#member-email').type(email_260)
    cy.get('.gh-member-label-input').type(label)
    cy.get('#member-note').type(title)
    cy.get('section.view-actions > button').click()
    cy.wait(1000)
    cy.get('.error > .response').should('contain',"Email")
  })
  
  it('Mensaje de error con Note de mas de 500 caracteres', () => {
      
    cy.login('nedrocoli@gmail.com', '12345678910')
    cy.visit("http://localhost:2368/ghost/#/members")
    cy.wait(1000)
    cy.get('a[href="#/members/new/"]').contains("New member").click()
    cy.get('#member-name').type(name)
    cy.get('#member-email').type(email)
    cy.get('.gh-member-label-input').type(label)
    cy.get('#member-name').click()
    cy.get('#member-note').type(texto_500)
    cy.get('section.view-actions > button').click()
    cy.wait(1000)
    cy.get('.mb0 > .response').should('contain',"Note is too long")
  })
  
  
  })
  