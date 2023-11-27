// support/json-helper.js

// Función para cargar los datos desde un archivo JSON
function loadJSONData() {
    return cy.fixture('MOCK_DATA.json');
  }
  
  module.exports = {
    loadJSONData
  };
  