# reasonlabs-web-app

This service responsibility is to save the incoming data from reasonlabs-cron-handler

## Getting Started

### Dependencies

* Node - 14+
* Mysql

### Executing program

Please create a database in mysql with the following name and also change the username and passowrd accordingly in config.js. Table is create when application is started

```
reasonlabswebappdb
```

In the root directory of the project just do

```
npm start
```

Note: Binary data is saved in base64 encoded format in the table.

## Authors
* Sarthak Soni - sarthaksoni987@gmail.com