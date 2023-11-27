Feature: Posts
@user4 @web
Scenario: Create a draft post and then publish it with new content dynamic 1
  Given I make a GET request to "https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 4 seconds
  When I open the editor for create a new post from the sidenav
  When I put a random mockaroo register to fill the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 3 seconds
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  And I wait for 1 seconds
  When I update the content with random mockaroo register
  And I wait for 5 seconds
  When I Publish the post
  When I return to the edition page of the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 2 seconds
  Then I click on published posts

@user1 @web
Scenario: Create a draft post and then publish it with new content dynamic 2
  Given I make a GET request to "https://my.api.mockaroo.com/post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 8 seconds
  When I open the editor for create a new post from the sidenav
  When I put a random mockaroo register to fill the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 3 seconds
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  And I wait for 1 seconds
  When I update the content with random mockaroo register
  And I wait for 5 seconds
  When I Publish the post
  When I return to the edition page of the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 2 seconds
  Then I click on published posts