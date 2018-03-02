var p1p2 = []
var Roll = []

function player(playername, score) {
  this.playername= playername;
  this.score = score;
  p1p2.push(this);
}

Array.prototype.sum = function() {
  return this.reduce(function(a,b) {return a+b});
}


$(document).ready(function() {
  $("form#PNameForm").submit(function(event){
    event.preventDefault();

    var P1Name = $("#P1Name").val();
    var P2Name = $("#P2Name").val();
    var p1 = new Player(P1Name, 0);
    var p2 = new Player(P2Name, 0);
    $("#P1P1Display").text(p1p2[].playerName + "s turn").show();
    
