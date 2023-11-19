Feature: tag

@user1 @web
Scenario: Crear un tag
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 2 containing "crear tag complete"

@user2 @web
Scenario: Crear un internat tag
  And I wait for a signal containing "crear tag complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new  internal tag
  Then I put on the title "#Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 3 containing "crear internal tag complete"

@user3 @web
Scenario: Eliminar tag
  And I wait for a signal containing "crear internal tag complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I click on delete
  Then I send a signal to user 4 containing "Eliminar tag complete"

@user4 @web
Scenario: Editar tag
  And I wait for a signal containing "Eliminar tag complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I click on delete
  Then I send a signal to user 4 containing "Editar tag complete"

@user5 @web
Scenario: Validar color tag
  And I wait for a signal containing "Eliminar tag complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "aja3145A"
  Then I click on save
  Then I return to tags
