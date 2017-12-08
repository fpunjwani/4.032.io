var table;
var years_1=[];
var races=[];
var margin=40;
var xPos = 20;
var yPos = 130;
function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw3/CensusBureauData_Education_ALL.csv", "csv");
//   table = loadTable("data/CensusBureauData_Education_ALL.csv", "csv");
}

function setup() {
    var canvas = createCanvas(300,300); 
    canvas.parent('sketch-holder'); 
    parseData();
    createList();
    
}

function parseData(){
    for(var i =0;i<table.getRowCount(); i++){
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
  dropdown = createElement('select');
  dropdown.position(xPos,yPos+20);
      noStroke;
    textAlign(CENTER);
    textSize(10);
    text("% of People With 4yr College Degree",150,margin-20);  
  for (var i = 0; i < races.length; i++) {
      var option = createElement('option');
      option.attribute('value',races[i].id);
      option.html(races[i].id);
      option.parent(dropdown);
    }

  // creating headers
  textSize(8);
  var raceHeader = createDiv("select race");
  raceHeader.position(xPos, yPos);
  raceHeader.style("font-style", "italic");
  raceHeader.style("fontSize","12px");
  // setting the style
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
    background('lightblue');
    noStroke;
    textAlign(CENTER);
    textSize(10);
    fill(0);
    noStroke;
    text("% of People With 4yr College Degree",150,margin-20);  
    for(i=0; i<years_1.length;i++){
        if(Number(years_1[i].Race[4].value)>maxValue)
        maxValue=Number(years_1[i].Race[4].value);
    }

    for(j=0; j<years_1.length;j++){
        if(years_1[j].id>maxYear)
        maxYear=years_1[j].id;
    }
    console.log(maxYear);


    
    // add labels to the x axis
    stroke(100);
    line(margin, height-margin, width-margin, height-margin);
    line(margin, height-margin, margin, height-margin+10);
    line(width-margin, height-margin, width-margin, height-margin+10);
    noStroke();
    textAlign(RIGHT);
    textStyle(NORMAL);
    textSize(10);
    text(maxYear, (map(maxYear,1964, maxYear, margin, width-margin)+10),height-margin+20);
    text(1964, map(1964,1964, maxYear, margin, width-margin)+10,height-margin+20);


    noStroke();
    textAlign(RIGHT);
    textStyle(NORMAL);
    textSize(10);
    
    for(var i=1964; i<maxYear; i+=1){
        //labels at i/3 interval on x-axis
        // var yLabel_1 = height-margin+25;
        // var xLabel_1 = map(i,1964, maxYear, margin, width-margin);
        // push();
        // noStroke();
        // fill(0);
        // translate(xLabel_1,yLabel_1);
        // rotate(PI/2);
        // if(i%3==0){
        //     text(i, 0,0)};
        // pop();

        var point_x = map(Number(race_3.year_2[i-1964].label),1964,maxYear,margin, width-margin);
        var point_y = map(Number(race_3.year_2[i-1964].value),0, maxValue,height-margin, margin);
        var point_x_2 = map(Number(race_3.year_2[i-1964+1].label),1964,maxYear,margin, width-margin);
        var point_y_2 = map(Number(race_3.year_2[i-1964+1].value),0, maxValue,height-margin, margin);
        stroke(0,0,255);
        line(point_x,point_y,point_x_2,point_y_2);
        noStroke();
    }


// add labels to the y axis
    // stroke(100);
    // line(margin, margin, margin, height-margin);
    // noStroke();
    // textAlign(RIGHT);
    // textStyle(NORMAL);
    // var increment = maxValue/5;
    // increment = Math.round(increment);
    // for(var i=0; i<maxValue; i+=10){
    //     var xLabel = margin-10;
    //     var yLabel = map(i,0, maxValue,height-margin, margin);
    //     noStroke();
    //     fill(0);
    //     text(i, xLabel, yLabel+5);
    //     stroke(0);
    //     line(xLabel+5,yLabel,xLabel+10,yLabel);
    // }
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