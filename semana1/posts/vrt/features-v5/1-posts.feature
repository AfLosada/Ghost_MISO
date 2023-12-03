Feature: Posts

@user1 @web
Scenario: Create a post, see its all its preview and publish it
  Given I set up the name of the scenario as "preview-post"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on post
  When I create a new post
  When I put on the title "Asereje aseraja"
  When I create a markdown card and fill it with "Hola"
  When I click on Preview
  And I wait for 1 seconds
  When I see the phone Preview
  And I wait for 1 seconds
  When I see the mail Preview
  And I wait for 1 seconds
  When I see the social Preview
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post

