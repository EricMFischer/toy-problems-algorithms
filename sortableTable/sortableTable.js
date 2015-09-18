/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

// Given a jQuery object that represents a set of DOM elements, the .eq() method constructs a new jQuery object from one element within that set.

// .eq() returns it as a jQuery object, meaning the DOM element is wrapped in the jQuery wrapper, which means that it accepts jQuery functions.

// .get() return a raw DOM element. You may manipulate it by accessing its attributes and invoking its functions as you would on a raw DOM element. But it loses its identity as a jQuery-wrapped object, so a jQuery function like .fadeIn won't work.

// order: 1 --> ascending
// order: -1 --> descending

// $(function sortTable(order, nthChildOfTableRow) {
//   var rows = $('#myTable tbody tr').get();
//   console.log(rows);

//   rows.sort(function(a,b) {
//     var A = $(a).children('td').eq(nthChildOfTableRow).text().toUpperCase();
//     var B = $(b).children('td').eq(nthChildOfTableRow).text().toUpperCase();

//     if (A < B) {
//       return -1*order;
//     }
//     if (A > B) {
//       return 1*order;
//     }
//     return 0;
//   });

//   $.each(rows, function(index, row) {
//     $('#myTable').children('tbody').append(row);
//   });

// });

// // prevAll: gets all previous sibling elements

// var order_ItemName = 1;
// var order_NumOfPounds = 1;
// var order_PricePerPound = 1;
// var order_ExpirationDate = 1;

// // var hey = $('#myTable thead tr:eq(1)').get();
// // console.log(hey);

// $('#myTable thead tr:eq(0)').click(function() {
//   order_ItemName *= -1;
//   var n = $(this).prevAll().length;
//   sort(order_ItemName, n);
// });

// $('#myTable thead tr').eq(1).click(function() {
//   order_NumOfPounds *= -1;
//   var n = $(this).prevAll().length;
//   sort(order_NumOfPounds, n);
// });

// $('#myTable thead tr').eq(2).click(function() {
//   order_PricePerPound *= -1;
//   var n = $(this).prevAll().length;
//   sort(order_PricePerPound, n);
// });

// $('#myTable thead tr').eq(3).click(function() {
//   order_ExpirationDate *= -1;
//   var n = $(this).prevAll().length;
//   sort(order_ExpirationDate, n);
// });









$(function() {
  var $tbody = $('tbody');
  var $rows = $tbody.children();

  // helpers
  var getCellValue = function(rowEl, colIx) {
    var td = rowEl.children[colIx];
    return $(td).text();
  }

  var getType = function(colIx) { // returns the type of data in that row ('string' data or 'number' data)
    var val = getCellValue($rows[0], colIx);
    return isNan(val) ? 'string' : 'number';
  }

  // sort colummn when table header is clicked
  $('th').on('click', function(e) {
    var colIx = $(this).index(); // in jquery cb for any event handler, this element ('th') is the jquery tag
    var type = getType(colIx);

    $rows.detach().sort(function(row1, row2) {
      var value1 = getCellValue(row1, colIx);
      var value2 = getCellValue(row2, colIx);
      if (type === 'string') return value1 > value2;
      if (type === 'number') return value1 - value2;
    });
  });

  // append back to body
  $tbody.append($rows);
})
