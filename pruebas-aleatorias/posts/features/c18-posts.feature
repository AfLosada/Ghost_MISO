Feature: Posts

@user1 @web
Scenario: Add code injection to the header of the post
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  When I click on post
  When I create a new post
  When I put on the title "$name"
  And I create a line break
  When I create a markdown card and fill it with fakelorem
  When I click on settings in the editor
  When I add fakelorem to header with code injection
  When I click on Preview
  Then I see the phone Preview