Feature: Posts
@user1 @web
Scenario: Edit post view preview and edit it 3 times using naughty mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the content of the post 3 times with mockaroo data
  And I click on settings in the editor
  Then I see the history of the post


@user2 @web
Scenario: Edit a post view preview and edit it 3 times using mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 20 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the content of the post 3 times with mockaroo data
  And I wait for 1 seconds  
  And I click on settings in the editor
  Then I see the history of the post

