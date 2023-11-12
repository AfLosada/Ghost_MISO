Feature: Pagina

@user1 @web
Scenario: Crear una página
  Given I navigate to page "http://localhost:2368/ghost/"
  When I log in
  When I click on pages
  When I create a new page
  Then I put on the title "Asereje" 
  Then I create a markdown card and fill it with "asdfg"
  Then I return to pages
  Then I send a signal to user 2 containing "crear pagina complete"


@user2 @web
Scenario: Editar una página
  And I wait for a signal containing "crear pagina complete" for 15 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  Then I edit the markdown of the page by putting the "Asereje Edit"
  Then I return to pages
  And I wait for 1 seconds
  Then I send a signal to user 3 containing "editar pagina complete"

@user3 @web
Scenario: Publicar una página 
  And I wait for a signal containing "editar pagina complete" for 30 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  Then I publish the page
  Then I return to editor
  Then I return to pages
  Then I filter by published pages
  And I wait for 1 seconds
  Then I send a signal to user 4 containing "publish page complete"

@user4 @web
Scenario: Programar una página para publicacion
  And I wait for a signal containing "publish page complete" for 45 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  Then I schedule a "page" to publish
  Then I return to editor
  Then I return to pages
  And I wait for 1 seconds
  Then I filter by scheduled pages
  Then I send a signal to user 5 containing "schedule page complete"

@user5 @web
Scenario: Dejar de programar una página para publicacion
  And I wait for a signal containing "schedule page complete" for 60 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  Then I filter by scheduled pages
  When I click on edit for the first page
  Then I unschedule the page
  And I wait for 1 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/pages"
  Then I filter by scheduled pages
