var table;
var years_1=[];
var races=[];
var margin=120;
function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw3/CensusBureauData_Education_ALL.csv", "csv");
//   table = loadTable("data/CensusBureauData_Education_ALL.csv", "csv");
}

function setup() {
    var canvas = createCanvas(900,600);  
    // canvas.parent("container");
    parseData();
    // createGraph(name);
    createList();
    
}

function parseData(){
    for(var i =1;i<table.getRowCount(); i++){
        var yearRow=table.getRow(i);
        var year_1 ={};
        year_1.id=table.getRow(i).getString(0);

        year_1.Race=[];
        for(var j=1; j<table.getColumnCount(); j++){
            var item={};
            item.label=table.getRow(0).getString(j);
            item.value=yearRow.getString(j);
            append(year_1.Race, item);
        }
        append(years_1, year_1);
    }

    for(var k=1;k<table.getColumnCount(); k++){
        var raceCol=table.getColumn(k);
        var race={};
        race.id=raceCol[0];
        race.year_2=[];
        for(var m=1; m<table.getRowCount(); m++){
            var item_2={};
            item_2.label=table.getRow(m).getString(0);
            item_2.value=table.getRow(m).getString(k);
            append(race.year_2,item_2);
        }
        append(races,race);
    }
}

function createList(){
  // starting x and y posiition
  var xPos = 20;
  var yPos = 20;
  dropdown = createElement('select');
  dropdown.position(20,40);
  for (var i = 0; i < races.length; i++) {
      var option = createElement('option');
      option.attribute('value',races[i].id);
      option.html(races[i].id);
      option.parent(dropdown);
    }

  // creating headers
  textSize(10);
  var raceHeader = createDiv("Select Race");
  raceHeader.position(xPos, yPos);
  
  // setting the style
  raceHeader.style("font-weight", "bold");
  yPos +=30;

var droptest = createDiv('Select to view data')

  dropdown.elt.onchange = function() {
    droptest.html(this.value);
    createGraph(droptest.html());
  }

  // go through all races
//   for(var i =0; i<races.length; i++){
//     // Display the state name
//     var raceDiv = createDiv(races[i].id);
//     raceDiv.style("cursor", "hand");
//     raceDiv.position(xPos, yPos);
//     raceDiv.class("listLink");
//     raceDiv.mouseClicked(
//       function(){

//         createGraph(this.html());

//       var actives = selectAll('.active');
//       // We can then iterate through the array and hide all the elements.
//       for (var j = 0; j < actives.length; j++) {
//         actives[j].removeClass("active");
//       }
//         this.addClass("active");
//       }
//       )
//      yPos +=30;
//   }
}



function createGraph(name){
    var race_3 = findRaceByName(name);
    var maxValue=0;
    var maxYear=0;
    for(i=0; i<years_1.length;i++){
        if(years_1[i].Race[0].value>maxValue)
        maxValue=years_1[i].Race[0].value;
    }

    for(j=0; j<years_1.length;j++){
        if(years_1[j].id>maxYear)
        maxYear=years_1[j].id;
    }
    console.log("maxValue: " + maxValue);
    console.log("maxYear: " + maxYear);

    background(245);
    noStroke;
    textAlign(LEFT);
    textSize(16);

    text("% of People With 4yr College Degree: " + race_3.id,margin,margin-20);  
    
    // add labels to the x axis
    stroke(100);
    line(margin, height-margin, width-margin, height-margin);
    noStroke();
    textAlign(RIGHT);
    textStyle(NORMAL);
    textSize(10);
    for(var i=1964; i<maxYear; i+=1){
        var yLabel_1 = height-margin+25;
        var xLabel_1 = map(i,1964, maxYear, margin+5, width-margin);
        push();
        noStroke();
        fill(0);
        translate(xLabel_1+5,yLabel_1);
        rotate(PI/2);
        text(i, 0,0);
        pop();


        var point_x = map(Number(race_3.year_2[i-1964].label),1964,maxYear,margin+5, width-margin);
        var point_y = map(Number(race_3.year_2[i-1964].value),25, maxValue,height-margin, margin);
        var point_x_2 = map(Number(race_3.year_2[i-1964+1].label),1964,maxYear,margin+5, width-margin);
        var point_y_2 = map(Number(race_3.year_2[i-1964+1].value),25, maxValue,height-margin, margin);
//oldones
        // var point_x = map(Number(years_1[i-1964].id),1964,maxYear,margin+5, width-margin);
        // var point_y = map(Number(years_1[i-1964].Race[0].value),35, maxValue,height-margin, margin);
        // var point_x_2 = map(Number(years_1[i-1964+1].id),1964,maxYear,margin+5, width-margin);
        // var point_y_2 = map(Number(years_1[i-1964+1].Race[0].value),35, maxValue,height-margin, margin);
        // fill(0);
        stroke(0);
        point(point_x,point_y);
        line(point_x,point_y,point_x_2,point_y_2);
        // console.log("for "+point_x+" it's "+point_y+" and then for "+point_x_2+" it's "+point_y_2);
    }

// add labels to the y axis
    stroke(100);
    line(margin, margin, margin, height-margin);
    noStroke();
    textAlign(RIGHT);
    textStyle(NORMAL);
    var increment = maxValue/5;
    increment = Math.round(increment);
    for(var i=25; i<maxValue; i+=10){
        var xLabel = margin-10;
        var yLabel = map(i,25, maxValue,height-margin, margin);
        noStroke();
        fill(0);
        text(i, xLabel, yLabel+5);
        stroke(0);
        line(xLabel+5,yLabel,xLabel+10,yLabel);
    }
}

function findRaceByName(name){
  var race_3;
  for(var i=0; i<races.length; i++){
    if(races[i].id == name){
      race_3 = races[i];
      return race_3;
    }
  }
}