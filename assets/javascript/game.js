var startOver ;
var tries = 6;
var words = [
    ["S","O","C","C","E","R"],
    ["T","E","N","N","I","S"],
    ["B","A","S","E","B","A","L","L"]
] 

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

/*$("#startover").on("click",function(){
    $("")
}
)*/

for ( var i = 0; i < letters.length; i++) {
    $("#letters").append("<button>"+letters[i]+"</button>");  
  }

  $('button').on('click',function(){
  //    if(words === $(this.text)){ 
 //     }
    $("#display").append($(this).html());
    });

  