/*
using p5.js and p5.play lib by Paolo Pedercini
*/
let url = "../dystopia";

let theCharacter;
let noEntry;

let blocks;
let noiseTerrains;

let triggerByTouch
//let triggerByPress
//let triggerByMouseOverlap

let bg1;
let bg2;

let interview;
let gretaSpeech;
let holyGreta;
let trigger;
//let triggerM;
let jump;
let bgm;

let SCENE_W = 6400;
let SCENE_H = 720;

let triggerIsPlayed = false;
//let triggerMIsPlayed = false;
let pageJumped = false;

//physic
let GRAVITY = 10;
let FRICTION = 5;
let T_SIZE = 30;
let JUMP = -90;
let isJumping = false;
let isOnGround = false;

function preload() {
  bg1 = loadImage('images/Background-utopia1-1.png');
  bg2 = loadImage('images/background-utopia2.png');
  interview = loadSound('audio/Interview.mp3');
  gretaSpeech = loadSound('audio/Greta_s-Speech.mp3');
  holyGreta = loadSound('audio/Our Holy Greta.mp3');
  jump = loadSound('sound/jump.wav');
  trigger = loadSound('sound/trigger.wav');
 // triggerM = loadSound('sound/triggerM.wav');
  bgm = loadSound('sound/BGM.mp3');
  sKid = loadSound('audio/children.mp3');
  sSquirrel = loadSound('audio/squirrel.mp3');
  sHealthCare = loadSound('audio/healthcare.mp3');
  sCollage3 = loadSound('audio/First Meditation.mp3');
  sNatureUpdate = loadSound('audio/Beth Nature of Greta.mp3');
  sCollage4 = loadSound('audio/Second Meditation.mp3');
  sGasMask = loadSound('audio/gas mask.mp3');
  sDeer = loadSound('audio/MME.mp3');
  //blocks
  blocks = new Group();
  let b0 = createSprite(780, 650);
  b0.addAnimation('normal', 'images/blocks/780650.png');
  blocks.add(b0);
  let b1 = createSprite(658, 557);
  b1.addAnimation('normal', 'images/blocks/658557.png');
  blocks.add(b1);
  let b2 = createSprite(35, 505);
  b2.addAnimation('normal', 'images/blocks/035505.png');
  blocks.add(b2);
  let b3 = createSprite(931, 392);
  b3.addAnimation('normal', 'images/blocks/931392.png');
  blocks.add(b3);
  let b4 = createSprite(690, 472);
  b4.addAnimation('normal', 'images/blocks/690472.png');
  blocks.add(b4);
  let b5 = createSprite(498, 366);
  b5.addAnimation('normal', 'images/blocks/498366.png');
  blocks.add(b5);
  let b6 = createSprite(1231, 310);
  b6.addAnimation('normal', 'images/blocks/1231310.png');
  blocks.add(b6);
  let b7 = createSprite(1287, 549);
  b7.addAnimation('normal', 'images/blocks/1287549.png');
  blocks.add(b7);
  let b8 = createSprite(1622, 680);
  b8.addAnimation('normal', 'images/blocks/1622680.png');
  blocks.add(b8);
  let b9 = createSprite(3615, 666);
  b9.addAnimation('normal', 'images/blocks/3615666.png');
  blocks.add(b9);
  let b10 = createSprite(6266, 683);
  b10.addAnimation('normal', 'images/blocks/6266683.png');
  blocks.add(b10);
  let b11 = createSprite(3192, 596);
  b11.addAnimation('normal', 'images/blocks/3192596.png');
  blocks.add(b11);
  let b12 = createSprite(3382, 513);
  b12.addAnimation('normal', 'images/blocks/3382513.png');
  blocks.add(b12);
  let b13 = createSprite(3642, 439);
  b13.addAnimation('normal', 'images/blocks/3642439.png');
  blocks.add(b13);
  let b14 = createSprite(3896, 395);
  b14.addAnimation('normal', 'images/blocks/3896395.png');
  blocks.add(b14);
  let b15 = createSprite(3335, 348);
  b15.addAnimation('normal', 'images/blocks/3335348.png');
  blocks.add(b15);
  let b16 = createSprite(338,276);
  b16.addAnimation('normal','images/blocks/338276.png');
  blocks.add(b16);
  let b17 = createSprite(1447, 263);
  b17.addAnimation('normal', 'images/blocks/1447263.png');
  blocks.add(b17);
  let b18 = createSprite(1629, 235);
  b18.addAnimation('normal', 'images/blocks/1629235.png');
  blocks.add(b18);
  let b19 = createSprite(1500, 448);
  b19.addAnimation('normal', 'images/blocks/1490448.png');
  blocks.add(b19);
  let b20 = createSprite(3142, 292);
  b20.addAnimation('normal', 'images/blocks/3142292.png');
  blocks.add(b20);
  let b21 = createSprite(3546, 245);
  b21.addAnimation('normal', 'images/blocks/3526295.png');
  blocks.add(b21);
  let b22 = createSprite(3850, 355);
  b22.addAnimation('normal', 'images/blocks/3810373.png');
  blocks.add(b22);
  let b23 = createSprite(4020, 587);
  b23.addAnimation('normal', 'images/blocks/4020587.png');
  blocks.add(b23);
  let b24 = createSprite(4181, 467);
  b24.addAnimation('normal', 'images/blocks/4151507.png');
  blocks.add(b24);
  //noise terrains
  noiseTerrains = new Group();
  let noise1 = createSprite(2309, 584);
  noise1.addAnimation('normal', 'images/noiseTerrains/noise1.png');
  noiseTerrains.add(noise1);
  let noise2 = createSprite(5208, 646);
  noise2.addAnimation('normal', 'images/noiseTerrains/noise2.png');
  noiseTerrains.add(noise2);
  //character
  theCharacter = createSprite(201, height / 2);
  theCharacter.addAnimation('standR', 'images/character/R/R-stand1.png', 'images/character/R/R-stand1.png', 'images/character/R/R-stand1.png', 'images/character/R/R-stand2.png', 'images/character/R/R-stand2.png', 'images/character/R/R-stand2.png');
  theCharacter.addAnimation('standL', 'images/character/L/L-stand1.png', 'images/character/L/L-stand1.png', 'images/character/L/L-stand1.png', 'images/character/L/L-stand2.png', 'images/character/L/L-stand2.png', 'images/character/L/L-stand2.png');
  theCharacter.addAnimation('walkR', 'images/character/R/1R.png', 'images/character/R/2R.png', 'images/character/R/3R.png', 'images/character/R/4R.png');
  theCharacter.addAnimation('walkL', 'images/character/L/1L.png', 'images/character/L/2L.png', 'images/character/L/3L.png', 'images/character/L/4L.png');
  theCharacter.addAnimation('jumpR', 'images/character/R/R-jump1.png', 'images/character/R/R-jump2.png', 'images/character/R/R-jump3.png', 'images/character/R/R-jump4.png', 'images/character/R/R-jump5.png');
  theCharacter.addAnimation('jumpL', 'images/character/L/L-jump1.png', 'images/character/L/L-jump2.png', 'images/character/L/L-jump3.png', 'images/character/L/L-jump4.png', 'images/character/L/L-jump5.png');
  theCharacter.limitSpeed(45);
  //
  //triggerable entities
  triggerByTouch = new Group();
  let adGreenBurial = createSprite(343, 224);
  adGreenBurial.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  adGreenBurial.addAnimation('touched','images/green-burials.png');
  triggerByTouch.add(adGreenBurial);
  let gretaSpeechS = createSprite(984, 561);
  gretaSpeechS.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  gretaSpeechS.addAnimation('touched', 'images/speech1.png', 'images/speech2.png', 'images/speech3.png');
  triggerByTouch.add(gretaSpeechS);
  //[1]
  let pieta = createSprite(938, 344);
  pieta.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  pieta.addAnimation('touched', 'images/pieta.png');
  triggerByTouch.add(pieta);
  let artNews = createSprite(783, 504);
  artNews.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  artNews.addAnimation('touched', 'images/art-news.png');
  triggerByTouch.add(artNews);
  let collage3 = createSprite(1239, 272);
  collage3.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  collage3.addAnimation('touched', 'images/collage3.png');
  triggerByTouch.add(collage3);
  let interviewS = createSprite(1626, 614);
  interviewS.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  interviewS.addAnimation('touched', 'images/interview1.png', 'images/interview2.png', 'images/interview3.png');
  triggerByTouch.add(interviewS);
  //[5]
  let healthCare = createSprite(2313, 434);
  healthCare.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  healthCare.addAnimation('touched','images/healthCare/0001.png','images/healthCare/0001.png','images/healthCare/0002.png','images/healthCare/0002.png','images/healthCare/0003.png','images/healthCare/0003.png','images/healthCare/0004.png','images/healthCare/0004.png','images/healthCare/0005.png','images/healthCare/0005.png','images/healthCare/0006.png','images/healthCare/0006.png','images/healthCare/0007.png','images/healthCare/0007.png','images/healthCare/0008.png','images/healthCare/0008.png','images/healthCare/0009.png','images/healthCare/0009.png','images/healthCare/0010.png','images/healthCare/0010.png','images/healthCare/0011.png','images/healthCare/0011.png','images/healthCare/0012.png','images/healthCare/0012.png','images/healthCare/0013.png','images/healthCare/0013.png','images/healthCare/0014.png','images/healthCare/0014.png','images/healthCare/0015.png','images/healthCare/0015.png','images/healthCare/0016.png','images/healthCare/0016.png','images/healthCare/0017.png','images/healthCare/0017.png','images/healthCare/0018.png','images/healthCare/0018.png','images/healthCare/0019.png','images/healthCare/0019.png','images/healthCare/0020.png','images/healthCare/0020.png','images/healthCare/0021.png','images/healthCare/0021.png','images/healthCare/0022.png','images/healthCare/0022.png','images/healthCare/0023.png','images/healthCare/0023.png');
  triggerByTouch.add(healthCare);
  //[6]
  let holyGretaS = createSprite(2633, 470);
  holyGretaS.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  holyGretaS.addAnimation('touched', 'images/song1.png', 'images/song2.png', 'images/song3.png');
  triggerByTouch.add(holyGretaS);
  //[7]
  let fountain = createSprite(3038, 583);
  fountain.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  fountain.addAnimation('touched', 'images/fountain.png');
  triggerByTouch.add(fountain);
  let natureUpdate = createSprite(3535, 204);
  natureUpdate.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  natureUpdate.addAnimation('touched','images/natureUpdate/0001.png','images/natureUpdate/0001.png','images/natureUpdate/0002.png','images/natureUpdate/0002.png','images/natureUpdate/0003.png','images/natureUpdate/0003.png','images/natureUpdate/0004.png','images/natureUpdate/0004.png','images/natureUpdate/0005.png','images/natureUpdate/0005.png','images/natureUpdate/0006.png','images/natureUpdate/0006.png','images/natureUpdate/0007.png','images/natureUpdate/0007.png','images/natureUpdate/0008.png','images/natureUpdate/0008.png');
  triggerByTouch.add(natureUpdate);
  let gasMask = createSprite(3900, 306);
  gasMask.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  gasMask.addAnimation('touched','images/gasMask/0001.png','images/gasMask/0001.png','images/gasMask/0002.png','images/gasMask/0002.png','images/gasMask/0003.png','images/gasMask/0003.png','images/gasMask/0004.png','images/gasMask/0004.png','images/gasMask/0005.png','images/gasMask/0005.png','images/gasMask/0006.png','images/gasMask/0006.png','images/gasMask/0007.png','images/gasMask/0007.png','images/gasMask/0008.png','images/gasMask/0008.png','images/gasMask/0009.png','images/gasMask/0009.png','images/gasMask/0010.png','images/gasMask/0010.png','images/gasMask/0011.png','images/gasMask/0011.png','images/gasMask/0012.png','images/gasMask/0012.png','images/gasMask/0013.png','images/gasMask/0013.png','images/gasMask/0014.png','images/gasMask/0014.png','images/gasMask/0015.png','images/gasMask/0015.png','images/gasMask/0016.png','images/gasMask/0016.png','images/gasMask/0017.png','images/gasMask/0017.png','images/gasMask/0018.png','images/gasMask/0018.png','images/gasMask/0019.png','images/gasMask/0019.png','images/gasMask/0020.png','images/gasMask/0020.png');
  triggerByTouch.add(gasMask);
  let deer = createSprite(4921, 539);
  deer.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  deer.addAnimation('touched','images/deer/0001.png','images/deer/0001.png','images/deer/0002.png','images/deer/0002.png','images/deer/0003.png','images/deer/0003.png','images/deer/0004.png','images/deer/0004.png','images/deer/0005.png','images/deer/0005.png','images/deer/0006.png','images/deer/0006.png','images/deer/0007.png','images/deer/0007.png','images/deer/0008.png','images/deer/0008.png','images/deer/0009.png','images/deer/0009.png','images/deer/0010.png','images/deer/0010.png','images/deer/0011.png','images/deer/0011.png','images/deer/0012.png','images/deer/0012.png','images/deer/0013.png','images/deer/0013.png','images/deer/0014.png','images/deer/0014.png','images/deer/0015.png','images/deer/0015.png');
  triggerByTouch.add(deer);
  let noReturn = createSprite(6058, 544);
  noReturn.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  noReturn.addAnimation('touched', 'images/ponr.png');
  triggerByTouch.add(noReturn);
  let collage2 = createSprite(505, 316);
  collage2.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  collage2.addAnimation('touched', 'images/collage2.png');
  triggerByTouch.add(collage2);
  let cats = createSprite(381, 547);
  cats.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  cats.addAnimation('touched', 'images/cats.png');
  triggerByTouch.add(cats);
  let bible = createSprite(1294, 495);
  bible.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  bible.addAnimation('touched', 'images/bible.png');
  triggerByTouch.add(bible);
  let squirrel = createSprite(1493, 407);
  squirrel.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  squirrel.addAnimation('touched','images/squirrel/0001.png','images/squirrel/0001.png','images/squirrel/0002.png','images/squirrel/0002.png','images/squirrel/0003.png','images/squirrel/0003.png','images/squirrel/0004.png','images/squirrel/0004.png','images/squirrel/0005.png','images/squirrel/0005.png','images/squirrel/0006.png','images/squirrel/0006.png','images/squirrel/0007.png','images/squirrel/0007.png','images/squirrel/0008.png','images/squirrel/0008.png','images/squirrel/0009.png','images/squirrel/0009.png','images/squirrel/0010.png','images/squirrel/0010.png','images/squirrel/0011.png','images/squirrel/0011.png','images/squirrel/0012.png','images/squirrel/0012.png','images/squirrel/0013.png','images/squirrel/0013.png','images/squirrel/0014.png','images/squirrel/0014.png','images/squirrel/0015.png','images/squirrel/0015.png');
  triggerByTouch.add(squirrel);
  let commandments = createSprite(1632, 190);
  commandments.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  commandments.addAnimation('touched', 'images/Commandments.png');
  triggerByTouch.add(commandments);
  let collage1 = createSprite(1978, 525);
  collage1.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  collage1.addAnimation('touched', 'images/Collage1.png');
  triggerByTouch.add(collage1);
  let schoolKid = createSprite(3149, 247);
  schoolKid.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  schoolKid.addAnimation('touched','images/schoolKid/0001.png','images/schoolKid/0001.png','images/schoolKid/0002.png','images/schoolKid/0002.png','images/schoolKid/0003.png','images/schoolKid/0003.png','images/schoolKid/0004.png','images/schoolKid/0004.png','images/schoolKid/0005.png','images/schoolKid/0005.png','images/schoolKid/0006.png','images/schoolKid/0006.png','images/schoolKid/0007.png','images/schoolKid/0007.png','images/schoolKid/0008.png','images/schoolKid/0008.png','images/schoolKid/0009.png','images/schoolKid/0009.png','images/schoolKid/0010.png','images/schoolKid/0010.png','images/schoolKid/0011.png','images/schoolKid/0011.png','images/schoolKid/0012.png','images/schoolKid/0012.png','images/schoolKid/0013.png','images/schoolKid/0013.png','images/schoolKid/0014.png','images/schoolKid/0014.png','images/schoolKid/0015.png','images/schoolKid/0015.png','images/schoolKid/0016.png','images/schoolKid/0016.png','images/schoolKid/0017.png','images/schoolKid/0017.png','images/schoolKid/0018.png','images/schoolKid/0018.png','images/schoolKid/0019.png','images/schoolKid/0019.png','images/schoolKid/0020.png','images/schoolKid/0020.png','images/schoolKid/0021.png','images/schoolKid/0021.png','images/schoolKid/0022.png','images/schoolKid/0022.png','images/schoolKid/0023.png','images/schoolKid/0023.png','images/schoolKid/0024.png','images/schoolKid/0024.png','images/schoolKid/0025.png','images/schoolKid/0025.png');
  triggerByTouch.add(schoolKid);
  //[19]
  let loveImage = createSprite(3226, 554);
  loveImage.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  loveImage.addAnimation('touched','images/Love-Letter.png');
  triggerByTouch.add(loveImage);
  let glitchConva = createSprite(3384, 459);
  glitchConva.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  glitchConva.addAnimation('touched', 'images/glitch-convo.png');
  triggerByTouch.add(glitchConva);
  let collage4 = createSprite(3685, 367);
  collage4.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  collage4.addAnimation('touched', 'images/collage4.png');
  triggerByTouch.add(collage4);
  let bird = createSprite(4183, 435);
  bird.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  bird.addAnimation('touched', 'images/bird.png');
  triggerByTouch.add(bird);
  let guideToB = createSprite(4320, 584);
  guideToB.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  guideToB.addAnimation('touched','images/Barter.png');
  triggerByTouch.add(guideToB);
  let notRight = createSprite(4597, 548);
  notRight.addAnimation('normal', 'images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png');
  notRight.addAnimation('touched', 'images/not-right.png');
  triggerByTouch.add(notRight);
  //...
}

