# SearchApp

This is a sample application generated with Angular 11. Tried to implememt below requirements.

Implement a page with a search box, following these requirements: 
1. The user must be able to type a text to search 
2. The search can be done calling a public JSON API published at: https://jsonplaceholder.typicode.com/comments?q=mytext via XHR. The "q" query string parameter is used to send the search term. 
3. The input box should have typeahead feature and a submit button 
4. The user should see, as the result of the search performed, a list of max 20 results composed by the name and email fields as returned by the server and a summary of the body field with maximum length of 64 characters. 
5. To be meaningful, the search should be performed only for search text longer than 3 characters 
6. A reviewer with a recent node.js distribution installed should be able to download the project and use "npm start" to start a development server and "npm test" to run the unit tests. 
7. You are able to use the technology you feel confident with. It might be angular.js, react, vanilla JavaScript and everything in between. 

## Plaese find the demo [Here](https://aswathy950.github.io/search-app/search/)

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
