Feature: Pagina
@user4 @web
Scenario: Programar una página para publicacion
  Given I set up the name of the scenario as "schedule-page"
  Given I navigate to page "http://3.15.201.251/ghost/#/pages"
  When I log in
  When I create a new page
  Then I put on the title "Asereje" 
  And I wait for 1 seconds
  Then I return to pages
  And I wait for 1 seconds
  Then I schedule a "page" to publish
  Then I return to pages
  And I wait for 1 seconds
  Then I filter by scheduled pages
  And I wait for 1 seconds
