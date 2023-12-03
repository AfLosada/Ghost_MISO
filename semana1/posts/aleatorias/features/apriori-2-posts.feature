Feature: Posts

@user1 @web
Scenario Outline: Create a post, see its preview and publish it
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 2 seconds
  When I click on post
  When I create a new post
  When I put on the title <title>
  When I click on settings in the editor
  And I wait for 1 seconds
  When I add <content> to header with code injection
  And I wait for 2 seconds
  And I click on settings in the editor
  And I wait for 2 seconds
  And I put on the title <title>
  And I wait for 1 seconds
  When I Publish the post
  Then I see the published post

    Examples:
      | title     | newtittle | content               |  
      | "Emojis"  | "Emojis" | " 🧑‍🦳 👩‍🦲 🧑‍🦲 👱‍♀️ 👱‍♂️ 🧓 👴 👵 🙍 🙍‍♂️ 🙍‍♀️ 🙎 🙎‍♂️ 🙎‍♀️ 🙅 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🧏 🧏‍♂️"    | 
      | "Sql injection" | "Sql injection" | "105; DROP TABLE Suppliers"    | 
      | "Special characters"  | ""Special characters"" | "√∫∂ƒå€æƒ#"    | 
