var table;
var themes=[];
var list_of_themes=[];
var list_of_concepts=[];
var margin=40;
var xPos = 20;
var yPos = 230;
function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw4/data/raw_data_sense_of_community.csv", "csv");
//   table = loadTable("data/CensusBureauData_Education_ALL.csv", "csv");
}

function setup() {
    parseData();
    createListThemes();
    createP('');
    var canvas = createCanvas(300,300); 
    
    
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

function createListThemes() {
//   dropdown = createElement('select');
//   dropdown.position(xPos,yPos+20);
      noStroke;
    textAlign(CENTER);
    textSize(10);
// create a list of themes with all themes
  for (var i = 0; i < themes.length; i++) {
      list_of_themes.push(themes[i].id);
  }
//   create unique list_of_themes
  list_of_themes = list_of_themes.filter((x, i, a) => a.indexOf(x) == i);
  
//   # of boxes + height and width of boxes
  spacing_between_boxes=20;
  theme_box_width=((parseInt(canvas.style.width)/((list_of_themes.length)-1))-spacing_between_boxes);
  theme_box_height=theme_box_width;

// parse through unique list_of_themese to create five boxes
  for (var i=1; i< list_of_themes.length; i++){
    
    button = createButton(list_of_themes[i]);
    button.position = (18*(i)+(theme_box_width*(i-1)), 20);
    button.mousePressed(createListConcepts);
    //   rect(x, y, width, height);
    // fill(255,40,0);
    // rect(18*(i)+(theme_box_width*(i-1)), 20, theme_box_width, theme_box_height);
  }
    //place boxes along the same y axis but different x values; x value is deteremined by box size and how many boxes there are and canvas width;
  //style the boxes
  //onMousePress box, trigger: createListConcepts


// parse through unique list_of_themes to create a dropdown
//   for (var i=0; i < list_of_themes.length; i++){
//       var option = createElement('option');
//       option.attribute('value',list_of_themes[i]);
//       option.html(list_of_themes[i]);
//       option.parent(dropdown);
//     }

  // styling the drop-down menu: where to put in and how it will look in terms of font size and style
//   textSize(8);
//   var raceHeader = createDiv("select theme");
//   raceHeader.position(xPos, yPos);
//   raceHeader.style("font-style", "italic");
//   raceHeader.style("fontSize","12px");
//   //dropdown menu functionality
//   var droptest = createDiv('Select to view data');
//   dropdown.elt.onchange = function() {
//     droptest.html(this.value);
//     createListConcepts();
//   }
}

function createListConcepts(){
    
    for (var i=0; i< themes.length; i++){
        list_of_concepts.push(themes[i].details[0].value)
    }

    

    for (var i=1; i< list_of_concepts.length; i++){
        button = createButton(list_of_concepts[i]);
        button.position = (18*(i)+(theme_box_width*(i-1)), 20);
        button.mousePressed(createGraph);
  }



    //dropdown for concepts
//   dropdown = createElement('select');
//   dropdown.position(xPos,yPos+80);
//       noStroke;
//     textAlign(CENTER);
//     textSize(10);
//   for (var i = 0; i < themes.length; i++) {
//       var option = createElement('option');
//       option.attribute('value',themes[i].details[0].value);
//       option.html(themes[i].details[0].value);
//       option.parent(dropdown);
//     }

//   // creating headers
//   textSize(8);
//   var raceHeader = createDiv("select concept");
//   raceHeader.position(xPos, yPos+60);
//   raceHeader.style("font-style", "italic");
//   raceHeader.style("fontSize","12px");

//   var droptest = createDiv('');

//   dropdown.elt.onchange = function() {
//     droptest.html(this.value);
//     createGraph(droptest.html());
//   }
}



function createGraph(name){
    var concept = findConceptByName(name);
    background('light blue');
    noStroke;
    textAlign(LEFT);
    textStyle(NORMAL);
    fill(0);
    text(concept[0].value, 10, 10, 200, 80);
    text("who: "+concept[1].value, 10, 80);
    text("context: "+concept[2].value, 10, 90);
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
  }
  }
}