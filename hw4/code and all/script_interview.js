
var table;
var themes=[];
var person=[];
var concepts=[];
var quotes=[];
var conceptBoxes = [];
var quotesBoxes = [];
var xPos=20;
var yPos=200;
var xPos_2=260;
var yPos_2=200;


function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw4/data/raw_data_sense_of_community.csv", "csv");
}

function setup() {
    parseData();
    // createP('');
    drawThemes();
    // var canvas = createCanvas(600,600);     
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
    for(var i=1;i<quotes.length; i++){
        if(person.includes(quotes[i].person)==false){
        person.push(quotes[i].person);}
    }

}

function drawThemes() {
            fill(255);
            console.log('drawing');
            var personHeader = createDiv("Interviewees");
            // personHeader.position(xPos, yPos);
            personHeader.parent("interviewees");
  
  // setting the style
//   themeHeader.class("header")
  
//   yPos +=30;
        //   themeContainer = document.getElementById("themes")
          for (var i=0; i < person.length; i++) {
            var currentDiv = createDiv(person[i]);
            // currentDiv.position(xPos, yPos);
            currentDiv.style("cursor", "hand");
            currentDiv.class("boxed");
            currentDiv.parent("interviewees");
            // currentDiv.mouseClicked(drawTranscript());
            yPos+=30;
        //   }
    }
}

function drawTranscript(){
var transcriptbox = createDiv();
    

}
        // Draw the concepts for the chosen theme