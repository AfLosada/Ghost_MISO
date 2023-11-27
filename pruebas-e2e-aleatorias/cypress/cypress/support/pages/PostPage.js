
export class PostPage {
    static openEditorNewPost() {
        cy.get('.ember-view.gh-btn.gh-btn-primary').click();
    }
    static fillPostTitle(title) {
        cy.get('.gh-editor-title').clear();
        cy.get('.gh-editor-title').type(title);
        cy.get('.kg-prose').click();
        cy.get('button.group').click();
        cy.get('ul > li:nth-child(1) > ul > li:nth-child(5)').click();
    }
    static publishPostNow(){
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
        cy.get('div > div > div > div.gh-publish-cta > button').click()
        cy.get('button[data-test-button="confirm-publish"]').click()
    }
    static openLatestPublishedPost(){
        cy.get(".gh-posts-list-item-group > li:nth-child(1) > a > h3").first().click()
    }
    static saveThePost(){
        cy.get(".gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view").click()
    }
    static openStadisticsLatestPublishedPost(){
        cy.get(".gh-posts-list-item-group > li:nth-child(1) > a:nth-child(4)").first().click()
    }
    static openEditorFromStadistics(){
        cy.get(".ember-view.gh-post-list-cta.edit").click()
    }
    static unpublishPost(){
        cy.get(".gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger").click()
    }
    static openMenuSettings(){
        cy.get(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click()        
    }
    static deletePost(){
        cy.get(".gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth").click()
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click()
    }
    static clickOnPreview(){
        cy.get(".gh-btn.gh-btn-editor.gh-editor-preview-trigger").click()
        cy.get(".gh-btn.gh-post-preview-mode").each(($el, index, $lis) => {
            cy.wrap($el).click()
        })
    }
}

export default PostPage;

