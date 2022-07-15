# M223Punchclock-Frontend

This project was created as part of the Module 223 (ZLI) by Elia Schenker. It is the Frontend of the Punchclock Project

It requires Angular CLI Version 12 or higher.

Backend (Quarkus) Repository: https://github.com/eliaSchenker/m223-punchclock-quarkus

The project can be executed using the using the command
`ng serve`
<br>After serving the project will be available on http://localhost:4200

## Brief project description
An employee of a store chain (e.g. Coop, Migros) has the ability to record their work duration (as in old punch cards). Entries can be created, updated and deleted by employees. To better organize the entries certain categories can be added. An employee has to login into their personal account using a username and a password (authenticated using a JWT token). These user accounts are created by administrator. **Only the administrators** have the ability to create new accounts. As well as create new accounts the administrators also have the ability to manage a users location (e.g. the store they work at), update or delete the users and manage the available entry categories.

## Setting up connection to the backend
The **api_config.ts** file contains the URL which is used as the baseurl to access the REST-API (quarkus) backend. It can be easily modified in the aforementioned file.

## First-time Authentication

Once the backend is started, a pre-created administrator account is available for use with the following credentials:<br>
Username: **Test-Admin**<br>
Password: **1234**<br>


## Angular Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
