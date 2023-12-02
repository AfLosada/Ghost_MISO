Feature: tag

@user1 @web
Scenario: Crear un tag
  Given I navigate to page "http://3.15.201.251/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
 

