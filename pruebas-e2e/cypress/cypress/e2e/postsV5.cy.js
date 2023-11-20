
import { LoginPage } from '../support/pagesV5/LoginPage';
import { MainPage } from '../support/pagesV5/MainPage';
import { PostPage } from '../support/pagesV5/PostPage';


describe('Como administrador quiero ver la vista previa de un post', () => {
  it('should show the preview of a post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv5/post-preview/step-1')
    // When I visit the posts
    MainPage.visit('posts');
    cy.screenshot('./resultsv5/post-preview/step-2')
    // And open the editor
    PostPage.openEditorNewPost();
    cy.screenshot('./resultsv5/post-preview/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja post vista previa ')
    cy.screenshot('./resultsv5/post-preview/step-4')
    // Then I see the preview of the post
    PostPage.clickOnPreview() 
    cy.screenshot('./resultsv5/post-preview/step-5')
  });
});
describe('Como administrador quiero despublicar el post mas reciente y eliminarlo', () => {
  it('should unpublish the most recent post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv5/unpublish-post/step-1')
    // When I visit the published posts
    MainPage.visit('published posts');
    cy.screenshot('./resultsv5/unpublish-post/step-2')
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();   
    cy.screenshot('./resultsv5/unpublish-post/step-3')
    // And I open the settings menu
    PostPage.openMenuSettings();
    cy.screenshot('./resultsv5/unpublish-post/step-4')    
    // Then I delete the post
    PostPage.deletePost();
    cy.screenshot('./resultsv5/unpublish-post/step-5')
  });
});
describe('Como administrador quiero publicar un post ', () => {
  it('should publish a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv5/publish-post/step-1')
    // When I visit the posts
    MainPage.visit('posts');
    cy.screenshot('./resultsv5/publish-post/step-2')
    // And open the editor
    PostPage.openEditorNewPost();
    cy.screenshot('./resultsv5/publish-post/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja')
    cy.screenshot('./resultsv5/publish-post/step-4')
    // Then I publish the post
    PostPage.publishPostNow()
    cy.screenshot('./resultsv5/publish-post/step-5')
  });
});

describe('Como administrador quiero editar el ultimo post publicado', () => {
  it('should edit a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv5/edit-post/step-1')
    // When I visit the published posts
    MainPage.visit('published posts');
    cy.screenshot('./resultsv5/edit-post/step-2')
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();
    cy.screenshot('./resultsv5/edit-post/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja editado' + (new Date().getMilliseconds()))
    cy.screenshot('./resultsv5/edit-post/step-4')
    // Then I update the post
    PostPage.saveThePost()
    cy.screenshot('./resultsv5/edit-post/step-5')
  });
});
describe('Como administrador quiero ver las estadisticas del ultimo post publicado y despublicarlo', () => {
  it('should see the stadistics of a post and upublish it', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv5/stadistics-unpublish-post/step-1')
    // When I visit the published posts
    MainPage.visit('published posts');
    cy.screenshot('./resultsv5/stadistics-unpublish-post/step-2')
    // And I click on stadistics of the latest published post
    PostPage.openStadisticsLatestPublishedPost();
    cy.screenshot('./resultsv5/stadistics-unpublish-post/step-3')
    // And I open the edito of the latest published post
    PostPage.openEditorFromStadistics();    
    cy.screenshot('./resultsv5/stadistics-unpublish-post/step-4')
    // Then I open the edito of the latest published post
    PostPage.unpublishPost();    
    cy.screenshot('./resultsv5/stadistics-unpublish-post/step-5')
  });
});
