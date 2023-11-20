Feature: Posts
@user2 @web
Scenario: Unplublish a post an shecdule it for later
  Given I set up the name of the scenario as "shecdule-post"
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I update the title "Asereje aseraja a ser publicado"
  When I schedule a "post" to publish
  And I wait for 1 seconds
  When I return to the edition page of the post
  When I click on back button
  And I wait for 1 seconds
  Then I click on scheduled posts
