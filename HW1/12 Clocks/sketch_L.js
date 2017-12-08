function setup() {
  createCanvas(80, 80);
}

function draw() {
    
  background(102);
  textStyle(NORMAL);
  var words = new Array("Accept","Act","Achieve","Admire","Advise","Affect","Agree","Amaze","Amuse","Answer","Appear","Arrange","Arrive","Ask","Attack","Bake","Behave","Believe","Belong","Blame","Borrow","Bother","Call","Cancel","Carry","Cause","Celebrate","Clean","Clear","Climb","Close","Compare","Compete","Complete","Contain","Continue","Cook","Correct","Cough","Count","Crash","Create","Cross","Curse","Change","Chase","Chat","Check","Damage","Dance","Date","Decide","Deliver","Depend","Describe","Design","Destroy","Dicrease","Die","Disagree","Discover","Discuss","Disturb","Dress","Dry","Eliminate","End","Enjoy","Entertain","Excuse","Exercise","Exhibit","Expect","Express","Film","Fill","Fish","Fix","Follow","Freeze","Fry","Greet","Guess","Hail","Handle","Happen","Hate","Help","Hope","Hunt","Identify","Ignore","Imagine","Impress","Improve","Include","Increase","Interview","Introduce","Invite","Jog","Join","Jump","Knock","Label","Land","Last","Learn","Like","Link","List","Listen","Live","Locate","Look","Love","Manage","Mark","Match","Measure","Mention","Miss","Move","Name","Need","Note","Notice","Number","Offer","Open","Order","Organize","Pack","Paint","Pamper","Pardon","Park","Participate","Pass","Perform","Persuade","Pick","Plan","Play","Please","Practice","Predict","Prefer","Present","Program","Protect","Provide","Purchase","Push","Rain","Receive","Recommend","Relate","Relax","Release","Remember","Repair","Repeat","Resist","Rest","Return","Review","Sail","Save","Scan","Scare","Share","Shop","Shout","Skate","Ski","Slow","Sneeze","Snow","Solve","Spell","Start","Step","Stop","Stress","Study","Substitute","Suggest","Surprise","Talk","Taste","Terrorize","Thank","Touch","Travel","Try","Tune","Turn","Underline","Use","Vary","Wait","Walk","Want","Warn","Wash","Watch","Water","Welcome","Wish","Witness","Work","Worry","Wrestle");
  text("It's time to", 10, 20);
  var s=second();
  var word_of_sec=words[s];
  textStyle(BOLD);
  text(word_of_sec,10,30);
//   for (var i=0; i<86400; i+450);
//     var word_of_sec=words[i];
//     text("It's time to", 30, 30);
//     text(word_of_sec,30,60);
}