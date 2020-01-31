var robj = ''
var Highscore = 0
var inp = ''
var mmbutt
var loaded = 0
var note
var lbp

//mainmenu
var tgbutt
var fgbutt

//first grade
var dogbtn
var catbtn
var bearbtn
var applebtn

function preload() {
  apple = loadImage('assets/apple.jpg');
  cat = loadImage('assets/cat.jpg');
  dog = loadImage('assets/dog.jpg');
  bear = loadImage('assets/bear.jfif');
}

function setup() {
  createCanvas(400, 400);
  background(random(1,255), random(1,255), random(1,255))
  textSize(20)
  fill(255)
  stroke(0)
  text('What grade are you in?', 90, 200);
  text('press a button below', 90, 250);
  fgbutt = createButton('First grade')
  fgbutt.mousePressed(fgsetup)
  tgbutt = createButton('Third grade')
  tgbutt.mousePressed(rgsetup)
  if(loaded == 1){
  dogbtn.remove()
  catbtn.remove()
  bearbtn.remove()
  applebtn.remove()
  mmbutt.remove()
  loaded = 0
  }
  if(loaded == 2){
    mmbutt.remove()
    inp.remove()
  }
}

function fgsetup(){
  createCanvas(400, 400);
  randomObj();
  fgbutt.remove()
  tgbutt.remove()
  dogbtn = createButton('dog');
  dogbtn.mousePressed(dogpress)
  catbtn = createButton('cat');
  catbtn.mousePressed(catpress)
  bearbtn = createButton('bear');
  bearbtn.mousePressed(bearpress)
  applebtn = createButton('apple');
  applebtn.mousePressed(applepress)
  loaded = 1
  mmbutt = createButton('Main Menu')
  mmbutt.mousePressed(setup)
}

function rgsetup(){
  createCanvas(400, 400);
  inp = createInput('Type obect name here');
  inp.input(myInputEvent);
  tgbutt.remove()
  fgbutt.remove()
  loaded = 2
  randomObj();
  mmbutt = createButton('Main Menu')
  mmbutt.mousePressed(setup)
}

function dogpress(){
  if(robj == 'dog')
  {
   Highscore += 10
   lbp = 'dog'
   randomObj();

  }
}

function catpress(){
  if(robj == 'cat')
  {
   Highscore += 10
   lbp = 'cat'
   randomObj();
  }
}

function applepress(){
  if(robj == 'apple')
  {
   Highscore += 10
  lbp = 'apple'
   randomObj();

  }
}

function bearpress(){
  print('pressed')
  if(robj == 'bear')
  {
   Highscore += 10
   lbp = 'bear'
   randomObj();

  }
}

function randomObj() {
  robj = random(['apple', 'dog', 'cat', 'bear'])
  background(random(1,255), random(1,255), random(1,255))
  text(robj, 10, 80);
  textSize(20)
  fill(255)
  stroke(0)
  text('Score', 250, 20);
  text(Highscore, 310, 20);
  text('note: if typing only use lowercase letters',20,250)
  if (robj == 'apple') {
    image(apple, 0, 0, 200, 200);
  }
  if (robj == 'dog') {
    image(dog, 0, 0, 200, 200);
  }
  if (robj == 'cat') {
    image(cat, 0, 0, 200, 200);
  }
  if (robj == 'bear') {
    image(bear, 0, 0, 200, 200);
  }
  if(lbp == robj){
   randomObj(); 
  }
  print(robj)
}

function clearInp() {
  inp.value('')
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
  if (this.value() == robj) {
    randomObj();
    Highscore += 10
    if (inp.value() == robj) {
      randomObj();
      if (inp.value() == robj) {
        randomObj();
        if (inp.value() == robj) {
          randomObj();
        }
      }
    }
    setTimeout(clearInp, 300)
  }
  /* if(waitTime <= 0)
   {

   waitTime == waitTimeStart;
   }*/
}