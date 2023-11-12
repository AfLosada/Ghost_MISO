Feature: Posts

@user1 @web
Scenario: Create a post, see its preview and publish it
  Given I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on post
  When I create a new post
  When I put on the title "Asereje aseraja"
  And I create a line break
  When I create a markdown card and fill it with "Hola"
  When I click on Preview
  When I see the phone Preview
  When I Publish the post
  Then I see the published post
  Then I send a signal to user 5 containing "Create Pblished Post finish"
  Then I send a signal to user 4 containing "Create Pblished Post finish"
  Then I send a signal to user 3 containing "Create Pblished Post finish"
  Then I send a signal to user 2 containing "Create Pblished Post finish"


@user2 @web
Scenario: Unplublish a post an shecdule it for later
  Given I wait for a signal containing "Create Pblished Post finish"
  When I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I update the title "Asereje aseraja a ser publicado"
  When I schedule a "post" to publish
  When I return to the edition page of the post
  When I click on back button
  And I wait for 1 seconds
  Then I click on scheduled posts
  Then I send a signal to user 5 containing "Edit a published post and schedule it for later finish"
  Then I send a signal to user 4 containing "Edit a published post and schedule it for later finish"
  Then I send a signal to user 3 containing "Edit a published post and schedule it for later finish"

@user3 @web
Scenario: Edit a plublished post
  Given I wait for a signal containing "Create Pblished Post finish"
  And I wait for a signal containing "Edit a published post and schedule it for later finish" for 60 seconds
  When I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  And I wait for 1 seconds
  When I click on edit post
  When I update the title "Asereje aseraja Editado"
  When I update the published post
  Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"  
  Then I send a signal to user 5 containing "Edit post finish"
  Then I send a signal to user 4 containing "Edit post finish"

@user4 @web
Scenario: Create a draft post and then publish it
  Given I wait for a signal containing "Create Pblished Post finish"
  And I wait for a signal containing "Edit a published post and schedule it for later finish" for 60 seconds
  And I wait for a signal containing "Edit post finish" for 90 seconds
  When I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 1 seconds
  When I open the editor for create a new post from the sidenav
  When I put on the title "Asereje aseraja Draft"
  When I click on back button
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  When I update the title "Asereje aseraja Ready to publish"
  When I create a markdown card and fill it with "Hola Mundo"
  When I Publish the post  
  When I return to the edition page of the post
  When I click on back button  
  Then I click on published posts  
  Then I send a signal to user 5 containing "Create a draft an publish it finish"

@user5 @web
Scenario: Unpublish a post an delete it
  Given I wait for a signal containing "Create Pblished Post finish"
  And I wait for a signal containing "Edit a published post and schedule it for later finish" for 60 seconds
  And I wait for a signal containing "Edit post finish" for 90 seconds
  And I wait for a signal containing "Create a draft an publish it finish" for 120 seconds
  When I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 1 seconds
  When I click on published posts
  When I "see the analytics" of the latest "published" post
  When I click on edit post
  When I unpublish the post
  When I click on settings in the editor
  When I delete the post
  Then I click on post
