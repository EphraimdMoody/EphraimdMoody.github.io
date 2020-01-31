var robj = ''
var Highscore = 0
var inp = ''
var colorChange = 1

function preload() {
  apple = loadImage('assets/apple.jpg');
  cat = loadImage('assets/cat.jpg');
  dog = loadImage('assets/dog.jpg');
  bear = loadImage('assets/bear.jfif');
}

function setup() {
  createCanvas(400, 400);
  inp = createInput('Type obect name here');
  inp.input(myInputEvent);
  randomObj();
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
  text('note only use lowercase letters',20,230)
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
      }
    }
    setTimeout(clearInp, 300)
  }
  /* if(waitTime <= 0)
   {

   waitTime == waitTimeStart;
   }*/
}