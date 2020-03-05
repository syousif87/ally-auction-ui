# Ally Auction Programming Challenge
### Prerequisites
* [Node](https://nodejs.org/en/)
* [Angular CLI](https://cli.angular.io/)
### Technologies
* [Angular](https://angular.io/)
* [TypeScript](https://www.typescriptlang.org/)
### Server/API
* [Ally Auction Springboot Server](https://github.com/syousif87/ally-auction-server)

## TO RUN
Port 4200 for ally-auction-ui, 9090 for ally-auction-server
Make sure you have ally-auction-server running on the same machine with a local PostgreSQL instance running.  Instructions to set that up are in ally-auction-serer README.md file.

$ ng serve

Enter anything in login screen, this will be your "bidder name"

Generate a couple of random auctions (with random reserve prices)

Select a bid as shown in a list of UUID's

Place bid as user

Hit back, change user, out bid

Hit 'Bid Log' button to see history of logs

# Ally Auction Angular UI Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).