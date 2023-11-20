Feature: Posts
@user1 @web
Scenario: Edit a plublished post
  Given I set up the name of the scenario as "edit-published-post"
  Given I navigate to page "http://3.15.201.251/ghost"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the post title "Asereje aseraja Editado"
  When I update the published post
  And I wait for 1 seconds
  Then I navigate to page "http://3.15.201.251/ghost#/posts?type=published"  
