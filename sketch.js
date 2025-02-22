var robj = ''
var Highscore = 0
var inp = ''
var mmbutt
var loaded = 0
var lbp
var cnv
var x
var y
var btnx
var btny

//mainmenu
var tgbutt
var fgbutt

//first grade
var dogbtn
var catbtn
var bearbtn
var applebtn


function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  btnx = (windowWidth - width) / 2;
  btny = (windowHeight - height) * 1.4;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function preload() {
  soundFormats('mp3', 'ogg');
  apple = loadImage('assets/apple.jpg');
  cat = loadImage('assets/cat.jpg');
  dog = loadImage('assets/dog.jpg');
  bear = loadImage('assets/bear.jfif');
  goodS = loadSound('assets/goodS.mp3');
  badS = loadSound('assets/badS.mp3');
}

function setup() {

  cnv = createCanvas(400, 400);
  centerCanvas();
  background(random(1,255), random(1,255), random(1,255))
  textSize(20)
  fill(255)
  stroke(0)
  text('What grade are you in?', 90, 200);
  text('press a button below', 90, 250);
  fgbutt = createButton('First grade')
  fgbutt.position(btnx,btny);
  fgbutt.mousePressed(fgsetup)
  tgbutt = createButton('Third grade')
  tgbutt.position(btnx+90, btny);
  tgbutt.mousePressed(rgsetup)
  goodS.setVolume(0.1);
  badS.setVolume(0.1);
  if(loaded == 1){
  dogbtn.remove()
  catbtn.remove()
  bearbtn.remove()
  applebtn.remove()
  mmbutt.remove()
  goodS.play();
  loaded = 0
  }
  if(loaded == 2){
    mmbutt.remove()
    inp.remove()
    goodS.play();
  }
}

function fgsetup(){
  createCanvas(400, 400);
  randomObj();
  fgbutt.remove()
  tgbutt.remove()
  dogbtn = createButton('dog');
  dogbtn.position(btnx, btny);
  dogbtn.mousePressed(dogpress)
  catbtn = createButton('cat');
  catbtn.position(btnx+45, btny);
  catbtn.mousePressed(catpress)
  bearbtn = createButton('bear');
  bearbtn.position(btnx+86, btny);
  bearbtn.mousePressed(bearpress)
  applebtn = createButton('apple');
  applebtn.position(btnx+136, btny);
  applebtn.mousePressed(applepress)
  goodS.play();
  loaded = 1
  mmbutt = createButton('Main Menu')
  mmbutt.position(btnx+315, btny);
  mmbutt.mousePressed(setup)
}

function rgsetup(){
  createCanvas(400, 400);
  inp = createInput('Type obect name here');
  inp.position(btnx, btny);
  inp.input(myInputEvent);
  tgbutt.remove()
  fgbutt.remove()
  goodS.play();
  loaded = 2
  randomObj();
  mmbutt = createButton('Main Menu')
  mmbutt.position(btnx+315, btny);
  mmbutt.mousePressed(setup)
}

function dogpress(){
  if(robj == 'dog')
  {
   Highscore += 10
   lbp = 'dog'
   randomObj();
  goodS.play();
  }
    else{
  badS.play();
  }
}

function catpress(){
  if(robj == 'cat')
  {
   Highscore += 10
   lbp = 'cat'
   randomObj();
    goodS.play();
  }
    else{
  badS.play();
  }
}

function applepress(){
  if(robj == 'apple')
  {
   Highscore += 10
  lbp = 'apple'
   randomObj();
    goodS.play();

  }
    else{
  badS.play();
  }
}

function bearpress(){
  print('pressed')
  if(robj == 'bear')
  {
   Highscore += 10
   lbp = 'bear'
   randomObj();
  goodS.play();
  }
  else{
  badS.play();
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
    goodS.play();
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
}
