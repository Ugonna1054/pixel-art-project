  // Select color input
// Select size input


// When size is submitted by the user, call makeGrid function

function makeGrid () {
  let height, width, table, rows, submitt;
  height= $('#inputHeight').val();
  width= $('#inputWidth').val();
  table= $('#pixelCanvas');

 table.children().remove(); /* prevents creation of same additionl grid dimensions upon second and  
                                  subsequent clicks  of the submit button*/


  for (let a= 1; a<= height; a++) { table.append('<tr></tr>');};

  rows= $('tr');

  for (let b= 1; b<= width; b++) {rows.append('<td></td>')};

// code to add color on click of td  //

  $('td').click(function () {
    let color;
    color= $('#colorPicker').val();
    $(this).css('background-color', color );
  });

}   // end of makeGrid function


// code to activate the submit button
submitt= $('#sizePicker');
submitt.submit(function(event) {
    event.preventDefault();
    makeGrid();
});
