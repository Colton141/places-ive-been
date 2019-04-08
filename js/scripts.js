// Business Logic
function DestinationList() {
  this.listOfDestinations = []
  this.currentId = 0
}

DestinationList.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.listOfDestinations.push(destination);
}

DestinationList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Destination(location, landmarks, timeOfYear) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear
}

function displayDestinations(listToDisplay) {
  var displayList = $("ul#destinations");
  var htmlDisplay = "";
  listToDisplay.listOfDestinations.forEach(function(destination) {
  htmlDisplay += "<li id=" + destination.id + ">" + destination.location + " "  + "</li>";
  });
  displayList.html(htmlDisplay);
}

function displayProperties(listToDisplay) {
  var htmlDisplay2 = "";
  listToDisplay.listOfDestinations.forEach(function(destination) {
    var displayList2 = $("#properties");
    htmlDisplay2 += "<ul>";
    htmlDisplay2 += "<li class=" + "prop" + destination.id + ">" + " " + destination.landmarks + destination.timeOfYear + "</li> </ul>";
    displayList2.html(htmlDisplay2);

});
}

// User Interface
$("document").ready(function() {
  var destinationList = new DestinationList();
  var destination1 = new Destination("Portland", ["Epicodus", "Moda Centeer", "Pioneer Square"], "Spring");
  var destination2 = new Destination("Seattle", ["Space Neddle", "Water Front", "Pike PLace"],  "Summer");
  destinationList.addDestination(destination1);
  destinationList.addDestination(destination2);
  console.log(destinationList.listOfDestinations);

  displayDestinations(destinationList);
  displayProperties(destinationList);

  $("#1").click(function(){
    $(".prop1").toggle();
    $("#2").toggle();
  });
  $("#2").click(function(){
    $(".prop2").toggle();
    $("#1").toggle();
  });

});
