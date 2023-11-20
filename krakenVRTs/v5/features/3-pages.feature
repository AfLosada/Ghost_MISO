Feature: Pagina
@user3 @web
Scenario: Publicar una página 
  Given I set up the name of the scenario as "publish-page"
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on edit for the first page
  And I wait for 1 seconds
  Then I publish the page
  And I wait for 1 seconds
  Then I return to editor
  Then I return to pages
  Then I return to pages
  And I wait for 1 seconds
  Then I filter by published pages
  And I wait for 1 seconds
