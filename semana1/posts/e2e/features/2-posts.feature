Feature: Posts

@user1 @web
Scenario: Create a post whit a specific url and only form mebers
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on post
  When I create a new post
  When I put on the title "Asereje aseraja completo"
  And I create a line break
  When I create a markdown card and fill it with "Hola"
  When I click on settings in the editor
  And I wait for 1 seconds
  And I update the post url with "my-new-post"
  And I wait for 1 seconds
  And I set it up only form members
  And I wait for 1 seconds
  When I Publish the post
  And I wait for 1 seconds
  And I navigate to page "http://3.138.112.48/ghost/#/posts"
  And I wait for 1 seconds
  Then I see the published post in the posts in the members section of posts

