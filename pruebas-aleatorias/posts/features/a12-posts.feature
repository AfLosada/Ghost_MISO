Feature: Posts
@user2 @web
Scenario Outline: Unplublish a post an shecdule it for later
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I update the title <title>
  And I wait for 1 seconds
  When I schedule a "post" to publish on <date>
  And I wait for 2 seconds
  Then I expect to see <message> on the preview
  
    Examples:
      | title                                  | date       | message |
      | "Data a priory updated for schedule"   | "2021-11-26" | "In a few seconds" |
      | "Data a priory updated for schedule"   | "2024-12-01" | "In a year" |
      
