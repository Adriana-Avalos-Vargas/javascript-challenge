// from data.js
var tableData = data;


// YOUR CODE HERE!
//Lets try a loop to create the new menu
var labels = ["city", "state","country","shape"];
var placeholds =["fresno", "ca", "us", "circle"];

labels.forEach((labely)=>{
    var n = labels.indexOf(labely);
    var ph = placeholds[n];
    var ul = document.getElementById("filters");
    //create li
    var li = document.createElement("li");
    //add a class to the li
    li.className = 'filter list-group-item';
    // create a label
    var label = document.createElement("label");
    //Set the label attribute
    label.setAttribute("for", labely);
    //Create a text
    label.appendChild(document.createTextNode("Enter a" + labely));
    //Create de input
    var input = document.createElement("input");
    input.className ="form-control";
    input.setAttribute("id", labely);
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", ph);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input)    

});

//Render original table
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
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");
  
    // Get the value property of the input element
    var newDate = inputElement1.property("value");
    var newCity = inputElement2.property("value");
    var newState = inputElement3.property("value");
    var newCountry = inputElement4.property("value");
    var newShape = inputElement5.property("value");
    //lets console log
    console.log(newDate);
    console.log(newCity);
    console.log(newState);
    console.log(newCountry);
    console.log(newShape);
    
    //lets try to erase the table
    d3.selectAll("td").remove();
    //FILTER DATA with time
    var filteredTdata = tableData.filter(function(d) {
        return d["datetime"] === newDate 
      });
    
    //Check the leght of time filtered data
      var elements =filteredTdata.length;

    //Write a message if no date exists or do the city filter
    if(elements === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Sorry, no info found for that date");      

    }else{
        var filteredCdata = filteredTdata.filter(function(d) {
            return d["city"] === newCity 
          });
    }

    //Check the leght of time filtered data
    var elements =filteredCdata.length;

    //Write a message if no date exists or do the state filter
    if(elements === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Sorry, no info found for that city");      

    }else{
        var filteredSdata = filteredCdata.filter(function(d) {
            return d["state"] === newState 
          });
    }

    //Check the leght of time filtered data
    var elements =filteredSdata.length;

    //Write a message if no date exists or do the country filter
    if(elements === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Sorry, no info found for that state");      

    }else{
        var filteredCtdata = filteredSdata.filter(function(d) {
            return d["country"] === newCountry 
          });
    }
    
    //Check the leght of time filtered data
    var elements =filteredCtdata.length;

    //Write a message if no date exists or do the shape filter
    if(elements === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Sorry, no info found for that country");      

    }else{
        var filteredData = filteredCtdata.filter(function(d) {
            return d["shape"] === newShape 
          });
        //REWRITE THE TABLE
        //Count the number of elements in the array
        var elements = filteredData.length;
        console.log(elements);

        if (elements === 0) {
            var row = tbody.append("tr");
            var cell = row.append("td");
            cell.text("Sorry, no info found for that shape");

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

        
    }
    
     
};


