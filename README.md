# wsc-ng-ledger

Given an array of [ { desc: 'Item 1', amount: '100' }, ... ]
the wsc-ledger directive displays an accounting ledger of items 
and their corresponding amounts as currency.
Item descriptions and amounts are editable.

I designed wsc-ledger to bare-bones with as few dependencies and assumptions as possible.  
For example, it does not depend on Bootstrap for styling.
It leaves it up to the developer to display and update the total if required
and to provide a button to add new items.

## Usage

See [example.html](https://github.com/lsiden/wsc-ng-ledger/blob/master/example.html).

To edit, user clicks on a cell.  

To save the edit, user hits Tab or Return or clicks outside the cell.

To abandon an edit and revert to the original value, user hits ESC.

## Installation

    bower install wsc-ledger

In your HTML file

    <script src="./bower_components/wsc-ng-ledger/dist/wsc-ledger.js"></script>
    <script src="./bower_components/wsc-ng-ledger/dist/templates.js"></script>

## Styling

wsc-ledger provides a minimal stylesheet,
dist/wsc-ledger.css
that you may link to
or use as a template to write your own.

In order to keep wsc-ledger as independent as possible,
I did not include any dependency on [Twitter Bootstrap](https://getbootstrap.com/).
Instead, wsc-ledger.css makes wsc-ledger responsive 
by setting a fixed with for the table's second column,
while the first column's width is allowed to expand and contract 
with the width of the table element 
to fill the remaining space.

## License

See [LICENSE.md](https://github.com/lsiden/wsc-ng-ledger/blob/master/LICENSE.md)
