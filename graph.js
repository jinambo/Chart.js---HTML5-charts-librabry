//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// COLUMN CHART
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getColumnGraph = document.querySelectorAll('.graph-columns'); // Get the column graph
const getColumns = document.querySelectorAll('.graph-columns-column'); // Get all added columns in a graph

// Get graph-bulk attribute from each column chart
getColumnGraph.forEach(columnGraph => {
    let graphBulk = columnGraph.getAttribute("graph-bulk");
    columnGraph.style.height = graphBulk + '00px';
})

// Set columns options to the values from HTML document
getColumns.forEach(column => {
    let graphColumnVal = column.getAttribute('value');  
    column.style.height = graphColumnVal + "%";
    
    // Create p element and parse the values inside
    let graphColumnParagraph = document.createElement('p');
    graphColumnParagraph.append(graphColumnVal);
    column.appendChild(graphColumnParagraph);
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ROW CHART
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getRowGraph = document.querySelectorAll('.graph-rows');
const getRows = document.querySelectorAll('.graph-rows-row');

// Get graph-bulk attribute from each row chart
getRowGraph.forEach(rowGraph => {
    let graphBulk = rowGraph.getAttribute("graph-bulk");
    rowGraph.style.width = graphBulk + '00px';
})

// Set rows options to the values from HTML document
getRows.forEach(row => {
    let graphRowVal = row.getAttribute('value');  
    row.style.width = graphRowVal + "%";

    // Create p element and parse the values inside
    let graphRowParagraph = document.createElement('p');
    graphRowParagraph.append(graphRowVal);
    row.appendChild(graphRowParagraph);
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PIE CHART
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
