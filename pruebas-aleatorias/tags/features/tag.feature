Feature: tag

@user1 @web
Scenario: Crear un tag valido
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 2 containing "crear tag valido complete"

  @user2 @web
Scenario: Crear un tag invalido
  And I wait for a signal containing "crear tag valido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "asd3145A15"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 3 containing "crear tag invalido complete"

@user3 @web
Scenario: Crear un internal tag valido
  And I wait for a signal containing "crear tag invalido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new  internal tag
  Then I put on the title "#Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 4 containing "crear internal tag valido complete"

  @user4 @web
Scenario: Crear un internal tag invalido
  And I wait for a signal containing "crear internal tag valido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new  internal tag
  Then I put on the title "#Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "ajajaj3145A4656a"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 5 containing "crear internal tag invalido complete"

@user5 @web
Scenario: Eliminar tag
  And I wait for a signal containing "crear internal tag invalido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I click on delete
  Then I send a signal to user 6 containing "Eliminar tag complete"

  @user6 @web
Scenario: Eliminar tag invalido
  And I wait for a signal containing "Eliminar tag complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I send a signal to user 7 containing "Eliminar tag invalido complete"

@user7 @web
Scenario: Editar tag valido
  And I wait for a signal containing "Eliminar tag invalido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I change name "Nuevo nombre" 
  And I wait for 1 seconds
  Then I click on save
  Then I return to tags
  Then I send a signal to user 8 containing "Editar tag valido complete"

  @user8 @web
Scenario: Editar tag invalido
  And I wait for a signal containing "Editar tag valido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I change name "Nuevo nombre" 
  And I wait for 1 seconds
  Then I put on the color "aja3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 9 containing "Editar tag invalido complete"

@user9 @web
Scenario: Validar color tag valido
  And I wait for a signal containing "Editar tag invalido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 9 containing "Validar color tag valido complete"

  @user10 @web
Scenario: Validar color tag invalido
  And I wait for a signal containing "Validar color tag valido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "Tag prueba" 
  And I wait for 1 seconds
  Then I put on the color "aja3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 11 containing "Validar color tag invalido complete"

  @user11 @web
Scenario: Crear un tag valido 2
  And I wait for a signal containing "Validar color tag invalido complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "$name_1" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 12 containing "crear tag valido 2 complete"

  @user12 @web
Scenario: Crear un tag invalido 2
  And I wait for a signal containing "crear tag valido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "$name_2" 
  And I wait for 1 seconds
  Then I put on the color "$string_1"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 13 containing "crear tag invalido 2 complete"

@user13 @web
Scenario: Crear un internal tag valido 2
  And I wait for a signal containing "crear tag invalido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new  internal tag
  Then I put on the title "#"+"$name_3" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 14 containing "crear internal tag valido 2 complete"

  @user14 @web
Scenario: Crear un internal tag invalido 2
  And I wait for a signal containing "crear internal tag valido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new  internal tag
  Then I put on the title "$name_4" 
  And I wait for 1 seconds
  Then I put on the color "$string_2"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 15 containing "crear internal tag invalido 2 complete"

@user15 @web
Scenario: Eliminar tag 2
  And I wait for a signal containing "crear internal tag invalido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I click on delete
  Then I send a signal to user 16 containing "Eliminar tag 2 complete"

  @user16 @web
Scenario: Eliminar tag invalido 2
  And I wait for a signal containing "Eliminar tag 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I delete a tag 
  And I wait for 1 seconds
  Then I send a signal to user 17 containing "Eliminar tag invalido 2 complete"

@user17 @web
Scenario: Editar tag valido 2
  And I wait for a signal containing "Eliminar tag invalido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I change name "$name_5" 
  And I wait for 1 seconds
  Then I click on save
  Then I return to tags
  Then I send a signal to user 18 containing "Editar tag valido 2 complete"

  @user18 @web
Scenario: Editar tag invalido 2
  And I wait for a signal containing "Editar tag valido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I edit a tag
  Then I change name "$name_6" 
  And I wait for 1 seconds
  Then I put on the color "$string_3"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 19 containing "Editar tag invalido 2 complete"

@user19 @web
Scenario: Validar color tag valido 2
  And I wait for a signal containing "Editar tag invalido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "$name_7" 
  And I wait for 1 seconds
  Then I put on the color "#3145A"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 20 containing "Validar color tag valido 2 complete"

  @user20 @web
Scenario: Validar color tag invalido 2
  And I wait for a signal containing "Validar color tag valido 2 complete" for 200 seconds
  Given I navigate to page "http://3.138.112.48/ghost/#/pages"
  When I log in
  When I click on tags
  When I create a new tag
  Then I put on the title "$name_8" 
  And I wait for 1 seconds
  Then I put on the color "$string_4"
  Then I click on save
  Then I return to tags
  Then I send a signal to user 21 containing "Validar color tag invalido 2 complete"

  

