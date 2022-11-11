/*
using p5.js and p5.play lib by Paolo Pedercini
*/
let theCharacter;
let url = "../void";

let blocks;
let noiseTerrains;
let targets;

let SCENE_W = 6400;
let SCENE_H = 720;

let pageJumped = false;
let triggerIsPlayed = false;
let allLoaded = false;
let loadedNum = 0;

//physic
let GRAVITY = 10;
let FRICTION = 5;
let T_SIZE = 30;
let JUMP = -90;
let isJumping = false;
let isOnGround = false;

function preload(){
  bgm = loadSound('sound/BGM.mp3');
  jump = loadSound('sound/jump.wav');
  trigger = loadSound('sound/triggerM.wav');
  sViral = loadSound('audio/virus.mp3');
  sDecay = loadSound('audio/fly.mp3');
  sProtests = loadSound('audio/protests-entertainment.mp3');
  sAncient = loadSound('audio/fashion.mp3');
  sPolice = loadSound('audio/Police Brutality.mp3');
  sNoFood = loadSound('audio/emergency.mp3');
  sRadio = loadSound('audio/Choppy radio messages.mp3');
  sVoiceMail = loadSound('audio/voicemail-dystopia.mp3');
  sExplode = loadSound('audio/Exploding earth.mp3');
  sDoll = loadSound('audio/Doll with worm.mp3');
  sAlert = loadSound('audio/weather-alert.mp3');
  //
  bg1 = loadImage('images/Dystopia-bg1.png');
  bg2 = loadImage('images/Dystopia-bg2.png');
  b5027601 = loadImage('images/blocks/5027601.png');
  b2915346 = loadImage('images/blocks/2915346.png');
  b320333 = loadImage('images/blocks/320333.png');
  b515444 = loadImage('images/blocks/515444.png');
  b724345 = loadImage('images/blocks/724345.png');
  b718645 = loadImage('images/blocks/718645.png');
  b754544 = loadImage('images/blocks/754544.png');
  b869287 = loadImage('images/blocks/869287.png');
  b1179553 = loadImage('images/blocks/1179553.png');
  b961427 = loadImage('images/blocks/961427.png');
  b1330468 = loadImage('images/blocks/1330468.png');
  b2785396 = loadImage('images/blocks/2785396.png');
  b2780596 = loadImage('images/blocks/2780596.png');
  b2982674 = loadImage('images/blocks/2982674.png');
  b2913507 = loadImage('images/blocks/2913507.png');
  b3158603 = loadImage('images/blocks/3158603.png');
  b3061432 = loadImage('images/blocks/3061432.png');
  b3336516 = loadImage('images/blocks/3336516.png');
  b4843372 = loadImage('images/blocks/4843372.png');
  b5183477 = loadImage('images/blocks/5183477.png');
  b5011398 = loadImage('images/blocks/5011398.png');
  b5192675 = loadImage('images/blocks/5192675.png');
  b5635602 = loadImage('images/blocks/5635602.png');
  b5457498 = loadImage('images/blocks/5457498.png');
  blocks = new Group();
  let b0 = createSprite(718,645);
  b0.addAnimation('normal',b718645);
  blocks.add(b0);
  let b1 = createSprite(2982,674);
  b1.addAnimation('normal',b2982674);
  blocks.add(b1);
  let b2 = createSprite(5192,675);
  b2.addAnimation('normal',b5192675);
  blocks.add(b2);
  let b3 = createSprite(754,544);
  b3.addAnimation('normal',b754544);
  blocks.add(b3);
  let b4 = createSprite(515,444);
  b4.addAnimation('normal',b515444);
  blocks.add(b4);
  let b5 = createSprite(320,333);
  b5.addAnimation('normal',b320333);
  blocks.add(b5);
  let b6 = createSprite(724,345);
  b6.addAnimation('normal',b724345);
  blocks.add(b6);
  let b7 = createSprite(981,427);
  b7.addAnimation('normal',b961427);
  blocks.add(b7);
  let b8 = createSprite(880,287);
  b8.addAnimation('normal',b869287);
  blocks.add(b8);
  let b9 = createSprite(1179,553);
  b9.addAnimation('normal',b1179553);
  blocks.add(b9);
  let b10 = createSprite(1360,408);
  b10.addAnimation('normal',b1330468);
  blocks.add(b10);
  let b11 = createSprite(2780,596);
  b11.addAnimation('normal',b2780596);
  blocks.add(b11);
  let b12 = createSprite(2933,487);
  b12.addAnimation('normal',b2913507);
  blocks.add(b12);
  let b13 = createSprite(2755,396);
  b13.addAnimation('normal',b2785396);
  blocks.add(b13);
  let b14 = createSprite(2915,306);
  b14.addAnimation('normal',b2915346);
  blocks.add(b14);
  let b15 = createSprite(3158,603);
  b15.addAnimation('normal',b3158603);
  blocks.add(b15);
  let b16 = createSprite(3101,412);
  b16.addAnimation('normal',b3061432);
  blocks.add(b16);
  let b17 = createSprite(3366,486);
  b17.addAnimation('normal',b3336516);
  blocks.add(b17);
  let b18 = createSprite(5027,601);
  b18.addAnimation('normal',b5027601);
  blocks.add(b18);
  let b19 = createSprite(5213,477);
  b19.addAnimation('normal',b5183477);
  blocks.add(b19);
  let b20 = createSprite(5011,398);
  b20.addAnimation('normal',b5011398);
  blocks.add(b20);
  let b21 = createSprite(4843,372);
  b21.addAnimation('normal',b4843372);
  blocks.add(b21);
  let b22 = createSprite(5635,602);
  b22.addAnimation('normal',b5635602);
  blocks.add(b22);
  let b23 = createSprite(5427,498);
  b23.addAnimation('normal',b5457498);
  blocks.add(b23);
  
  noiseTerrains = new Group();
  let noise1 = createSprite(1979, 631);
  noise1.addAnimation('normal','images/noiseTerrains/noise1.png');
  noiseTerrains.add(noise1);
  let noise2 = createSprite(3969, 651);
  noise2.addAnimation('normal','images/noiseTerrains/noise2.png');
  noiseTerrains.add(noise2);
  let noise3 = createSprite(6123, 665);
  noise3.addAnimation('normal','images/noiseTerrains/noise3.png');
  noiseTerrains.add(noise3);
  //
  theCharacter = createSprite(201, height / 2);
  theCharacter.limitSpeed(45);
  theCharacter.addAnimation('stand','images/character/Brain-still1.png','images/character/Brain-still1.png','images/character/Brain-still1.png','images/character/Brain-still2.png','images/character/Brain-still2.png','images/character/Brain-still2.png');
  theCharacter.addAnimation('walkL','images/character/L1-Brain.png','images/character/L2-Brain.png','images/character/L3-Brain.png','images/character/L4-Brain.png');
  theCharacter.addAnimation('walkR','images/character/R1-Brain.png','images/character/R2-Brain.png','images/character/R3-Brain.png','images/character/R4-Brain.png');
  theCharacter.addAnimation('jump','images/character/J1-Brain.png','images/character/J2-Brain.png','images/character/J3-Brain.png','images/character/J4-Brain.png');
  //
  //interactable entities
  targets = new Group();
  let viralHistory = createSprite(319,287);
  viralHistory.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  viralHistory.addAnimation('touched','images/viralHist/0001.png','images/viralHist/0001.png','images/viralHist/0002.png','images/viralHist/0002.png','images/viralHist/0003.png','images/viralHist/0003.png','images/viralHist/0004.png','images/viralHist/0004.png','images/viralHist/0005.png','images/viralHist/0005.png','images/viralHist/0006.png','images/viralHist/0006.png','images/viralHist/0007.png','images/viralHist/0007.png','images/viralHist/0008.png','images/viralHist/0008.png','images/viralHist/0009.png','images/viralHist/0009.png','images/viralHist/0010.png','images/viralHist/0010.png','images/viralHist/0011.png','images/viralHist/0011.png','images/viralHist/0012.png','images/viralHist/0012.png','images/viralHist/0013.png','images/viralHist/0013.png','images/viralHist/0014.png','images/viralHist/0014.png','images/viralHist/0015.png','images/viralHist/0015.png','images/viralHist/0016.png','images/viralHist/0016.png','images/viralHist/0017.png','images/viralHist/0017.png','images/viralHist/0018.png','images/viralHist/0018.png','images/viralHist/0019.png','images/viralHist/0019.png','images/viralHist/0020.png','images/viralHist/0020.png','images/viralHist/0021.png','images/viralHist/0021.png','images/viralHist/0022.png','images/viralHist/0022.png','images/viralHist/0023.png','images/viralHist/0023.png','images/viralHist/0024.png','images/viralHist/0024.png','images/viralHist/0025.png','images/viralHist/0025.png');
  targets.add(viralHistory);
 let obituary = createSprite(397,532);
  obituary.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  obituary.addAnimation('touched','images/obituary.png');
  targets.add(obituary);
  let decay = createSprite(515,382);
  decay.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  decay.addAnimation('touched','images/decay/0001.png','images/decay/0001.png','images/decay/0002.png','images/decay/0002.png','images/decay/0003.png','images/decay/0003.png','images/decay/0004.png','images/decay/0004.png','images/decay/0005.png','images/decay/0005.png','images/decay/0006.png','images/decay/0006.png','images/decay/0007.png','images/decay/0007.png','images/decay/0008.png','images/decay/0008.png','images/decay/0009.png','images/decay/0009.png','images/decay/0010.png','images/decay/0010.png','images/decay/0011.png','images/decay/0011.png','images/decay/0012.png','images/decay/0012.png','images/decay/0013.png','images/decay/0013.png','images/decay/0014.png','images/decay/0014.png','images/decay/0015.png','images/decay/0015.png','images/decay/0016.png','images/decay/0016.png','images/decay/0017.png','images/decay/0017.png','images/decay/0018.png','images/decay/0018.png','images/decay/0019.png','images/decay/0019.png','images/decay/0020.png','images/decay/0020.png');
  targets.add(decay);
  let gang = createSprite(726,284);
  gang.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  gang.addAnimation('touched','images/gang-violence.png');
  targets.add(gang);
  let survivalKit = createSprite(880,240);
  survivalKit.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  survivalKit.addAnimation('touched','images/Survival-Kit.png');
  targets.add(survivalKit);
  let protests = createSprite(980,367);
  protests.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  protests.addAnimation('touched','images/protests/0001.png','images/protests/0001.png','images/protests/0002.png','images/protests/0002.png','images/protests/0003.png','images/protests/0003.png','images/protests/0004.png','images/protests/0004.png','images/protests/0005.png','images/protests/0005.png','images/protests/0006.png','images/protests/0006.png','images/protests/0007.png','images/protests/0007.png','images/protests/0008.png','images/protests/0008.png','images/protests/0009.png','images/protests/0009.png','images/protests/0010.png','images/protests/0010.png','images/protests/0011.png','images/protests/0011.png','images/protests/0012.png','images/protests/0012.png','images/protests/0013.png','images/protests/0013.png','images/protests/0014.png','images/protests/0014.png','images/protests/0015.png','images/protests/0015.png','images/protests/0016.png','images/protests/0016.png','images/protests/0017.png','images/protests/0017.png','images/protests/0018.png','images/protests/0018.png','images/protests/0019.png','images/protests/0019.png','images/protests/0020.png','images/protests/0020.png');
  targets.add(protests);
  let gretaDie = createSprite(1182,497);
  gretaDie.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  gretaDie.addAnimation('touched','images/greta-pieta.png');
  targets.add(gretaDie);
  let maya = createSprite(1364,361);
  maya.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  maya.addAnimation('touched','images/Mayan.png');
  targets.add(maya);
  let cult = createSprite(1720,581);
  cult.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  cult.addAnimation('touched','images/Cult-Greta.png');
  targets.add(cult);
  let farmingGuide = createSprite(2077, 569);
  farmingGuide.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  farmingGuide.addAnimation('touched','images/Hydroponic Farming Guide.png');
  targets.add(farmingGuide);
  let philo = createSprite(2366, 569);
  philo.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  philo.addAnimation('touched','images/philosphy.png');
  targets.add(philo);
  let convBrains = createSprite(2649, 560);
  convBrains.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  convBrains.addAnimation('touched','images/convBrains.png');
  targets.add(convBrains);
  let ancientRituals = createSprite(2930, 438);
  ancientRituals.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  ancientRituals.addAnimation('touched','images/ancientRituals/0001.png','images/ancientRituals/0001.png','images/ancientRituals/0002.png','images/ancientRituals/0002.png','images/ancientRituals/0003.png','images/ancientRituals/0003.png','images/ancientRituals/0004.png','images/ancientRituals/0004.png','images/ancientRituals/0005.png','images/ancientRituals/0005.png','images/ancientRituals/0006.png','images/ancientRituals/0006.png','images/ancientRituals/0007.png','images/ancientRituals/0007.png','images/ancientRituals/0008.png','images/ancientRituals/0008.png','images/ancientRituals/0009.png','images/ancientRituals/0009.png','images/ancientRituals/0010.png','images/ancientRituals/0010.png','images/ancientRituals/0011.png','images/ancientRituals/0011.png','images/ancientRituals/0012.png','images/ancientRituals/0012.png','images/ancientRituals/0013.png','images/ancientRituals/0013.png','images/ancientRituals/0014.png','images/ancientRituals/0014.png','images/ancientRituals/0015.png','images/ancientRituals/0015.png');
  targets.add(ancientRituals);
  let police = createSprite(2758, 352);
  police.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  police.addAnimation('touched','images/police-brutality.png');
  targets.add(police);
  let noFood = createSprite(2913, 258);
  noFood.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  noFood.addAnimation('touched','images/noFood/0001.png','images/noFood/0001.png','images/noFood/0002.png','images/noFood/0002.png','images/noFood/0003.png','images/noFood/0003.png','images/noFood/0004.png','images/noFood/0004.png','images/noFood/0005.png','images/noFood/0005.png','images/noFood/0006.png','images/noFood/0006.png','images/noFood/0007.png','images/noFood/0007.png','images/noFood/0008.png','images/noFood/0008.png','images/noFood/0009.png','images/noFood/0009.png','images/noFood/0010.png','images/noFood/0010.png','images/noFood/0011.png','images/noFood/0011.png','images/noFood/0012.png','images/noFood/0012.png','images/noFood/0013.png','images/noFood/0013.png','images/noFood/0014.png','images/noFood/0014.png','images/noFood/0015.png','images/noFood/0015.png','images/noFood/0016.png','images/noFood/0016.png','images/noFood/0017.png','images/noFood/0017.png','images/noFood/0018.png','images/noFood/0018.png','images/noFood/0019.png','images/noFood/0019.png','images/noFood/0020.png','images/noFood/0020.png');
  targets.add(noFood);
  let radio = createSprite(3102,366);
  radio.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  radio.addAnimation('touched','images/radio1.png','images/radio2.png');
  targets.add(radio);
  let voiceMail = createSprite(3352,425);
  voiceMail.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  voiceMail.addAnimation('touched','images/voiceMail/0001.png','images/voiceMail/0001.png','images/voiceMail/0002.png','images/voiceMail/0002.png','images/voiceMail/0003.png','images/voiceMail/0003.png','images/voiceMail/0004.png','images/voiceMail/0004.png','images/voiceMail/0005.png','images/voiceMail/0005.png','images/voiceMail/0006.png','images/voiceMail/0006.png','images/voiceMail/0007.png','images/voiceMail/0007.png','images/voiceMail/0008.png','images/voiceMail/0008.png','images/voiceMail/0009.png','images/voiceMail/0009.png','images/voiceMail/0010.png','images/voiceMail/0010.png','images/voiceMail/0011.png','images/voiceMail/0011.png');
  targets.add(voiceMail);
  let cookBook = createSprite(3356,579);
  cookBook.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  cookBook.addAnimation('touched','images/Cookbook.png');
  targets.add(cookBook);
  let foraging = createSprite(3862,560);
  foraging.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  foraging.addAnimation('touched','images/foraging.png');
  targets.add(foraging);
  let fountain = createSprite(4370,581)
  fountain.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  fountain.addAnimation('touched','images/Fountain-of-youth.png');
  targets.add(fountain);
  let endtime = createSprite(4807, 572);
  endtime.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  endtime.addAnimation('touched','images/end-times.png');
  targets.add(endtime);
  let explode = createSprite(5213, 426);
  explode.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  explode.addAnimation('touched','images/explode/0001.png','images/explode/0001.png','images/explode/0002.png','images/explode/0002.png','images/explode/0003.png','images/explode/0003.png','images/explode/0004.png','images/explode/0004.png','images/explode/0005.png','images/explode/0005.png','images/explode/0006.png','images/explode/0006.png','images/explode/0007.png','images/explode/0007.png','images/explode/0008.png','images/explode/0008.png','images/explode/0009.png','images/explode/0009.png','images/explode/0010.png','images/explode/0010.png','images/explode/0011.png','images/explode/0011.png','images/explode/0012.png','images/explode/0012.png','images/explode/0013.png','images/explode/0013.png','images/explode/0014.png','images/explode/0014.png','images/explode/0015.png','images/explode/0015.png','images/explode/0016.png','images/explode/0016.png','images/explode/0017.png','images/explode/0017.png','images/explode/0018.png','images/explode/0018.png','images/explode/0019.png','images/explode/0019.png','images/explode/0020.png','images/explode/0020.png');
  targets.add(explode);
  let doll = createSprite(4840, 314);
  doll.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  doll.addAnimation('touched','images/doll/0001.png','images/doll/0001.png','images/doll/0002.png','images/doll/0002.png','images/doll/0003.png','images/doll/0003.png','images/doll/0004.png','images/doll/0004.png','images/doll/0005.png','images/doll/0005.png','images/doll/0006.png','images/doll/0006.png','images/doll/0007.png','images/doll/0007.png','images/doll/0008.png','images/doll/0008.png','images/doll/0009.png','images/doll/0009.png','images/doll/0010.png','images/doll/0010.png','images/doll/0011.png','images/doll/0011.png','images/doll/0012.png','images/doll/0012.png','images/doll/0013.png','images/doll/0013.png','images/doll/0014.png','images/doll/0014.png','images/doll/0015.png','images/doll/0015.png','images/doll/0016.png','images/doll/0016.png','images/doll/0017.png','images/doll/0017.png');
  targets.add(doll);
  let alert = createSprite(5428,451);
  alert.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  alert.addAnimation('touched','images/theEnd/0001.png','images/theEnd/0001.png','images/theEnd/0002.png','images/theEnd/0002.png','images/theEnd/0003.png','images/theEnd/0003.png','images/theEnd/0004.png','images/theEnd/0004.png','images/theEnd/0005.png','images/theEnd/0005.png','images/theEnd/0006.png','images/theEnd/0006.png','images/theEnd/0007.png','images/theEnd/0007.png','images/theEnd/0008.png','images/theEnd/0008.png','images/theEnd/0009.png','images/theEnd/0009.png','images/theEnd/0010.png','images/theEnd/0010.png','images/theEnd/0011.png','images/theEnd/0011.png','images/theEnd/0012.png','images/theEnd/0012.png','images/theEnd/0013.png','images/theEnd/0013.png','images/theEnd/0014.png','images/theEnd/0014.png','images/theEnd/0015.png','images/theEnd/0015.png','images/theEnd/0016.png','images/theEnd/0016.png','images/theEnd/0017.png','images/theEnd/0017.png','images/theEnd/0018.png','images/theEnd/0018.png','images/theEnd/0019.png','images/theEnd/0019.png','images/theEnd/0020.png','images/theEnd/0020.png','images/theEnd/0021.png','images/theEnd/0021.png','images/theEnd/0022.png','images/theEnd/0022.png','images/theEnd/0023.png','images/theEnd/0023.png','images/theEnd/0024.png','images/theEnd/0024.png','images/theEnd/0025.png','images/theEnd/0025.png');
  targets.add(alert);
  let over = createSprite(6080, 599);
  over.addAnimation('normal','images/DysT1.png','images/DysT1.png','images/DysT2.png','images/DysT2.png','images/DysT3.png','images/DysT3.png','images/DysT2.png','images/DysT2.png');
  over.addAnimation('touched','images/game-over.png');
  targets.add(over);
  //
  
}

