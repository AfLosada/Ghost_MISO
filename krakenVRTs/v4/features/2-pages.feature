Feature: Pagina
@user2 @web
Scenario: Editar una página
  Given I set up the name of the scenario as "edit-page"
  Given I navigate to page "http://3.15.201.251/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  Then I update the title "Asereje Edit"
  And I wait for 1 seconds
  Then I return to pages
  And I wait for 1 seconds
  Then I send a signal to user 3 containing "editar pagina complete"
