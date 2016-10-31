////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');

var {
  h1,
    div,
    ul,
    li
} = React.DOM;

var element =
  div({},
    h1({}, "Hello"),
    ul({},
      li({}, "Clojure"),
       li({}, "ClojuresSCript")
      )
     );


var element2 = (
        <div>
        <h1> hello from jsx</h1>
        <ul><li>Pizza</li>
        <li>test</li>
        </ul>
        </div>
)

React.render(element2, document.body);
