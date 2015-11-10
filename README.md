# acando-react-boilerplate-extended
boilerplate for a react-reflux web project with webpack, babel, example GET from a rest-service, reflux actions and stores, and hotloading

The project is intended for internal use in Acando Norge and use, distribution or modification of the logo and/or other images is prohibited.

#To use:

(This Project requires that you have [Node](https://nodejs.org/en/) installed on your computer)

Open a terminal window and navigate to where you want the project to reside

`$ git clone git@github.com:ibjohansen/acando-react-boilerplate-extended.git`

`$ npm install`

If there is a folder: public/build, delete it as the development-server will use this instead of the files in app

`$ npm start`

navigate to [localhost:3000](http://localhost:3000) in your browser

You can also find a [demo here](http://acando-react-boilerplate-2.herokuapp.com]) 

Short descitpion of the app (in Norwegian)

## Applikasjonen inneholder:

*Utviklingsverktøy som*
* Webpack
* React-hot-loader
* Node-Express server
* Babel
* Autoprefiksing av css

*Teknologier*
* React; rendering
* Reflux; dataflyt-arkitetkur
* React-bootstrap; CSS, scaffolding og look&feel
* React-Router; for ruting av sider

*Eksempelsider*
* Hjem
* Enkelt eksempel med GET med SuperAgent - oppslag i en tjeneste som oppretter brukernavn
* Oppslag i knett.evita.no, les nyhetsfeed og se telefonliste
* Autentiser med cookie (via et eksternt node api)
* Autentiser med basic authentication, dette er vanlig login med ditt knett brukernavn og passord (også via et eksternt ode api)
* Enkelt eksempel som viser pålogging mot Google
