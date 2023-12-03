Feature: Posts

@user1 @web
Scenario: Create a post with a button and publish it
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait
  When I click on post
  When I create a new post
  When I put on the title "$name"
  When I create a button with name "$name" and url "$url"
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post
