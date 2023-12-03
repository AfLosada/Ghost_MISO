import {faker} from '@faker-js/faker'

// describe('Inicio de sesión con credenciales incorrectas', () => {
//     it('Debe generar alerta al iniciar sesión con correo incorrecto', () => {
//       cy.login(faker.internet.email(), faker.internet.password())
//       cy.get('p.main-error').should('contain','There is no user with that email address.')// Verifica que el usuario ha iniciado sesión correctamente
//     })
//     it('Debe generar alerta al iniciar sesión con contraseña incorrecta', () => {
//       cy.login('nedrocoli@gmail.com', faker.internet.password())
//       cy.get('p.main-error').should('contain','Your password is incorrect.')// Verifica que el usuario ha iniciado sesión correctamente
//     })
// })


// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Test editar Perfil (18)
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('Editar pefil', () => {
    it('Error de nombre muy largo ', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 300) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
        textoAleatorio = textoAleatorio.slice(0, 300);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()
        cy.get("input#user-name").invoke('val', '').type(textoAleatorio, {force: true});   
        cy.get("input#user-slug").type(" ") 
        cy.get(' div.error > p.response' ).should('contain',"Name is too long")
    })

    it('Mensaje de error de formato de email valido ', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 100) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
        textoAleatorio = textoAleatorio.slice(0, 100);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("input#user-email").invoke('val', '').type(textoAleatorio)   
        cy.get("input#user-name").click() 
        cy.get('.user-details-bottom > :nth-child(3) > .response').should('contain',"Please supply a valid email address")
    })

    it('Mensaje de error de que la url no es valida', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 5) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
        textoAleatorio = textoAleatorio.slice(0, 5);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("#user-website").invoke('val', '').type(textoAleatorio)   
        cy.get("#user-location").click() 
        cy.get('.error > .response').should('contain',"Website is not a valid url")
    })

    it('El Mensaje de error de que la url no es valida no aparece si es muy largo el texto ingresado', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 100) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
        textoAleatorio = textoAleatorio.slice(0, 100);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("#user-website").invoke('val', '').type(textoAleatorio)   
        cy.get("#user-location").click() 
        cy.get('.error > .response').should('not.exist')
    })

    it('Issue: El Mensaje de error si se ingresa una url diferente a la de facebook', () => {
        
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("#user-facebook").invoke('val', '').type(faker.image.url())   
        cy.get("#user-location").click() 
        cy.get('.error > .response').should('contain',"The URL must be in a format like https://www.facebook.com/yourPage")
    })

    it('Issue: El Mensaje de error si se ingresa una url diferente a la de twitter', () => {
        
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("#user-twitter").invoke('val', '').type(faker.image.url())   
        cy.get("#user-facebook").click() 
        cy.get('.error > .response').should('contain',"Your Username is not a valid Twitter Username")
    })

    it('El Mensaje de error de que la bio del perfil es demasiado larga', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 500) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 500);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get("#user-bio").invoke('val', '').type(textoAleatorio)   
        cy.get("#user-facebook").click() 
        cy.get('.bio-container > .response').should('contain',"Bio is too long")
    })

    it('El Mensaje de error al ingresar solo la nueva contraseña', () => {
    
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get('#user-password-new').type(faker.internet.password())   
        cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
        cy.get(':nth-child(1) > .response').should('contain',"Your current password is required to set a new one")
    })

    it('El Mensaje de error de que la nuevacontraseña es demasiado corta', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 2) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 2);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get('#user-password-old').type(faker.internet.password())   
        cy.get('#user-password-new').type("123")    
        cy.get('#user-new-password-verification').type("123")  
        cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
        cy.get('.error > .response').should('contain',"Password must be at least 10 characters long.")
    })

    it('El Mensaje de error el ingresar la contraseña incorrecta', () => {
        let textoAleatorio = faker.internet.password();

        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get('#user-password-old').type(faker.internet.password())   
        cy.get('#user-password-new').type(textoAleatorio)    
        cy.get('#user-new-password-verification').type(textoAleatorio)  
        cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
        cy.get('.gh-alert').should('contain',"Your password is incorrect.")
    })

    it('El Mensaje de error al ingresar una contraseña distinta en la confirmación de contraseña ', () => {

        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()  
        cy.get('#user-password-old').type(faker.internet.password())   
        cy.get('#user-password-new').type(faker.internet.password())    
        cy.get('#user-new-password-verification').type(faker.internet.password())  
        cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click()
        cy.get('.error > .response').should('contain',"Your new passwords do not match")
    })

})


// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Test crear nuevo miembro (29)
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear nuevo miembro', () => {
    it('Exito al crear un nuevo miembro del equipo', () => {
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('span:nth-child(1)').click()
        //cy.get('a[href="#/members/new/"]').click()
        cy.get('#member-name').type(faker.person.firstName())
        cy.get('#member-email').type(faker.internet.email())
        cy.get('.gh-member-label-input').type(faker.word.words({ count: 1 }))
        cy.get('#member-note').type(faker.word.words({ count: 10 }))
        cy.get('section.view-actions > button').click()
        cy.wait(1000)
        cy.get('.gh-member-details-attribution > p').should('contain',"Created")
    })

    it('Mensaje de error de nombre con mas de 191 caracteres', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 200) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 200);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('a[href="#/members/new/"]').click()
        cy.get('#member-name').type(textoAleatorio)
        cy.get('#member-email').type(faker.internet.email())
        cy.get('.gh-member-label-input').type(faker.word.words({ count: 1 }))
        cy.get('#member-note').type(faker.word.words({ count: 10 }))
        cy.get('section.view-actions > button').click()
        cy.get(':nth-child(1) > .response').should('contain',"Name cannot be longer than 191 characters.")
    })

    it('Mensaje de error de correo invalido', () => {
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('a[href="#/members/new/"]').click()
        cy.get('#member-name').type(faker.person.firstName())
        cy.get('#member-email').type(faker.person.firstName())
        cy.get('.gh-member-label-input').type(faker.word.words({ count: 1 }))
        cy.get('#member-note').type(faker.word.words({ count: 10 }))
        cy.get('section.view-actions > button').click()
        cy.get('.error > .response').should('contain',"Invalid Email.")
    })

    it('Mensaje de error de la nota es demasiado larga', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 600) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 600);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('a[href="#/members/new/"]').click()
        cy.get('#member-name').type(faker.person.firstName())
        cy.get('#member-email').type(faker.person.firstName())
        cy.get('.gh-member-label-input').type(faker.word.words({ count: 1 }))
        cy.get('#member-note').type(textoAleatorio)
        cy.get('section.view-actions > button').click()
        cy.get('.error > .response').should('contain',"Note is too long.")
    })
})

// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Test editar miembro (29)
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Editar un miembro del equipo', () => {
    it('Sin errores ingresando un nombre con mas de 191 caracteres', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 192) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 192);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('tr[data-test-list="members-list-item"]:first-of-type').click()
        cy.get('#member-name').type(textoAleatorio)
        cy.get('section.view-actions > button').click()
        cy.get('div.gh-member-details-identity').should('contain',textoAleatorio)
    })

    it('Mensaje de error de correo invalido', () => {
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('tr[data-test-list="members-list-item"]:first-of-type').click()
        cy.get('#member-email').invoke('val', '').type(faker.lorem.sentence())
        cy.get('section.view-actions > button').click()
        cy.get('.response').should('contain',"Invalid Email.")
    })

    it('Mensaje de error de la nota es demasiado larga', () => {
        let textoAleatorio = '';

        while (textoAleatorio.length < 600) {
            const sentence = faker.lorem.sentence();
            textoAleatorio += sentence;
        }
            textoAleatorio = textoAleatorio.slice(0, 600);
        cy.login('nedrocoli@gmail.com', '12345678910')
        cy.visit("http://localhost:2368/ghost/#/members")
        cy.wait(1000)
        cy.get('tr[data-test-list="members-list-item"]:first-of-type').click()
        cy.get('#member-note').type(textoAleatorio)
        cy.get('section.view-actions > button').click()
        cy.get('div.form-group.mb0.gh-member-note.error > p.response').should('contain',"Note is too long.")
    })
})

