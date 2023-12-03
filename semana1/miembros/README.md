Instrucciones de ejecución Cypress

Prerrequisitos:

En primera parte, instalar la version mas reciente 5.68.0, con el comando ghost install --version 5.68.0 --local --force y crear una cuenta con las estas credenciales nedrocoli@gmail.com y contraseña 12345678910

Posteriormente clonar este repositorio, instalar las dependencias con npm install, Luego ejecutar el comando cypress open desde dentro de la carpeta semana1/E2E , ya en la interfaz, cargar la carpeta "cypress". y ejecutar las pruebas que se encuentre en el a carpeta cypress\e2e\ alli se encuentras 3 archivos, 1 de pruebas aleatorias usando faker, otro de pruebas sobre la funcionalidad member y pruebas de login.

Dentro de los escenarios de prueba se crearon los siguientes: 

1. Creacion de miembro
2. Creacion de miembro con credenciales previamente usadas
3. creacion de miembro con credenciales vacias

Dentro de las pruebas aleatorias se plantearon los escenarios : 

1. inicio de seison con credenciales creadas por faker
2. Edicion de perfil con datos creados con faker
3. Edicion de perfil con credenciales invalidad usando faker
4.  Edicion de perfil usando links erroneos con faker
5.  Test de enlace con facebook
6.  Test de enlace de ghost con facebook
7.  Test creacion de nuevos miembros
8.  Edicion de miembro con credenciales invalidas

