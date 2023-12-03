Feature: Iniciar Sesión

@user1 @web
Scenario: Iniciar Sesión con campos vacios
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAMEVACIO>"
  And I wait for 2 seconds
  And I enter password "<PASSWORDVACIO>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds

@user2 @web
Scenario: Iniciar Sesión con datos erroneos
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAMEINCORRECTO>"
  And I wait for 2 seconds
  And I enter password "<PASSWORDINCORRECTO>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds

@user3 @web
Scenario: Iniciar Sesión con datos correctos
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds