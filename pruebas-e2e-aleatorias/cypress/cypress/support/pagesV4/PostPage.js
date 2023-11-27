
export class PostPage {
    static openEditorNewPost() {
        cy.get('.ember-view.gh-btn.gh-btn-primary').click();
    }
    static fillPostTitle(title) {
        cy.get('.gh-editor-title').clear();
        cy.get('.gh-editor-title').type(title);
        cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content').click(); 
    }
    static publishPostNow(){
        cy.get('.gh-publishmenu-trigger').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
    }
    static openLatestPublishedPost(){
        cy.get(".gh-posts-list-item > a > h3").first().click()
    }
    static saveThePost(){
        cy.get('.gh-publishmenu-trigger').click()
        cy.get('.gh-publishmenu-button').click()
    }
    static openLatestDraftPost(){
        cy.get(".gh-posts-list-item > a > h3").first().click()
    }
    static openEditorFromStadistics(){
        cy.wait(1000)
        cy.get(".gh-post-list-cta.edit > span").click()
    }
    static unpublishPost(){
        cy.get(".gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger").click()
    }
    static openMenuSettings(){
        cy.get(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click()        
    }
    static deletePost(){
        cy.get(".settings-menu-delete-button").click()
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click()
    }
    static schedulePost(){
        cy.get('.gh-publishmenu-trigger').click()
        cy.get('.gh-publishmenu-radio-button').last().click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
    }
    static clickOnPreview(){
        cy.wait(1000)
        cy.get(".gh-btn.gh-editor-preview-trigger").click()        
        cy.get(".gh-post-preview-mode").each(($el, index, $lis) => {
            cy.wrap($el).click().screenshot('./resultsv4/preview-' + index)
            cy.wait(500)
        })
    }
}
export default PostPage;

