// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let date = d3.select("#datetime").property("value");
let city = d3.select("#city").property("value");
let state = d3.select("#State").property("value");
let country = d3.select("#country").property("value");
let shape = d3.select("#shape").property("value")
let filteredData = tableData;

// 3. Use this function to update the filters. 
function updateFilters() {
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `entered` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  } 
    else if (city){
      filteredData = filteredData.filter(row => row.city === city);
    }     
      else if (state){
        filteredData = filteredData.filter(row => row.state === state);
      }
        else if (country){
          filteredData = filteredData.filter(row => row.country === country);
        }
          else if (shape){
            filteredData = filteredData.filter(row => row.shape === shape);
          }
    else {
      console.log("Not found")
    }
  
  };
    // 4a. Save the element that was changed as a variable.
let changeElement = filteredData.filter(filteredData);
    // 4b. Save the value that was changed as a variable.
let changeValue = filteredData.filter(values);
    // 4c. Save the id of the filter that was changed as a variable.
let changeID = filteredData.filter("id");
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 if (changeValue) {
   filterValue[changeID] = changeValue;
 }
 else {
   delete filterValue[changeID];
 }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  let filteredData = tableData;
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    filteredData=filteredData.forEach((filterValue)=> {
      filterValue =>filterValue.id == "id"});
      console.log(filteredData)
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  buildTable(filteredData)
  
  // 2. Attach an event to listen for changes to each filter
  
  // Build the table when the page loads
  buildTable(tableData);
