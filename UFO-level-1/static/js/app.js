// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select the table
var ufoTable = d3.select("table")
//Select the table body
var tbody = ufoTable.select("tbody")

//Render the table without filter
data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


