
import { LoginPage } from '../support/pages/LoginPage';
import { MainPage } from '../support/pages/MainPage';
import { PostPage } from '../support/pages/PostPage';


describe('Como administrador quiero ver la vista previa de un post', () => {
  it('should show the preview of a post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://localhost:2368/ghost/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    // When I visit the posts
    MainPage.visit('posts');
    // And open the editor
    PostPage.openEditorNewPost();
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja post vista previa ')
    // Then I see the preview of the post
    PostPage.clickOnPreview() 
  });
});
describe('Como administrador quiero despublicar el post mas reciente y eliminarlo', () => {
  it('should unpublish the most recent post', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://localhost:2368/ghost/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    // When I visit the published posts
    MainPage.visit('published posts');
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();   
    // And I open the settings menu
    PostPage.openMenuSettings();    
    // Then I delete the post
    PostPage.deletePost();    
  });
});
describe('Como administrador quiero ver las estadisticas del ultimo post publicado y despublicarlo', () => {
  it('should see the stadistics of a post and upublish it', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://localhost:2368/ghost/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    // When I visit the published posts
    MainPage.visit('published posts');
    // And I click on stadistics of the latest published post
    PostPage.openStadisticsLatestPublishedPost();    
    // And I open the edito of the latest published post
    PostPage.openEditorFromStadistics();    
    // Then I open the edito of the latest published post
    PostPage.unpublishPost();    
  });
});
describe('Como administrador quiero publicar un post ', () => {
  it('should publish a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://localhost:2368/ghost/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    // When I visit the posts
    MainPage.visit('posts');
    // And open the editor
    PostPage.openEditorNewPost();
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja')
    // Then I publish the post
    PostPage.publishPostNow()
  });
});
describe('Como administrador quiero editar el ultimo post publicado', () => {
  it('should edit a post successfully', () => {
    // Given a user, I will login in ghost
    LoginPage.visit("http://localhost:2368/ghost/#");
    LoginPage.login('nedrocoli@gmail.com', '12345678910');
    // When I visit the published posts
    MainPage.visit('published posts');
    // And I click on the latest published post
    PostPage.openLatestPublishedPost();
    // And fill the tittle
    PostPage.fillPostTitle('areje asereja editado' + (new Date().getMilliseconds()))
    // Then I update the post
    PostPage.saveThePost()
  });
});

