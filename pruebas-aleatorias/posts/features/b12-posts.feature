Feature: Posts
@user1 @web
Scenario: Create post view preview and edit it 3 times using mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on published posts
  And I "see the analytics" of the latest "published" post
  And I click on edit post
  And I unpublish the post
  When I schedule a post to publish with a random mockaroo item and publish it
  Then I navigate to page "http://3.138.112.48/ghost/#/posts?type=scheduled"  

@user2 @web
Scenario: Create post view preview and edit it 3 times using naughty mockaroo data
  Given I make a GET request to "https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  And I wait for 10 seconds
  When I log in
  When I click on published posts
  And I "see the analytics" of the latest "published" post
  And I click on edit post
  And I unpublish the post
  When I schedule a post to publish with a random mockaroo item and publish it
  Then I navigate to page "http://3.138.112.48/ghost/#/posts?type=scheduled"  