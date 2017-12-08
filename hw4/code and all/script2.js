var table;
var themes=[];
var margin=40;
var xPos = 20;
var yPos = 230;
function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw4/data/raw_data_sense_of_community.csv", "csv");
//   table = loadTable("data/CensusBureauData_Education_ALL.csv", "csv");
}

function setup() {
    var canvas = createCanvas(300,300); 
    parseData();
    createListThemes();
    // createListConcepts();
    
}

function parseData(){
    for(var i =0;i<table.getRowCount(); i++){
        var theme ={};
        theme.id=table.getRow(i).getString(0);

        theme.details=[];
        for(var j=1; j<table.getColumnCount(); j++){
            var item={};
            item.label=table.getRow(0).getString(j);
            item.value=table.getRow(i).getString(j);
            append(theme.details, item);
        }
        append(themes, theme);
    }
}

function createListThemes(){
  // starting x and y posiition
  dropdown = createElement('select');
  dropdown.position(xPos,yPos+20);
      noStroke;
    textAlign(CENTER);
    textSize(10);
    // text("% of People With 4yr College Degree",150,margin-20);  
  for (var i = 0; i < themes.length; i++) {
      var option = createElement('option');
      option.attribute('value',themes[i].id);
      option.html(themes[i].id);
      option.parent(dropdown);
    }

  // creating headers
  textSize(8);
  var raceHeader = createDiv("select theme");
  raceHeader.position(xPos, yPos);
  raceHeader.style("font-style", "italic");
  raceHeader.style("fontSize","12px");
  // setting the style
  var droptest = createDiv('Select to view data');

  dropdown.elt.onchange = function() {
    droptest.html(this.value);
    createListConcepts();
  }
}

function createListConcepts(){
  // starting x and y posiition
  dropdown = createElement('select');
  dropdown.position(xPos,yPos+80);
      noStroke;
    textAlign(CENTER);
    textSize(10);
    // text("% of People With 4yr College Degree",150,margin-20);  
  for (var i = 0; i < themes.length; i++) {
      var option = createElement('option');
      option.attribute('value',themes[i].details[0].value);
      option.html(themes[i].details[0].value);
      option.parent(dropdown);
    }

  // creating headers
  textSize(8);
  var raceHeader = createDiv("select concept");
  raceHeader.position(xPos, yPos+60);
  raceHeader.style("font-style", "italic");
  raceHeader.style("fontSize","12px");

  var droptest = createDiv('');

  dropdown.elt.onchange = function() {
    droptest.html(this.value);
    createGraph(droptest.html());
  }
}



function createGraph(name){
    var concept = findConceptByName(name);
    background('light blue');
    noStroke;
    textAlign(LEFT);
    textStyle(NORMAL);
    // textSize(8);
    fill(0);
    text(concept[0].value, 10, 10, 200, 80);
    text("who: "+concept[1].value, 10, 80);
    text("context: "+concept[2].value, 10, 90);
    console.log(concept[0].value);
}

function findConceptByName(name){
  var concept=[];
  for(var i=0; i<themes.length; i++){
    if(themes[i].details[0].value == name){
        for(var j=1; j<4; j++){
            var item={};
            item.label=themes[i].details[j].label;
            item.value=themes[i].details[j].value;
            append(concept, item);
        }
    return concept;
    //   return quote;
    //   return person;
    //   return context;
  }
  }
}