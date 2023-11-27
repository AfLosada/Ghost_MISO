Feature: Posts
@user4 @web
Scenario: Create a draft post and then publish it with new content
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I open the editor for create a new post from the sidenav
  When I put on the title "$name"
  And I wait for 10 seconds
  When I click on back button
  And I wait for 3 seconds
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  And I wait for 1 seconds
  When I update the title "$name"
  And I wait for 1 seconds
  When I create a markdown card and fill it with fakelorem
  And I wait for 5 seconds
  When I Publish the post  
  When I return to the edition page of the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 2 seconds
  Then I click on published posts