function setup() {
  createCanvas(1280, 720);
  
  
  for (let i=0;i<triggerByTouch.length;i++){
    triggerByTouch[i].setCollider('circle',0,0,30);
    triggerByTouch[i].addAnimation('void','images/transp.png');
  }
  
  noEntry = createSprite(6340 , 590);
  noEntry.addAnimation('normal', 'images/noEntry.png');

  bgm.setVolume(0);
}

function draw() {
  background(0, 220, 220);
  image(bg2, 0, 0);
  image(bg1, 0, 0);
  theCharacter.velocity.y = 0;
  theCharacter.collide(blocks, function() {
    isOnGround = true
  });

  if (!theCharacter.collide(blocks) && !noiseTerrains[0].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) && !noiseTerrains[1].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50)) {
    theCharacter.velocity.y += GRAVITY;
  }

  while (noiseTerrains[0].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) || noiseTerrains[1].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50)) {
    theCharacter.position.y -= 10;
    theCharacter.velocity.y = 0;
    isOnGround = true;
  }

  while (theCharacter.velocity.x != 0) {
    if (theCharacter.velocity.x > 0) {
      theCharacter.velocity.x -= FRICTION;
    } else {
      theCharacter.velocity.x += FRICTION;
    }
  }
  if (theCharacter.velocity.x == 0) {
    if (theCharacter.getAnimationLabel() == 'walkR') {
      theCharacter.changeAnimation('standR');
    } else if (theCharacter.getAnimationLabel() == 'walkL') {
      theCharacter.changeAnimation('standL');
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    theCharacter.velocity.x = 10;
    theCharacter.changeAnimation('walkR');
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 3);
      bgmIsPlayed = true;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    theCharacter.velocity.x = -10;
    theCharacter.changeAnimation('walkL');
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 3);
    }
  }

  if (keyIsDown(UP_ARROW) && !isJumping) {
    theCharacter.velocity.y += JUMP;
    let state = theCharacter.getAnimationLabel();
    if (state == 'walkR' || state == 'standR') {
      theCharacter.changeAnimation('jumpR');
    }
    if (state == 'walkL' || state == 'standL') {
      theCharacter.changeAnimation('jumpL');
    }
    if (!jump.isPlaying()) {
      jump.play();
    }
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 3);
      bgmIsPlayed = true;
    }
    isJumping = true;
    isOnGround = false;
  }

  if (isJumping && isOnGround) {
    if (theCharacter.getAnimationLabel() == 'jumpR') {
      theCharacter.changeAnimation('standR');
    } else if (theCharacter.getAnimationLabel() == 'jumpL') {
      theCharacter.changeAnimation('standL');
    }
    isJumping = false;
  }

  let currentPieces = undefined;
  for (let i = 0; i < triggerByTouch.length; i++) {
    let toTest = triggerByTouch[i];
    if (toTest.overlap(theCharacter)) {
      triggerByTouch[i].changeAnimation('touched');
      currentPieces = i;
      if (i == 5 && !interview.isPlaying()) {
        interview.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 1 && !gretaSpeech.isPlaying()) {
        gretaSpeech.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 7 && !holyGreta.isPlaying()) {
        holyGreta.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 19 && !sKid.isPlaying()) {
        sKid.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 16 && !sSquirrel.isPlaying()) {
        sSquirrel.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 6 && !sHealthCare.isPlaying()) {
        sHealthCare.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 4 && !sCollage3.isPlaying()) {
        sCollage3.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 9 && !sNatureUpdate.isPlaying()) {
        sNatureUpdate.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 22 && !sCollage4.isPlaying()) {
        sCollage4.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 10 && !sGasMask.isPlaying()) {
        sGasMask.play();
        bgm.setVolume(0, 1.5);
      } else if (i == 11 && !sDeer.isPlaying()) {
        sDeer.play();
        bgm.setVolume(0, 1.5);
      }
      if (!triggerIsPlayed) {
        trigger.play();
        triggerIsPlayed = true;
      }
    } else if (toTest.getAnimationLabel() == 'touched') {
      triggerByTouch[i].changeAnimation('normal');
      if (i == 5 && interview.isPlaying()) {
        interview.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 1 && gretaSpeech.isPlaying()) {
        gretaSpeech.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 7 && holyGreta.isPlaying()) {
        holyGreta.stop();
        bgm.setVolume(0.8, 1);
      }else if (i == 19 && sKid.isPlaying()) {
        sKid.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 16 && sSquirrel.isPlaying()) {
        sSquirrel.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 6 && sHealthCare.isPlaying()) {
        sHealthCare.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 4 && sCollage3.isPlaying()) {
        sCollage3.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 9 && sNatureUpdate.isPlaying()) {
        sNatureUpdate.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 22 && sCollage4.isPlaying()) {
        sCollage4.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 10 && sGasMask.isPlaying()) {
        sGasMask.stop();
        bgm.setVolume(0.8, 1);
      } else if (i == 11 && sDeer.isPlaying()) {
        sDeer.stop();
        bgm.setVolume(0.8, 1);
      }
      triggerIsPlayed = false;
    }
  }
  for (let i=0;i<triggerByTouch.length;i++){
    if (currentPieces != undefined && currentPieces != i){
      triggerByTouch[i].changeAnimation('void');
    } else if (currentPieces == undefined && triggerByTouch[i].getAnimationLabel() == 'void'){
      triggerByTouch[i].changeAnimation('normal');
    }
  }

  // let realMouseX = mouseX + (camera.position.x - width / 2);
  // for (let i = 0; i < triggerByMouseOverlap.length; i++) {
  //   if (abs(realMouseX - triggerByMouseOverlap[i].position.x) < T_SIZE && abs(mouseY - triggerByMouseOverlap[i].position.y) < T_SIZE) {
  //     triggerByMouseOverlap[i].changeAnimation('mouseOn');
  //     if (!triggerMIsPlayed) {
  //       triggerM.play();
  //       triggerMIsPlayed = true;
  //     }
  //     if (i == 3 && !sKid.isPlaying()){
  //       sKid.play();
  //       bgm.setVolume(0,1.5);
  //     }
  //   } else if (triggerByMouseOverlap[i].getAnimationLabel() == 'mouseOn') {
  //     triggerByMouseOverlap[i].changeAnimation('normal');
  //     triggerMIsPlayed = false;
  //     if (i == 3 && sKid.isPlaying()){
  //       sKid.stop();
  //       bgm.setVolume(0.8,1);
  //     }
  //   }
  // }
  // for (let i = 0; i < triggerByPress.length; i++) {
  //   if (abs(mouseY - triggerByPress[i].position.y) < T_SIZE && abs(realMouseX - triggerByPress[i].position.x) < T_SIZE && mouseIsPressed) {
  //     triggerByPress[i].changeAnimation('clicked');
  //     if (!triggerMIsPlayed) {
  //       triggerM.play();
  //       triggerMIsPlayed = true;
  //     }
  //   } else if (triggerByPress[i].getAnimationLabel() == 'clicked') {
  //     triggerByPress[i].changeAnimation('normal');
  //     triggerMIsPlayed = false;
  //   }
  // }

  if (abs(camera.position.x - theCharacter.position.x) > width / (2) - 200) {
    camera.position.x += theCharacter.velocity.x;
  }
  while ((camera.position.x - theCharacter.position.x) > width / (2) - 200) {
    camera.position.x--;
  }
  while ((camera.position.x - theCharacter.position.x) < -(width / (2) - 200)) {
    camera.position.x++;
  }
  if (camera.position.x > SCENE_W - width / 2) {
    camera.position.x = SCENE_W - width / 2;
  } else if (camera.position.x < width / 2) {
    camera.position.x = width / 2;
  }
  if (theCharacter.position.x > SCENE_W) {
    theCharacter.position.x = SCENE_W;
    theCharacter.velocity.x = 0;
  } else if (theCharacter.position.x < 50) {
    theCharacter.position.x = 50;
    theCharacter.velocity.x = 0;
  }
  
  if (noEntry.overlapPixel(theCharacter.position.x,theCharacter.position.y)){
    window.location.assign(url);
  }

  drawSprites(blocks);
  drawSprite(noEntry);
  drawSprites(noiseTerrains);
  //drawSprites(triggerByPress);
  //drawSprites(triggerByMouseOverlap);
  drawSprite(theCharacter);
  drawSprites(triggerByTouch);

  if (theCharacter.position.y > height) {
    if (!pageJumped){
    window.location.reload();
      pageJumped = true;
    }
  }
}

function mousePressed() {
  //theCharacter.debug = !theCharacter.debug;
}