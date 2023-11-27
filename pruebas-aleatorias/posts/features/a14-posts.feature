Feature: Posts
@user4 @web
Scenario Outline: Create a draft post and then publish it with new content
  Given I navigate to page "http://3.138.112.48/ghost/"
  When I log in
  And I wait for 1 seconds
  When I open the editor for create a new post from the sidenav
  When I put on the title <title-1>
  And I wait for 10 seconds
  When I click on back button
  And I wait for 3 seconds
  When I open the list of Draft Posts
  When I "edit the information" of the latest "draft" post
  And I wait for 1 seconds
  When I update the title <title-2>
  And I wait for 1 seconds
  When I create a markdown card and fill it with <content>
  And I wait for 5 seconds
  When I Publish the post  
  When I return to the edition page of the post
  And I wait for 2 seconds
  When I click on back button
  And I wait for 2 seconds
  Then I click on published posts  

    Examples:
      | title-1             |     title-2             | content               |  
      | "' or '='"          |  "Data a priory"             | "🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶 😶‍🌫️ 😐 😑 😬 🫨 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾"    | 
      | "Data a priory"     | ""         | "Cras tempus lorem sed justo maximus, eget pulvinar  😇 🙂 🙃 😉 😌 😍 🥰massa mattis. Praesent at nisi laoreet, consectetur felis vel, sodales enim. Vestibulum facilisis dignissim eros, quis tempor ligula volutpat sed. Proin id tincidunt velit. Donec tempus quam auctor quam tempus, bibendum pulvinar leo commodo. Nam quis dolor in velit dictum rhoncus. Pellentesque rhoncus, metus non tempus laoreet, ligula purus pellentesque felis, vel semper tellus tortor ut libero. Fusce eros felis, rhoncus ac nisl et, dapibus euismod eros. Sed porta turpis sed eros suscipit, vel finibus dui dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vel orci non mi malesuada auctor quis rhoncus massa. "    | 
      
