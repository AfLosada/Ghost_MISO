Feature: Posts

@user1 @web
Scenario: Change publish date of a post
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  And I wait for 1 seconds
  When I click on settings in the editor
  And I wait for 3 seconds
  When I update the post publish date with a faker date
  Then I update the post