// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select the table
var ufoTable = d3.select("table");
//Select the table body
var tbody = ufoTable.select("tbody");

//Lets add all the info to the table
data.forEach((ufoSight) => {
    //add a ruw in the table body
    var row = tbody.append("tr");
    //for each  ufo sighting extract each value and key
    //then create a cell and write the text or value 
    Object.entries(ufoSight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Lets detect a change in the button and the variable
//Detect the button
var button = d3.select("#filter-btn");

//See if someone press the button and go to function Handle_click
button.on("click", handleClick);

//Function that get activated if some click a button
function handleClick(){
    //Print in console that some one click the button
    console.log("Someone prees the button");
    
    //Print what trigger the event
    console.log(d3.event.target);
    console.log("Someone write something");
    
    
    //Lets extract the text
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var newDate = inputElement.property("value");
    console.log("the date")
    console.log(newDate);
    
    //FILTER DATA
    var filteredData = tableData.filter(function(d) {
        return d["datetime"] === newDate 
      });
    console.log("aQUÍ SI LLEGÓ");
    console.log(filteredData);

    //lets try to erase the table
    d3.selectAll("td").remove();
    
    //REWRITE THE TABLE
    //Count the number of elements in the array
    var elements = filteredData.length;
    console.log(elements);

    if (elements === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Sorry, no info found");

     } else {
        filteredData.forEach((ufoSight) => {
            //add a ruw in the table body
            var row = tbody.append("tr");
            //for each  ufo sighting extract each value and key
            //then create a cell and write the text or value 
            Object.entries(ufoSight).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
     }
 
};


