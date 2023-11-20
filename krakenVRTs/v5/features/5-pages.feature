Feature: Pagina
@user5 @web
Scenario: Dejar de programar una página para publicacion
  Given I set up the name of the scenario as "stop-schedule-page"
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  Then I filter by scheduled pages
  When I click on edit for the first page
  Then I unschedule the page
  And I wait for 1 seconds
  Then I navigate to page "http://3.138.112.48/ghost/#/pages"
  Then I filter by scheduled pages
