Feature: Posts
@user1 @web
Scenario: Update the url of a post dynamic 1
  Given I make a GET request to "https://my.api.mockaroo.com/naugty-post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I click on settings in the editor
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  And I update the content with random mockaroo register
  And I wait for 1 seconds
  Then I update the post  

@user2 @web
Scenario: Update the url of a post dynamic 2
  Given I make a GET request to "https://my.api.mockaroo.com/post-content.json?key=35c2a170"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 15 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I click on settings in the editor
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  When I update the post url and publish date with the mockaroo data
  And I wait for 1 seconds
  And I update the content with random mockaroo register
  Then I update the post  



