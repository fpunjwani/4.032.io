
var table;
var themes=[];
var concepts=[];
var quotes=[];
var conceptBoxes = [];
var quotesBoxes = [];
var quotesDataBoxes = [];
var xPos=20;
var yPos=200;
var xPos_2=260;
var yPos_2=200;


function preload() {
  table = loadTable("http://fpunjwani.github.io/4.032.io/hw4/data/raw_data_sense_of_community.csv", "csv");
}

function setup() {
    parseData();
    createP('');
    drawThemes();
    var canvas = createCanvas(600,600);     
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
        quote.context2=table.getRow(i).getString(7);
        quote.notes=table.getRow(i).getString(8);
            append(quotes, quote);
        }    
    }
}

function drawThemes() {
            fill(255);
            console.log('drawing');
            var themeHeader = createDiv("Themes");
            themeHeader.parent("themes");
            themeHeader.class("header");
            // themeHeader.position(xPos, yPos);
  
  // setting the style
//   themeHeader.class("header")
  
//   yPos +=30;
        //   themeContainer = document.getElementById("themes")
          for (var i=0; i < themes.length; i++) {
            var currentDiv = createDiv(themes[i].title);
            // currentDiv.position(xPos, yPos);
            currentDiv.style("cursor", "hand");
            // currentDiv.class("listLink");
            currentDiv.parent("themes");
            currentDiv.class("boxed"+i);
            currentDiv.mouseClicked(drawConcepts(themes[i].concepts));
            // yPos+=30;
          }
        }
        // Draw the concepts for the chosen theme
        
function drawConcepts(idList) {
           
          return function() {
           
            if (conceptBoxes.length > 0) {
              console.log("clearing stuff");
              for (var i=0; i < conceptBoxes.length; i++) {
                conceptBoxes[i].remove();
              }
              conceptBoxes = [];
            }
            var conceptHeader = createDiv("Concept");
            // conceptHeader.position(260, 200);
            // setting the style
            conceptHeader.class("header");
            conceptHeader.parent("concepts");
            conceptBoxes.push(conceptHeader);


            var filteredConcepts = concepts.filter(function(element) {
                
              return (idList.indexOf(element.id) >= 0)
            });
            for (var i=0; i < filteredConcepts.length; i++) {
            //   yPos_2=230+(30*i);  
              var currentDiv;
              currentDiv = createDiv(filteredConcepts[i].title);
            //   currentDiv.position(xPos_2, yPos_2);
              conceptBoxes.push(currentDiv);
              currentDiv.style("cursor", "hand");
              currentDiv.class("boxed-concept"+i);
              
              currentDiv.parent("concepts");
              currentDiv.mouseClicked(drawQuotes(concepts[i].quotes));
            //   yPos_2+=30;
              // currentDiv.mouseClicked(function() {
              //   drawConcepts(filteredConcepts[i].concepts)
              // })
            }
          }
        }

function drawQuotes(quoteList) {
           
          return function() {
           
            if (quotesBoxes.length > 0) {
              console.log("clearing stuff");
              for (var i=0; i < quotesBoxes.length; i++) {
                quotesBoxes[i].remove();
              }
              quotesBoxes = [];
            }
            var quoteHeader = createDiv("Quotes");
            // quoteHeader.position(580, 200);
            // setting the style
            quoteHeader.class("header");
            quoteHeader.parent("quotes")
            quotesBoxes.push(quoteHeader);


            var filteredQuotes = quotes.filter(function(element) {
                
              return (quoteList.indexOf(element.text) >= 0)
            });
             
            for (var i=0; i < filteredQuotes.length; i++) {
            //   yPosition_2=230+(30*i);  
              var currentDiv;
              currentDiv = createDiv(i+1+". "+filteredQuotes[i].text);
              currentDiv.style("cursor", "hand");
              currentDiv.class("boxed-quotes");
            //   currentDiv.style('white-space: nowrap');
              currentDiv.parent("quotes");
              currentDiv.mouseClicked(
                  drawQuotesData(filteredQuotes[i].text)
                  );
            //   currentDiv.mouseClicked(drawMetaData(filteredQuotes[i]));
            //   currentDiv.position(580, yPosition_2);
              quotesBoxes.push(currentDiv);
              

            //   yPos_2+=30;
              // currentDiv.mouseClicked(function() {
              //   drawConcepts(filteredConcepts[i].concepts)
              // })
            }
          }
        }

function drawQuotesData(quoteList2) {
    console.log(quoteList2);
           
          return function() {
           
            if (quotesDataBoxes.length > 0) {
              console.log("clearing stuff");
              for (var i=0; i < quotesDataBoxes.length; i++) {
                quotesDataBoxes[i].remove();
              }
              quotesDataBoxes = [];
            }
            // var quotedataHeader = createDiv("Quote Data");
            // quotedataHeader.class("header");
            // quotedataHeader.parent("quotes-data");
            // quotesDataBoxes.push(quotedataHeader);

            for (var i=0; i < quotes.length; i++) {
                if (quotes[i].text==quoteList2) {
                    var p = quotes[i].person;
                    var t = quotes[i].text;
                    var c = quotes[i].context;
                    var c2 = quotes[i].context2;
                    var n = quotes[i].notes;
                    var currentDiv;
                    currentDiv = createDiv("'"+t+"'");
                    currentDiv.parent("quotes-data");
                    currentDiv.class("quotes2");
    
                    // headDiv1.class("header");
                    var currentDiv2 = createDiv("Name: "+p);
                    currentDiv2.parent("quotes-person");
                    currentDiv2.class("quotes3");
                    var currentDiv3 = createDiv("About: "+c);
                    currentDiv3.parent("quotes-context");
                    currentDiv3.class("quotes3");
                    var currentDiv4 = createDiv("Context: "+c2);
                    currentDiv4.parent("quotes-context2");
                    currentDiv4.class("quotes3");
                    // if(!(var n==="")){
                    var currentDiv5 = createDiv("My Notes: "+n);
                    currentDiv5.parent("quotes-notes");
                    currentDiv5.class("quotes3");
                    var currentDiv6 = createDiv("Quote Details");
                    currentDiv6.parent("quotes-data2");
                    currentDiv6.class("header");
                    // var currentDiv7 = createDiv(" ");
                    // currentDiv7.parent("container");
                    // currentDiv7.class("header");
                    // }
                    // var currentDiv6 = createDiv("Context: ");
                    // currentDiv6.parent("quotes-context-header");
                    // // headDiv2.class("header");
                    // // var headDiv1 = createDiv("Data Source:");
                    // headDiv1.parent("quotes-data2");
                    quotesDataBoxes.push(currentDiv);
                    quotesDataBoxes.push(currentDiv2);
                    quotesDataBoxes.push(currentDiv3);
                    quotesDataBoxes.push(currentDiv4);
                    quotesDataBoxes.push(currentDiv5);
                    quotesDataBoxes.push(currentDiv6);
                    // quotesDataBoxes.push(currentDiv7);
                    // quotesDataBoxes.push(headDiv1);
                    // quotesDataBoxes.push(currentDiv6);

                }
            //   yPosition_2=230+(30*i);
              
              
            //   currentDiv.style("cursor", "hand");
              
            //   currentDiv.style('white-space: nowrap');
              
            //   currentDiv.mouseClicked(drawMetaData(filteredQuotes[i]));
            //   currentDiv.position(580, yPosition_2);
              
              

            //   yPos_2+=30;
              // currentDiv.mouseClicked(function() {
              //   drawConcepts(filteredConcepts[i].concepts)
              // })
            }
          }
        }