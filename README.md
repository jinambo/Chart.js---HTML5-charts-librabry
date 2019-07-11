# 1. add CSS file to your HTML <head> tag
  `<addr>` <link rel="stylesheet" href="graph.css">
  
# 2. add JS file to the end of your <body> tag
  `<addr>` <script src="graph.js"></script>
  
  
## Column chart

```javascript
        <div class="graph-columns" graph-bulk="3">
            <div class="graph-columns-column" value="50"></div>
            <div class="graph-columns-column" value="30"></div>
            <div class="graph-columns-column" value="80"></div>
            <div class="graph-columns-column" value="90"></div>
        </div>
```

## Row chart

```javascript
        <div class="graph-rows" graph-bulk="4">
            <div class="graph-rows-row" value="70"></div>
            <div class="graph-rows-row" value="35"></div>
            <div class="graph-rows-row" value="41"></div>
            <div class="graph-rows-row" value="56"></div>
        </div>
```

You can set value of column or row from 0% to 100%.
Graph bulk will set the height of column or in the case of row chart the width of row to the value + "00px".
