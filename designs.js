// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    $('tr').remove();
    makeGrid();
    addColor();
});

function makeGrid() {
// Your code goes here!
let gridRows = $('#inputWeight').val();
let gridCols = $('#inputHeight').val();
let j,k;
    // while loop used to create the table.
    j = 1;
    while(j <= gridRows){
        k = 1;
        while(k <= gridCols){
            $('tr:last').append('<td></td>');
            k++;
        }
        $('#pixelCanvas').append('<tr></tr>');
        j++;
    }
}
//Select Color
function addColor(){
    const tableCells = $('td');
    tableCells.click(function (){
        let gridColor = $('#colorPicker').val();
        // add or remove desired color from the cells.
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
          } else {
              $(this).attr('style', 'background-color:' + gridColor);
            }
    }
);}
// adding background color
$('body').css('background-color', 'aliceblue');