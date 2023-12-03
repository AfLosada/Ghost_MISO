Feature: Posts

@user1 @web
Scenario: Create a post, see its preview and publish it faker
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait
  When I click on post
  When I create a new post
  When I put on the title "$name"
  And I create a line break
  When I create a markdown card and fill it with fakelorem
  When I click on Preview
  When I see the phone Preview
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post
