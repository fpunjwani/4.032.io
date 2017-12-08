var table;
var themes=[];
var concepts=[];
var list_of_concepts=[]; //just to test some code
var quotes=[];

function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw4/data/raw_data_sense_of_community.csv", "csv");
}

function setup() {
    parseData();
    createP('');
    createThemes();
    var canvas = createCanvas(300,300);     
}

function parseData(){
//This function will parse through data to create three objects: themes, concepts and quotes each

//THEMES
//Create an object of unique themes with titles and concepts associated with those themes
    //Create themex as a list to avoid duplicating themes
    var themex=[];
    for(var i =1;i<table.getRowCount(); i++){
        //if value is not in themex, then add details, otherwise don't
        //[1] is where theme titles can be found
        if((themex.includes(table.getRow(i).getString(1)))==false){
        themex.push(table.getRow(i).getString(1));
        var theme ={};
        theme.id=parseInt(table.getRow(i).getString(0));
        theme.title=table.getRow(i).getString(1);
        theme.concepts=[];
        for(var j=1; j<table.getRowCount(); j++){   
            if(table.getRow(j).getString(1)==table.getRow(i).getString(1)){
                          
                theme.concepts.push(parseInt(table.getRow(j).getString(2)));
            }
        }
        append(themes, theme);
    }
}

//CONCEPTS
//Create an object of unique concepts with titles and quotes associated with those concepts
    //Create conceptx as a list to avoid duplicating concepts
    var conceptx=[];
    for(var i =1;i<table.getRowCount(); i++){
        //if value is not in conceptx, then add details, otherwise don't
        //[3] is where concept titles can be found
        if((conceptx.includes(table.getRow(i).getString(3)))==false){
        conceptx.push(table.getRow(i).getString(3));
        var concept ={};
        concept.id=parseInt(table.getRow(i).getString(2));
        concept.title=table.getRow(i).getString(3);
        concept.quotes=[];
        for(var j=1; j<table.getRowCount(); j++){
            if(table.getRow(j).getString(3)==table.getRow(i).getString(3)){
                concept.quotes.push(table.getRow(j).getString(4));
            }
        }
        
            append(concepts, concept);
    }
}

//QUOTES
//Create an object of unique quotes with metadata such as text, context, and person associated with that quote
    //Create quotex as a list to avoid duplicating quotes
    quotex=[];
    for(var i =1;i<table.getRowCount(); i++){
        if((quotex.includes(table.getRow(i).getString(4)))==false){
            var quote ={};
        //[4] is where quote text can be found; [5] is for person; [6] is for context
        quotex.push(table.getRow(i).getString(4));
        quote.text=table.getRow(i).getString(4);
        quote.person=table.getRow(i).getString(5);
        quote.context=table.getRow(i).getString(6);
            append(quotes, quote);
        }    
    }
}

function createThemes(){
//Create a list of themes using the titles in themes object

// starting x and y posiition for themes list
  var xPos = 20;
  var yPos = 200;

  // creating headers
  var themeHeader = createDiv("Themes");
  themeHeader.position(xPos, yPos);
  
  // setting the style
  themeHeader.style("font-weight", "bold");
  yPos +=30;

  // go through all states
  for(var i =0; i<themes.length; i++){
    // Display the state name
    var themeDiv = createDiv(themes[i].title);
    themeDiv.style("cursor", "hand");
    themeDiv.position(xPos, yPos);
    themeDiv.class("listLink");
    themeDiv.mouseClicked(
      createConcepts(themes[i].concepts));
      yPos +=30;;

    //   var actives = selectAll('.active');
    //   // We can then iterate through the array and hide all the elements.
    //   for (var j = 0; j < actives.length; j++) {
    //     actives[j].removeClass("active");
    //   }
    //     this.addClass("active");
    //   }
    //   ) 
      
    
    
}
}

function createConcepts(idList){
//trying to use themeChosen from the mouseClicked above to filter out themes and concepts array
// console.log(themeChosen);

//remove stuff to avoid drawing on top
// return function() {
//             if (Window.conceptBoxes.length > 0) {
//               console.log("clearing stuff")
//               for (var i=0; i < Window.conceptBoxes.length; i++) {
//                 Window.conceptBoxes[i].remove()
//               }
//               Window.conceptBoxes = []
//             }


var filteredConcepts = concepts.filter(function(element) {
              return (idList.indexOf(element.id) >= 0)

            })

//once I can get themes to filter to get a list of concepts, I can then createdivs for each
// for(var i=0; i<filteredTheme.length; i++){
//     list_of_concepts.push(filteredTheme);
// }

////OLD CODE
 //Create a list of concepts using the titles in concepts array

// starting x and y posiition for concepts list_concepts
// var conceptsChosen = themeChosen.concepts;

//   var xPos = 250;
//   var yPos = 200;

//   // creating headers
//   var conceptHeader = createDiv("Concepts");
//   conceptHeader.position(xPos, yPos);
  
//   // setting the style
//   conceptHeader.style("font-weight", "bold");
//   yPos +=20;

//   // go through all states

//   for(var j =0; j<concepts.length; i++){
//     // Display the state name
//     var conceptDiv = createDiv(concepts[i].title);
//     conceptDiv.style("cursor", "hand");
//     conceptDiv.position(xPos, yPos);
//     conceptDiv.class("listLink");
//     // themeDiv.mouseClicked(
//     //   function(){

//     //     createConcepts(this.html());

//     //   var actives = selectAll('.active');
//     //   // We can then iterate through the array and hide all the elements.
//     //   for (var j = 0; j < actives.length; j++) {
//     //     actives[j].removeClass("active");
//     //   }
//     //     this.addClass("active");
//     //   }
//     //   )
//      yPos +=20;
//   }
}