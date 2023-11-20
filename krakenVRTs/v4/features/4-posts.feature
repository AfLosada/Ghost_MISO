Feature: Posts
@user1 @web
Scenario: Create a draft post and then publish it
  Given I set up the name of the scenario as "publish-draft-post"
  Given I navigate to page "http://3.15.201.251/ghost"
  When I log in
  And I wait for 1 seconds
  When I open the editor for create a new post from the sidenav
  When I put on the post title "Asereje aseraja Draft"
  And I wait for 10 seconds
  When I click on back button
  And I wait for 3 seconds
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the post title "Asereje aseraja Ready to publish"
  And I wait for 1 seconds
  When I create a post markdown card and fill it with "Hola Mundo"
  And I wait for 7 seconds
  When I Publish the post  
  When I return to the edition page of the post
  And I wait for 2 seconds
  When I click on back button  
  And I wait for 2 seconds
  Then I click on published posts  
