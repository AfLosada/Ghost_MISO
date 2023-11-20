Feature: Posts

@user1 @web
Scenario: Create a post, see its preview and publish it
  Given I navigate to page "http://3.15.201.251/ghost"
  When I log in
  And I wait for 1 seconds
  When I click on post
  When I create a new post
  When I put on the post title "Asereje aseraja"
  When I create a post markdown card and fill it with "Hola"
  When I click on Preview
  And I wait for 1 seconds
  When I see the phone Preview
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post