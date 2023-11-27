Feature: Posts
@user1 @web
Scenario Outline: Update the url of a post
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  And I wait for 1 seconds
  When I click on settings in the editor
  And I wait for 3 seconds
  When I update the post url with <url>
  And I wait for 2 seconds
  Then I see an alert message if there is an <error>

    Examples:
      | url                                  | error |
      | " 😇 🙂 🙃 😉 😌 😍 🥰"   |   "con-error"   |
      | "Data a priory updated for schedule"   |   "sin-error"   |

