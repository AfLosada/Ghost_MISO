Feature: Posts
@user3 @web
Scenario: Edit a plublished post
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the title "$name"
  When I update the content of the post with: fakelorem
  When I update the published post
  And I wait for 1 seconds
  Then I navigate to page "http://3.138.112.48/ghost/#/posts?type=published"  
