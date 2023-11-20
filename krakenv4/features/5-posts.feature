Feature: Posts
@user1 @web
Scenario: Unpublish a post an delete it
  Given I navigate to page "http://3.15.201.251/ghost"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I click on settings in the editor
  When I delete the post
  Then I click on post
