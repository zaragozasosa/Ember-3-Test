# Ember 3 test

This README is just to explain some of the details behind this test project.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd legalmation-app`
* `npm install`

## External libraries

* ember-bootstrap
* SASS

## Mirage configuration

The current configuration creates five random Pokemon on start. These have their level and their typing created at random (from a simple array). They also own 5 Moves, created randomly as well.

## Components created

For this project, I decided to try to use the least amount of external dependencies, so I made a few components to make the code cleaner.
To render tables, I created the component `BasicTable` which with an array of rows and columns, can render a table (for the moment, of basic strings and integers). Internally it uses `BasicTableCell` to render each <TD> of the table, this one could get similar looking components to be able to render more complicated objects. Finally, `BasicTableFilter` is used to render inputs on the top of the table, allowing the user to filter the values displayed in the table.
  
Since Ember somehow still doesn't own a native select component, I created `BasicSelect` to create dropdowns that react to changes and are able to load a default value.
And making use of `ember-bootstrap`, I made `BasicModal` encapsulating the code used to generate modals they have in their API.

## Testing

The project currenly only has a few unit and integration tests. I wanted to add a few acceptance tests, but somehow I could not make them work with Mirage.


Any other question? Feel free to contact me and ask!

