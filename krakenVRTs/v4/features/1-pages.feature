Feature: Pagina

@user1 @web
Scenario: Crear una página
  Given I set up the name of the scenario as "create-page"
  Given I navigate to page "http://3.15.201.251/ghost/"
  When I log in
  When I click on pages
  When I create a new page
  Then I put on the title "Asereje" 
  Then I create a markdown card and fill it with "asdfg"
  And I wait for 1 seconds
  Then I return to pages

