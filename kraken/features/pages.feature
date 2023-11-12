Feature: Pagina

@user1 @web
Scenario: Crear una página
  Given I navigate to page "http://localhost:2368/ghost/"
  When I log in
  And I wait for 2 seconds
  When I click on pages
  When I create a new page
  Then I put on the title "Asereje" 
  Then I create a markdown card and fill it with "asdfg"
  Then I return to pages
  Then I send a signal to user 2 containing "crear pagina complete"


@user2 @web
Scenario: Editar una página
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  And I wait for a signal containing "crear pagina complete" for 15 seconds
  When I click on edit for the first page
  Then I edit the markdown of the page by putting the "Asereje Edit"
  Then I return to pages
  Then I send a signal to user 3 containing "editar pagina complete"

@user3 @web
Scenario: Publicar una página 
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  And I wait for a signal containing "editar pagina complete" for 30 seconds
  When I click on edit for the first page
  Then I publish the page
  Then I return to editor
  Then I return to pages
  Then I filter by published pages
  Then I send a signal to user 4 containg "publish page complete"

@user4 @web
Scenario: Programar una página para publicacion
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  And I wait for a signal containing "publish page complete" for 45 seconds
  When I click on edit for the first page
  Then I schedule a "page" to publish
  Then I return to editor
  Then I return to pages
  Then I filter by scheduled pages
  Then I send a signal to user 5 containg "schedule page complete"


@user5 @web
Scenario: Dejar Programar una página que fue programada para publicarse
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  When I log in
  And I wait for a signal containing "schedule page complete" for 70 seconds
  When I click on edit for the first page
  Then I schedule a page to publish
  Then I return to editor
  Then I return to pages
  Then I filter by scheduled pages
