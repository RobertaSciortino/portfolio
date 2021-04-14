$(document).ready(function(){
  const colors = {
    GREEN: 0,
    RED: 1,
    YELLOW: 2,
    BLUE: 3
  };

  const colorsCount = Object.keys(colors).length;
  
  let cpuColors = [];

  //click audio
  var green = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var yellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

  $( "button" ).click(() => {
    $(".game-over").empty();
    setTimeout(switchFirstColor, 1000);
  }).focusin(function() {
    $(this).addClass("start");
  });

  //click events
  $("#color1").click(() => {
    userSelection(colors.GREEN);
    green.play();
    activeGreen();
  });
  $("#color2").click(() => {
    userSelection(colors.RED);
    red.play();
    activeRed();
  });
  $("#color3").click(() => {
    userSelection(colors.YELLOW);
    yellow.play();
    activeYellow();
  });
  $("#color4").click(() => {
    userSelection(colors.BLUE);
    blue.play();
    activeBlue();
  });

  //click counter
  let count = 0;

  //functions

  function userSelection(color) {
    count += 1;
    if (color != cpuColors[count - 1]) {
      cpuColors = [];
      count = 0;
      $( "button" ).removeClass("start");
      $(".game-over").append("<h1>game over !</h1>");
    }
    else if (count == cpuColors.length) {
      cpuColors.push(Math.floor(Math.random() * colorsCount));
      count = 0;
      setTimeout(() => {
        for (let i = 0; i < cpuColors.length; i++) {
          setTimeout(() => switchNewRound(cpuColors[i]), 1000 * i);
        }
      }, 2000);
      
    }
    
  }
  

  function switchNewRound(color) {
    switch (color) {
      case colors.GREEN:
      activeGreen();
      break;
      case colors.RED:
      activeRed();
      break;
      case colors.YELLOW:
      activeYellow();
      break;
      case colors.BLUE:
      activeBlue();
      break;
            }
  }

  function switchFirstColor() {
    var randomColor = Math.floor(Math.random() * colorsCount);
    cpuColors.push(randomColor);

    switch (randomColor) {
      case colors.GREEN:
      activeGreen();
      break;
      case colors.RED:
      activeRed();
      break;
      case colors.YELLOW:
      activeYellow();
      break;
      case colors.BLUE:
      activeBlue();
      break;
            }
  }

  function activeGreen() {
    $( "#color1" ).removeClass("green").addClass("selectedGreen");
    green.play();
     setTimeout(() => {
         $("#color1").removeClass("selectedGreen").addClass("green");
     }, 500);
  }

  function activeRed() {
    $( "#color2" ).removeClass("red").addClass("selectedRed");
    red.play();
     setTimeout(() => {
         $( "#color2" ).removeClass("selectedRed").addClass("red");
     }, 500);
  }

  function activeYellow() {
    $( "#color3" ).removeClass("yellow").addClass("selectedYellow");
    yellow.play();
     setTimeout(() => {
         $("#color3").removeClass("selectedYellow").addClass("yellow");
     }, 500);
  }

  function activeBlue() {
    $( "#color4" ).removeClass("blue").addClass("selectedBlue");
    blue.play();
     setTimeout(() => {
         $("#color4").removeClass("selectedBlue").addClass("blue");
     }, 500);
  }

  

  

});
        