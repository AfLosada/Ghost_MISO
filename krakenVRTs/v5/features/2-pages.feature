Feature: Pagina
@user2 @web
Scenario: Editar una página
  Given I set up the name of the scenario as "edit-page"
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  And I wait for 1 seconds
  Then I edit the markdown of the page by putting the "Asereje Edit"
  And I wait for 1 seconds
  Then I return to pages
  And I wait for 1 seconds