function setup() {
  createCanvas(1280, 720);
  
  
  for (let i=0;i<targets.length;i++){
    targets[i].setCollider('circle',0,0,30);
    targets[i].addAnimation('void','images/transp.png');
  }
  
  bgm.setVolume(0);
}

function draw() {
  background(0,220,220);
  image(bg2,0,0);
  image(bg1,0,0);
  
  theCharacter.velocity.y = 0;
  theCharacter.collide(blocks, function() {
    isOnGround = true
  });
  if (!theCharacter.collide(blocks) && !noiseTerrains[0].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) && !noiseTerrains[1].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) && !noiseTerrains[2].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50)) {
    theCharacter.velocity.y += GRAVITY;
  }

  while (noiseTerrains[0].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) || noiseTerrains[1].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50) || noiseTerrains[2].overlapPixel(theCharacter.position.x, theCharacter.position.y + 50)) {
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
    theCharacter.changeAnimation('stand');
  }

  if (keyIsDown(RIGHT_ARROW)) {
    theCharacter.velocity.x = 10;
    theCharacter.changeAnimation('walkR');
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 1.5);
      bgmIsPlayed = true;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    theCharacter.velocity.x = -10;
    theCharacter.changeAnimation('walkL');
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 1.5);
    }
  }
  
  if (keyIsDown(UP_ARROW) && !isJumping) {
    theCharacter.velocity.y += JUMP;
    let state = theCharacter.getAnimationLabel();
    if (state == 'walkR' || state == 'standR') {
      theCharacter.changeAnimation('jump');
    }
    if (state == 'walkL' || state == 'standL') {
      theCharacter.changeAnimation('jump');
    }
    if (!jump.isPlaying()) {
      jump.play();
    }
    if (!bgm.isPlaying()) {
      bgm.loop();
      bgm.setVolume(0.8, 1.5);
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
  for (let i = 0; i < targets.length; i++) {
    let toTest = targets[i];
    if (toTest.overlap(theCharacter)) {
      targets[i].changeAnimation('touched');
      currentPieces = i;
      if (i == 0 && !sViral.isPlaying()){
        sViral.play();
        bgm.setVolume(0,1.5);
      } else if (i==2 && !sDecay.isPlaying()){
        sDecay.play();
        bgm.setVolume(0,1.5);
      } else if (i == 5 &&!sProtests.isPlaying()){
        sProtests.play();
        bgm.setVolume(0,1.5);
      } else if (i == 12 && !sAncient.isPlaying()){
        sAncient.play();
        bgm.setVolume(0,1.5);
      } else if (i == 13 && !sPolice.isPlaying()){
        sPolice.play();
        bgm.setVolume(0,1.5);
      } else if (i == 14 && !sNoFood.isPlaying()){
        sNoFood.play();
        bgm.setVolume(0,1.5);
      } else if (i == 15 && !sRadio.isPlaying()){
        sRadio.play();
        bgm.setVolume(0,1.5);
      } else if (i == 16 && !sVoiceMail.isPlaying()){
        sVoiceMail.play();
        bgm.setVolume(0,1.5);
      } else if (i == 21 && !sExplode.isPlaying()){
        sExplode.play();
        bgm.setVolume(0,1.5);
      } else if (i == 22 && !sDoll.isPlaying()){
        sDoll.play();
        bgm.setVolume(0,1.5);
      } else if (i == 23 && !sAlert.isPlaying()){
        sAlert.play();
        bgm.setVolume(0,1.5);
      }
      if (!triggerIsPlayed) {
        trigger.play();
        triggerIsPlayed = true;
      }
    } else if (toTest.getAnimationLabel() == 'touched') {
      targets[i].changeAnimation('normal');
      if (i == 0 && sViral.isPlaying()){
        sViral.stop();
        bgm.setVolume(0.8,1);
      } else if (i==2 && sDecay.isPlaying()){
        sDecay.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 5 && sProtests.isPlaying()){
        sProtests.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 12 && sAncient.isPlaying()){
        sAncient.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 13 && sPolice.isPlaying()){
        sPolice.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 14 && sNoFood.isPlaying()){
        sNoFood.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 15 && sRadio.isPlaying()){
        sRadio.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 16 && sVoiceMail.isPlaying()){
        sVoiceMail.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 21 && sExplode.isPlaying()){
        sExplode.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 22 && sDoll.isPlaying()){
        sDoll.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 23 && sAlert.isPlaying()){
        sAlert.stop();
        bgm.setVolume(0.8,1);
      }
      triggerIsPlayed = false;
    }
  }
  for (let i=0;i<targets.length;i++){
    if (currentPieces != undefined && currentPieces != i){
      targets[i].changeAnimation('void');
    } else if (currentPieces == undefined && targets[i].getAnimationLabel() == 'void'){
      targets[i].changeAnimation('normal');
    }
  }
  
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
    //theCharacter.position.x = SCENE_W;
    //theCharacter.velocity.x = 0;
  } else if (theCharacter.position.x < 50) {
    theCharacter.position.x = 50;
    theCharacter.velocity.x = 0;
  }
  
  if (theCharacter.position.y > 720){
    if (theCharacter.position.x > 5000 && !pageJumped){
      window.location.assign(url);
      pageJumped = true;
    } else {
      window.reload();
    }
  }
  
  drawSprites(blocks);  
  drawSprites(noiseTerrains);
  drawSprite(theCharacter);
  drawSprites(targets);
}