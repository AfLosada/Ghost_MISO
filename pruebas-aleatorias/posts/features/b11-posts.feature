Feature: Posts
@user1 @web
Scenario: Create post view preview and edit it 3 times using mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait
  When I click on post
  When I create a new post
  When I fill the contet and edit post 3 times with mockaroo data
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post

@user2 @web
Scenario: Create post view preview and edit it 3 times using naughty mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait
  When I click on post
  When I create a new post
  When I fill the contet and edit post 3 times with mockaroo data
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post

