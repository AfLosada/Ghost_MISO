Feature: Cambiar informacion personal

@user1 @web
Scenario: Como primer usuario quiero actualizar el nombre del usuario
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "Grupo4"
  And I wait for 10 seconds
  And I click save
  And I wait for 10 seconds
  Then I send a signal to user 2 containing "nombre de usuario actualizado"


@user2 @web
Scenario: Como primer usuario quiero actualizar el nombre y correo del usuario
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "Grupo 4"
  And I wait for 2 seconds
  And I enter new correo "j.pelaezg@uniandes.edu.co"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I send a signal to user 3 containing "nombre de usuario actualizado y correo del usuario"


@user3 @web
Scenario: Como primer usuario quiero actualizar el nombre, correo y slug del usuario
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "Grupo 4"
  And I wait for 2 seconds
  And I enter new correo "j.pelaezg@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter new slug "slug"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I send a signal to user 3 containing "nombre de usuario actualizado , correo del usuario y slug del usuario"




@user4 @web
Scenario: Como primer usuario quiero actualizar el nombre, correo y slug del usuario con valores vacios
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado " "
  And I wait for 2 seconds
  And I enter new correo " "
  And I wait for 2 seconds
  And I enter new slug " "
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds