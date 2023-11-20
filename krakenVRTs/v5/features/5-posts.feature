Feature: Posts
@user5 @web
Scenario: Unpublish a post an delete it
  Given I set up the name of the scenario as "delete-post"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I click on settings in the editor
  When I delete the post
  Then I click on post
