const dirPath = require('path');
const webApp = require('express');
const webSession = require('express-session');
const hbsEngine = require('express-handlebars');
const appControllers = require('./controllers');
const utilityFunctions = require('./utils/helpers');

const dbConnection = require('./config/connection');
const SQLStore = require('connect-session-sequelize')(webSession.Store);

const appInstance = webApp();
const appPort = process.env.PORT || 3001;

// Initialize Handlebars.js engine with custom utility functions
const hbsConfiguration = hbsEngine.create({ helpers: utilityFunctions });

const sessionOptions = {
  secret: 'Top secret passphrase',
  cookie: {
    // Set the session to expire in 50 minutes
    expire: 20 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SQLStore({
    db: dbConnection
  })
};

appInstance.use(webSession(sessionOptions));

// Define the template engine for the web application
appInstance.engine('handlebars', hbsConfiguration.engine);
appInstance.set('view engine', 'handlebars');

appInstance.use(webApp.json());
appInstance.use(webApp.urlencoded({ extended: true }));
appInstance.use(webApp.static(dirPath.join(__dirname, 'public')));

appInstance.use(appControllers);

dbConnection.sync({ force: false }).then(() => {
  appInstance.listen(appPort, () => console.log('Server started successfully'));
});
