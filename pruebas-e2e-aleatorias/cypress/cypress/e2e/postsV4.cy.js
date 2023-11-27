
import { LoginPage } from '../support/pagesV4/LoginPage';
import { MainPage } from '../support/pagesV4/MainPage';
import { PostPage } from '../support/pagesV4/PostPage';


describe('Como administrador quiero ver la vista previa de un post', () => {
  it('should show the preview of a post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://3.15.201.251/ghost");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv4/post-preview/step-1')
    // When I visit the posts
    MainPage.visit('posts');
    cy.screenshot('./resultsv4/post-preview/step-2')
    // And open the editor
    PostPage.openEditorNewPost();
    cy.screenshot('./resultsv4/post-preview/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja post vista previa ')
    cy.screenshot('./resultsv4/post-preview/step-4')
    // Then I see the preview of the post
    PostPage.clickOnPreview() 
    cy.screenshot('./resultsv4/post-preview/step-5')
  });
});
describe('Como administrador quiero despublicar el post mas reciente y eliminarlo', () => {
  it('should unpublish the most recent post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://3.15.201.251/ghost");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv4/unpublish-post/step-1')
    // When I visit the published posts
    MainPage.visit('published posts');
    cy.screenshot('./resultsv4/unpublish-post/step-2')
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();   
    cy.screenshot('./resultsv4/unpublish-post/step-3')
    // And I open the settings menu
    PostPage.openMenuSettings();
    cy.screenshot('./resultsv4/unpublish-post/step-4')    
    // Then I delete the post
    PostPage.deletePost();
    cy.screenshot('./resultsv4/unpublish-post/step-5')
  });
});
describe('Como administrador quiero publicar un post ', () => {
  it('should publish a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://3.15.201.251/ghost");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv4/publish-post/step-1')
    // When I visit the posts
    MainPage.visit('posts');
    cy.screenshot('./resultsv4/publish-post/step-2')
    // And open the editor
    PostPage.openEditorNewPost();
    cy.screenshot('./resultsv4/publish-post/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja')
    cy.screenshot('./resultsv4/publish-post/step-4')
    // Then I publish the post
    PostPage.publishPostNow()
    cy.screenshot('./resultsv4/publish-post/step-5')
  });
});

describe('Como administrador quiero editar el ultimo post publicado', () => {
  it('should edit a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://3.15.201.251/ghost");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv4/edit-post/step-1')
    // When I visit the published posts
    MainPage.visit('published posts');
    cy.screenshot('./resultsv4/edit-post/step-2')
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();
    cy.screenshot('./resultsv4/edit-post/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja editado' + (new Date().getMilliseconds()))
    cy.screenshot('./resultsv4/edit-post/step-4')
    // Then I update the post
    PostPage.saveThePost()
    cy.screenshot('./resultsv4/edit-post/step-5')
  });
});
describe('Como administrador quiero programar un post del borrador para despues', () => {
  it('should schedule a draft post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://3.15.201.251/ghost");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    cy.screenshot('./resultsv4/schedule-post/step-1')
    // When I visit the published posts
    MainPage.visit('draft posts');
    cy.screenshot('./resultsv4/schedule-post/step-2')
    // And I click on the latest draft post
    PostPage.openLatestDraftPost();
    cy.screenshot('./resultsv4/schedule-post/step-3')
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja schedule' + (new Date().getMilliseconds()))
    cy.screenshot('./resultsv4/edit-post/step-4')       
    // Then I schedule the post
    PostPage.schedulePost();    
    cy.screenshot('./resultsv4/schedule-post/step-5')
  });
});
