Instrucciones de ejecución Cypress

Prerrequisitos:

en primera parte, instalar la version mas reciente 5.45.1, con el comando ghost install --version 5.68.0 --local --force y crear una cuenta con las estas credenciales nedrocoli@gmail.com y contraseña 12345678910

Posteriormente clonar este repositorio, instalar las dependencias con npm install, Luego ejecutar el comando cypress open, ya en la interfaz, cargar la carpeta "pruebas-e2e-aleatorias". y ejecutar las pruebas que se encuentre en el a carpeta cypress\e2e\pruebasAleatorias  y cypress\e2e\pruebasApriori, alli se encuentran 2 archivos, el de las pruebas aleatorias y apriori.

Nota: hay casos de pruebas que dan error y se marcaron con un prefijo de "ISSUE:" dado que hay escenarios donde depende el caracter lo toma o no, sin embaro en la seccion de Issues se describe el porque suceden errores en la prueba. Issues

Estrategia Datos Aleatorios

Para la definición de los data pools se uso la librería @faker-js/faker, la cual genera cadenas de caractéres aleatorios y soporta los siguientes tipos.

* Name
* Number
* Email
* String
* String Date
* URL

Con esta librería se generan datos en el momento de la ejecución de la prueba, de esta manera en los diferentes escenarios se generan cadenas de tipo texton numero, url, entre otras que permite ingresar datos en los escenarios de usuario, correo, descripciones, etc.

Estrategia Datos A-priori

Se utilizo la herramienta online Mockaroo que permite congifurar un data pool en formato json con las caracteristicas requeridas para probar el sistema, como un campo de caracteres especiales y los tamaños de los datos, ademas permite duplicar o llamar los datos de otras columnas para concatenarlas, ademas tiene una interfaz sencilla de manejar, y una generacion de datos por IA que agiliza el trabajo de tipado de datos. en su mayoria se usaron de tipo word, nombres, contraseñas y especial.

Esto se integro mediante un archivo Json que se guardo en la carpeta fixture, desde las pruebas cypress se toma el json, se lee, y leatoriamente se toma un registr, guardando en variables globales los datos y asi utilizar estos datos en cada prueba.
