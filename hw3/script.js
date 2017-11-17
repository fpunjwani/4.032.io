var table;
var years_1=[];
var races=[];
var margin=40;
var xPos = 20;
var yPos = 130;
function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw3/CensusBureauData_Education_ALL.csv", "csv");
}

function setup() {
    var canvas = createCanvas(300,300); 
    canvas.parent('sketch-holder'); 
    parseData();
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
<<<<<<< HEAD
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
        var point_y = map(Number(race_3.year_2[i-1964].value),0, maxValue,height-margin, margin);
        var point_x_2 = map(Number(race_3.year_2[i-1964+1].label),1964,maxYear,margin+5, width-margin);
        var point_y_2 = map(Number(race_3.year_2[i-1964+1].value),0, maxValue,height-margin, margin);
//oldones
        // var point_x = map(Number(years_1[i-1964].id),1964,maxYear,margin+5, width-margin);
        // var point_y = map(Number(years_1[i-1964].Race[0].value),35, maxValue,height-margin, margin);
        // var point_x_2 = map(Number(years_1[i-1964+1].id),1964,maxYear,margin+5, width-margin);
        // var point_y_2 = map(Number(years_1[i-1964+1].Race[0].value),35, maxValue,height-margin, margin);
        // fill(0);
        stroke(0,0,255);
        // point(point_x,point_y);
        line(point_x,point_y,point_x_2,point_y_2);
        // console.log("for "+point_x+" it's "+point_y+" and then for "+point_x_2+" it's "+point_y_2);
    }
=======
    text(maxYear, (map(maxYear,1964, maxYear, margin, width-margin)+10),height-margin+20);
    text(1964, map(1964,1964, maxYear, margin, width-margin)+10,height-margin+20);

>>>>>>> 75df8edad1015609e29bffb6f5627148e41551ce

    noStroke();
    textAlign(RIGHT);
    textStyle(NORMAL);
<<<<<<< HEAD
    var increment = maxValue/5;
    increment = Math.round(increment);
    for(var i=0; i<maxValue; i+=10){
        var xLabel = margin-10;
        var yLabel = map(i,0, maxValue,height-margin, margin);
=======
    textSize(10);
    
    for(var i=1964; i<maxYear; i+=1){
        var point_x = map(Number(race_3.year_2[i-1964].label),1964,maxYear,margin, width-margin);
        var point_y = map(Number(race_3.year_2[i-1964].value),0, maxValue,height-margin, margin);
        var point_x_2 = map(Number(race_3.year_2[i-1964+1].label),1964,maxYear,margin, width-margin);
        var point_y_2 = map(Number(race_3.year_2[i-1964+1].value),0, maxValue,height-margin, margin);
        stroke(0,0,255);
        line(point_x,point_y,point_x_2,point_y_2);
>>>>>>> 75df8edad1015609e29bffb6f5627148e41551ce
        noStroke();
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
