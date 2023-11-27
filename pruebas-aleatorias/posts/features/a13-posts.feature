Feature: Posts
@user3 @web
Scenario Outline: Edit a plublished post
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the title <title>
  When I update the content of the post with: <text>
  When I update the published post
  And I wait for 1 seconds
  Then I navigate to page "http://3.138.112.48/ghost/#/posts?type=published"  

    Examples:
      | title                                       | text    |
      | "Data a priory updated (sql iunjection)"   | "Content edit edit SELECT * FROM Users WHERE Name = or = AND Pass = or =" |
      | "Data a priory updated (emoji and spacial characters)"   | "Content edit edit ≤@∂ƒå∫™√™¶#@  😄 😁 😆 😅 😂 🤣" |
      