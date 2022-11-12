/*
using p5.js and p5.play lib by Paolo Pedercini
*/
let theCharacter;

let targets;
let nameList;
let timeMachine;
let instruction;

let triggerIsPlayed = false;
let pressed = false;
let tryClose = false;
let SCENE_W = 10000;
let SCENE_H = 720;

let timer;

function preload() {
  bgm = loadSound('./sound/voidBGM2.mp3');
  trigger = loadSound('./sound/trigger.wav');
  sBegin = loadSound('./audio/in-the-beginning.mp3');
  sFlood = loadSound('./audio/great-flood.mp3');
  sIceberg = loadSound('./audio/icebergs.mp3');
  sReincarnation = loadSound('./audio/reincarnation.mp3');
  sDance = loadSound('./audio/dance.mp3');
  sStar = loadSound('./audio/star.mp3');
  sSong = loadSound('./audio/wouldn_t-it-be-nice.mp3');
  sFirework = loadSound('./audio/firework.wav');
  sWorld = loadSound('./audio/flyInto.mp3');
  sVoicemail = loadSound('./audio/void-voicemail.mp3');
  sTmachine = loadSound('./audio/timemachine.mp3');
  //
  instruction = createSprite(200,720/4);
  instruction.addAnimation('normal','./images/press025.png','./images/press025.png','./images/press050.png','./images/press050.png','./images/press075.png','./images/press075.png','./images/press100.png','./images/press100.png','./images/press075.png','./images/press075.png','./images/press050.png','./images/press050.png');
  //interractable entities
  targets = new Group();
  let beginning = createSprite(420,201);
  beginning.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  beginning.addAnimation('touched','./images/beginning/0001.png','./images/beginning/0001.png','./images/beginning/0002.png','./images/beginning/0002.png','./images/beginning/0003.png','./images/beginning/0003.png','./images/beginning/0004.png','./images/beginning/0004.png','./images/beginning/0005.png','./images/beginning/0005.png','./images/beginning/0006.png','./images/beginning/0006.png','./images/beginning/0007.png','./images/beginning/0007.png','./images/beginning/0008.png','./images/beginning/0008.png','./images/beginning/0009.png','./images/beginning/0009.png','./images/beginning/0010.png','./images/beginning/0010.png','./images/beginning/0011.png','./images/beginning/0011.png','./images/beginning/0012.png','./images/beginning/0012.png','./images/beginning/0013.png','./images/beginning/0013.png','./images/beginning/0014.png','./images/beginning/0014.png','./images/beginning/0015.png','./images/beginning/0015.png','./images/beginning/0016.png','./images/beginning/0016.png','./images/beginning/0017.png','./images/beginning/0017.png');
  targets.add(beginning);
  let flood = createSprite(751,305);
  flood.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  flood.addAnimation('touched','./images/flood/0001.png','./images/flood/0001.png','./images/flood/0002.png','./images/flood/0002.png','./images/flood/0003.png','./images/flood/0003.png','./images/flood/0004.png','./images/flood/0004.png','./images/flood/0005.png','./images/flood/0005.png','./images/flood/0006.png','./images/flood/0006.png','./images/flood/0007.png','./images/flood/0007.png','./images/flood/0008.png','./images/flood/0008.png','./images/flood/0009.png','./images/flood/0009.png','./images/flood/0010.png','./images/flood/0010.png','./images/flood/0011.png','./images/flood/0011.png','./images/flood/0012.png','./images/flood/0012.png','./images/flood/0013.png','./images/flood/0013.png','./images/flood/0014.png','./images/flood/0014.png','./images/flood/0015.png','./images/flood/0015.png');
  targets.add(flood);
  let anxiety = createSprite(1151,567);
  anxiety.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  anxiety.addAnimation('touched','./images/anxiety.png');
  targets.add(anxiety);
  let afterlife = createSprite(1394,136);
  afterlife.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  afterlife.addAnimation('touched','./images/afterlife.png');
  targets.add(afterlife);
  let iceberg = createSprite(1516,400);
  iceberg.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  iceberg.addAnimation('touched','./images/iceberg/0001.png','./images/iceberg/0001.png','./images/iceberg/0002.png','./images/iceberg/0002.png','./images/iceberg/0003.png','./images/iceberg/0003.png','./images/iceberg/0004.png','./images/iceberg/0004.png','./images/iceberg/0005.png','./images/iceberg/0005.png','./images/iceberg/0006.png','./images/iceberg/0006.png','./images/iceberg/0007.png','./images/iceberg/0007.png','./images/iceberg/0008.png','./images/iceberg/0008.png','./images/iceberg/0009.png','./images/iceberg/0009.png','./images/iceberg/0010.png','./images/iceberg/0010.png','./images/iceberg/0011.png','./images/iceberg/0011.png','./images/iceberg/0012.png','./images/iceberg/0012.png','./images/iceberg/0013.png','./images/iceberg/0013.png','./images/iceberg/0014.png','./images/iceberg/0014.png','./images/iceberg/0015.png','./images/iceberg/0015.png');
  targets.add(iceberg);
  let reincarnation = createSprite(1840,266);
  reincarnation.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  reincarnation.addAnimation('touched','./images/reincarnation/0001.png','./images/reincarnation/0001.png','./images/reincarnation/0002.png','./images/reincarnation/0002.png','./images/reincarnation/0003.png','./images/reincarnation/0003.png','./images/reincarnation/0004.png','./images/reincarnation/0004.png','./images/reincarnation/0005.png','./images/reincarnation/0005.png','./images/reincarnation/0006.png','./images/reincarnation/0006.png','./images/reincarnation/0007.png','./images/reincarnation/0007.png','./images/reincarnation/0008.png','./images/reincarnation/0008.png','./images/reincarnation/0009.png','./images/reincarnation/0009.png','./images/reincarnation/0010.png','./images/reincarnation/0010.png','./images/reincarnation/0011.png','./images/reincarnation/0011.png','./images/reincarnation/0012.png','./images/reincarnation/0012.png','./images/reincarnation/0013.png','./images/reincarnation/0013.png','./images/reincarnation/0014.png','./images/reincarnation/0014.png','./images/reincarnation/0015.png','./images/reincarnation/0015.png','./images/reincarnation/0016.png','./images/reincarnation/0016.png','./images/reincarnation/0017.png','./images/reincarnation/0017.png','./images/reincarnation/0018.png','./images/reincarnation/0018.png','./images/reincarnation/0019.png','./images/reincarnation/0019.png','./images/reincarnation/0020.png','./images/reincarnation/0020.png');
  targets.add(reincarnation);
  let girm = createSprite(2190,196);
  girm.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  girm.addAnimation('touched','./images/grim-reaper.png');
  targets.add(girm);
  let chart = createSprite(2517,567);
  chart.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  chart.addAnimation('touched','./images/chart.png');
  targets.add(chart);
  let map = createSprite(2766,315);
  map.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  map.addAnimation('touched','./images/map/flooded-map00.png','./images/map/flooded-map00.png','./images/map/flooded-map01.png','./images/map/flooded-map01.png','./images/map/flooded-map02.png','./images/map/flooded-map02.png','./images/map/flooded-map03.png','./images/map/flooded-map03.png','./images/map/flooded-map04.png','./images/map/flooded-map04.png','./images/map/flooded-map05.png','./images/map/flooded-map05.png','./images/map/flooded-map06.png','./images/map/flooded-map06.png','./images/map/flooded-map07.png','./images/map/flooded-map07.png','./images/map/flooded-map08.png','./images/map/flooded-map08.png','./images/map/flooded-map09.png','./images/map/flooded-map09.png','./images/map/flooded-map10.png','./images/map/flooded-map10.png','./images/map/flooded-map11.png','./images/map/flooded-map11.png');
  targets.add(map);
  let dance = createSprite(3232, 246);
  dance.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  dance.addAnimation('touched','./images/dance/0001.png','./images/dance/0001.png','./images/dance/0002.png','./images/dance/0002.png','./images/dance/0003.png','./images/dance/0003.png','./images/dance/0004.png','./images/dance/0004.png','./images/dance/0005.png','./images/dance/0005.png','./images/dance/0006.png','./images/dance/0006.png','./images/dance/0007.png','./images/dance/0007.png','./images/dance/0008.png','./images/dance/0008.png','./images/dance/0009.png','./images/dance/0009.png','./images/dance/0010.png','./images/dance/0010.png','./images/dance/0011.png','./images/dance/0011.png','./images/dance/0012.png','./images/dance/0012.png','./images/dance/0013.png','./images/dance/0013.png','./images/dance/0014.png','./images/dance/0014.png','./images/dance/0015.png','./images/dance/0015.png','./images/dance/0016.png','./images/dance/0016.png','./images/dance/0017.png','./images/dance/0017.png','./images/dance/0018.png','./images/dance/0018.png','./images/dance/0019.png','./images/dance/0019.png','./images/dance/0020.png','./images/dance/0020.png');
  targets.add(dance);
  let notSaviour = createSprite(3537,552);
  notSaviour.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  notSaviour.addAnimation('touched','./images/greta-saviour.png');
  targets.add(notSaviour);
  let digitalR = createSprite(3773,125);
  digitalR.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  digitalR.addAnimation('touched','./images/digital reality1.png');
  targets.add(digitalR);
  let starsign = createSprite(4041,340);
  starsign.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  starsign.addAnimation('touched','./images/starsign/0001.png','./images/starsign/0001.png','./images/starsign/0002.png','./images/starsign/0002.png','./images/starsign/0003.png','./images/starsign/0003.png','./images/starsign/0004.png','./images/starsign/0004.png','./images/starsign/0005.png','./images/starsign/0005.png','./images/starsign/0006.png','./images/starsign/0006.png','./images/starsign/0007.png','./images/starsign/0007.png','./images/starsign/0009.png','./images/starsign/0009.png','./images/starsign/0010.png','./images/starsign/0010.png','./images/starsign/0011.png','./images/starsign/0011.png','./images/starsign/0012.png','./images/starsign/0012.png','./images/starsign/0013.png','./images/starsign/0013.png','./images/starsign/0014.png','./images/starsign/0014.png','./images/starsign/0015.png','./images/starsign/0015.png','./images/starsign/0016.png','./images/starsign/0016.png','./images/starsign/0017.png','./images/starsign/0017.png','./images/starsign/0018.png','./images/starsign/0018.png','./images/starsign/0019.png','./images/starsign/0019.png','./images/starsign/0020.png','./images/starsign/0020.png');
  targets.add(starsign);
  let bye = createSprite(4218,594);
  bye.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  bye.addAnimation('touched','./images/goodbye.png');
  targets.add(bye);
  let reliance = createSprite(4253, 121);
  reliance.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  reliance.addAnimation('touched','./images/quick-fix.png');
  targets.add(reliance);
  let song = createSprite(4684, 397);
  song.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  song.addAnimation('touched','./images/song/0001.png','./images/song/0001.png','./images/song/0002.png','./images/song/0002.png','./images/song/0003.png','./images/song/0003.png','./images/song/0004.png','./images/song/0004.png','./images/song/0005.png','./images/song/0005.png','./images/song/0006.png','./images/song/0006.png','./images/song/0007.png','./images/song/0007.png','./images/song/0008.png','./images/song/0008.png','./images/song/0009.png','./images/song/0009.png','./images/song/0010.png','./images/song/0010.png','./images/song/0011.png','./images/song/0011.png','./images/song/0012.png','./images/song/0012.png','./images/song/0013.png','./images/song/0013.png','./images/song/0014.png','./images/song/0014.png','./images/song/0015.png','./images/song/0015.png');
  targets.add(song);
  let firework = createSprite(4901,308);
  firework.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  firework.addAnimation('touched','./images/firework/0001.png','./images/firework/0001.png','./images/firework/0002.png','./images/firework/0002.png','./images/firework/0003.png','./images/firework/0003.png','./images/firework/0004.png','./images/firework/0004.png','./images/firework/0005.png','./images/firework/0005.png','./images/firework/0006.png','./images/firework/0006.png','./images/firework/0007.png','./images/firework/0007.png','./images/firework/0008.png','./images/firework/0008.png','./images/firework/0009.png','./images/firework/0009.png','./images/firework/0010.png','./images/firework/0010.png','./images/firework/0011.png','./images/firework/0011.png','./images/firework/0012.png','./images/firework/0012.png','./images/firework/0013.png','./images/firework/0013.png','./images/firework/0014.png','./images/firework/0014.png','./images/firework/0015.png','./images/firework/0015.png','./images/firework/0016.png','./images/firework/0016.png','./images/firework/0017.png','./images/firework/0017.png','./images/firework/0018.png','./images/firework/0018.png','./images/firework/0019.png','./images/firework/0019.png','./images/firework/0020.png','./images/firework/0020.png');
  targets.add(firework);
  let world = createSprite(5241,253);
  world.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  world.addAnimation('touched','./images/world/0001.png','./images/world/0001.png','./images/world/0002.png','./images/world/0002.png','./images/world/0003.png','./images/world/0003.png','./images/world/0004.png','./images/world/0004.png','./images/world/0005.png','./images/world/0005.png','./images/world/0006.png','./images/world/0006.png','./images/world/0007.png','./images/world/0007.png','./images/world/0008.png','./images/world/0008.png','./images/world/0009.png','./images/world/0009.png','./images/world/0010.png','./images/world/0010.png','./images/world/0011.png','./images/world/0011.png','./images/world/0012.png','./images/world/0012.png','./images/world/0013.png','./images/world/0013.png','./images/world/0014.png','./images/world/0014.png','./images/world/0015.png','./images/world/0015.png','./images/world/0016.png','./images/world/0016.png','./images/world/0017.png','./images/world/0017.png','./images/world/0018.png','./images/world/0018.png','./images/world/0019.png','./images/world/0019.png','./images/world/0020.png','./images/world/0020.png');
  targets.add(world);
  let voicemail = createSprite(5443,476);
  voicemail.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  voicemail.addAnimation('touched','./images/voicemail/0001.png','./images/voicemail/0001.png','./images/voicemail/0002.png','./images/voicemail/0002.png','./images/voicemail/0003.png','./images/voicemail/0003.png','./images/voicemail/0004.png','./images/voicemail/0004.png','./images/voicemail/0005.png','./images/voicemail/0005.png','./images/voicemail/0006.png','./images/voicemail/0006.png','./images/voicemail/0007.png','./images/voicemail/0007.png','./images/voicemail/0008.png','./images/voicemail/0008.png','./images/voicemail/0009.png','./images/voicemail/0009.png','./images/voicemail/0010.png','./images/voicemail/0010.png','./images/voicemail/0011.png','./images/voicemail/0011.png','./images/voicemail/0012.png','./images/voicemail/0012.png','./images/voicemail/0013.png','./images/voicemail/0013.png','./images/voicemail/0014.png','./images/voicemail/0014.png','./images/voicemail/0015.png','./images/voicemail/0015.png','./images/voicemail/0016.png','./images/voicemail/0016.png','./images/voicemail/0017.png','./images/voicemail/0017.png','./images/voicemail/0018.png','./images/voicemail/0018.png','./images/voicemail/0019.png','./images/voicemail/0019.png','./images/voicemail/0020.png','./images/voicemail/0020.png');
  targets.add(voicemail);
  let tmachine = createSprite(5701, 308);  tmachine.addAnimation('normal','./images/vT1.png','./images/vT1.png','./images/vT2.png','./images/vT2.png','./images/vT3.png','./images/vT3.png','./images/vT2.png','./images/vT2.png');
  tmachine.addAnimation('touched','./images/machine/0001.png','./images/machine/0001.png','./images/machine/0002.png','./images/machine/0002.png','./images/machine/0003.png','./images/machine/0003.png','./images/machine/0004.png','./images/machine/0004.png','./images/machine/0005.png','./images/machine/0005.png','./images/machine/0006.png','./images/machine/0006.png','./images/machine/0007.png','./images/machine/0007.png','./images/machine/0008.png','./images/machine/0008.png','./images/machine/0009.png','./images/machine/0009.png','./images/machine/0010.png','./images/machine/0010.png','./images/machine/0011.png','./images/machine/0011.png','./images/machine/0012.png','./images/machine/0012.png','./images/machine/0013.png','./images/machine/0013.png','./images/machine/0014.png','./images/machine/0014.png','./images/machine/0015.png','./images/machine/0015.png','./images/machine/0016.png','./images/machine/0016.png','./images/machine/0017.png','./images/machine/0017.png','./images/machine/0018.png','./images/machine/0018.png','./images/machine/0019.png','./images/machine/0019.png','./images/machine/0020.png','./images/machine/0020.png');
  targets.add(tmachine);
  

  //nameList
  nameList = new Group();
  let nl1 = createSprite(6400 + 186, 359);
  nl1.addAnimation('normal', './images/nameList/thanks.png');
  nameList.add(nl1);
  let nl2 = createSprite(6400 + 912, 65);
  nl2.addAnimation('normal', './images/nameList/programming.png');
  nameList.add(nl2);
  let nl3 = createSprite(6400 + 549, 254);
  nl3.addAnimation('normal', './images/nameList/writing.png');
  nameList.add(nl3);
  let nl4 = createSprite(6400 + 659, 479);
  nl4.addAnimation('normal', './images/nameList/collages.png');
  nameList.add(nl4);
  let nl5 = createSprite(6400 + 713, 649);
  nl5.addAnimation('normal', './images/nameList/gamedesign.png');
  nameList.add(nl5);
  let nl6 = createSprite(6400 + 1290, 88);
  nl6.addAnimation('normal', './images/nameList/music.png');
  nameList.add(nl6);
  let nl7 = createSprite(6400 + 1206, 272);
  nl7.addAnimation('normal', './images/nameList/video_gif.png');
  nameList.add(nl7);
  let nl8 = createSprite(6400 + 1056, 428);
  nl8.addAnimation('normal', './images/nameList/audioediting.png');
  nameList.add(nl8);
  let nl9 = createSprite(6400 + 1504, 540);
  nl9.addAnimation('normal', './images/nameList/oDrawing.png');
  nameList.add(nl9);
  let nl10 = createSprite(6400 + 1152, 656);
  nl10.addAnimation('normal', './images/nameList/soundD.png');
  nameList.add(nl10);
  let nl11 = createSprite(6400 + 1819, 88);
  nl11.addAnimation('normal', './images/nameList/characterD.png');
  nameList.add(nl11);
  let nl12 = createSprite(6400 + 1835, 544);
  nl12.addAnimation('normal', './images/nameList/vaSource.png');
  nameList.add(nl12);
  let nl13 = createSprite(6400 + 2410, 358);
  nl13.addAnimation('normal', './images/nameList/credit.png');
  nameList.add(nl13);
  //

  //ending
  timeMachine = createSprite(9640, 360);
  timeMachine.addAnimation('normal', './images/Time-Machine.png');
  //

  //character
  theCharacter = createSprite(200, 720 / 2);
  theCharacter.addAnimation('stillR', './images/character/skull-Rstill1.png', './images/character/skull-Rstill1.png', './images/character/skull-Rstill1.png', './images/character/skull-Rstill2.png', './images/character/skull-Rstill2.png', './images/character/skull-Rstill2.png');
  theCharacter.addAnimation('stillL', './images/character/skull-Lstill1.png', './images/character/skull-Lstill1.png', './images/character/skull-Lstill1.png', './images/character/skull-Lstill2.png', './images/character/skull-Lstill2.png', './images/character/skull-Lstill2.png');
  theCharacter.addAnimation('moveR', './images/character/skull-R1.png', './images/character/skull-R1.png', './images/character/skull-R2.png', './images/character/skull-R2.png', './images/character/skull-R3.png', './images/character/skull-R3.png', './images/character/skull-R4.png', './images/character/skull-R4.png');
  theCharacter.addAnimation('moveL', './images/character/skull-L1.png', './images/character/skull-L1.png', './images/character/skull-L2.png', './images/character/skull-L2.png', './images/character/skull-L3.png', './images/character/skull-L3.png', './images/character/skull-L4.png', './images/character/skull-L4.png');
  theCharacter.limitSpeed(45);
}

function setup() {
  createCanvas(1280, 720);
  for (let i=0;i<targets.length;i++){
    targets[i].setCollider('circle',0,0,30);
    targets[i].addAnimation('void','./images/transp.png');
  }
  timer = millis();
}

function draw() {
  background(20);
  
  if (mouseIsPressed && !bgm.isPlaying()){
    bgm.setVolume(0.8,1.5);
    bgm.loop();
  }
  if (mouseIsPressed && !pressed){
    pressed = true;
  }

  if (theCharacter.velocity.x > 1) {
    theCharacter.changeAnimation('moveR');
  } else if (theCharacter.velocity.x < -1) {
    theCharacter.changeAnimation('moveL');
  } else if (abs(theCharacter.velocity.y) > 1 && theCharacter.getAnimationLabel() == 'stillR') {
    theCharacter.changeAnimation('moveR');
  } else if (abs(theCharacter.velocity.y) > 1 && theCharacter.getAnimationLabel() == 'stillL') {
    theCharacter.changeAnimation('moveL');
  } else if (abs(theCharacter.velocity.x) < 1 && abs(theCharacter.velocity.y) < 1 && theCharacter.getAnimationLabel() == 'moveR') {
    theCharacter.changeAnimation('stillR');
  } else if (abs(theCharacter.velocity.x) < 1 && abs(theCharacter.velocity.y) < 1 && theCharacter.getAnimationLabel() == 'moveL') {
    theCharacter.changeAnimation('stillL');
  }
  
  let currentPieces = undefined;
  for (let i = 0; i < targets.length; i++) {
    let toTest = targets[i];
    if (toTest.overlap(theCharacter)) {
      targets[i].changeAnimation('touched');
      currentPieces = i;
      if ( i == 0 && !sBegin.isPlaying()){
        sBegin.play();
        bgm.setVolume(0,1.5);
      } else if (i == 1 && !sFlood.isPlaying()){
        sFlood.play();
        bgm.setVolume(0,1.5);
      } else if (i == 4 && !sIceberg.isPlaying()){
        sIceberg.play();
        bgm.setVolume(0,1.5);
      } else if (i == 5 && !sReincarnation.isPlaying()){
        sReincarnation.play();
        bgm.setVolume(0,1.5);
      } else if (i == 9 && !sDance.isPlaying()){
        sDance.play();
        bgm.setVolume(0,1.5);
      }else if (i == 12 && !sStar.isPlaying()){
        sStar.play();
        bgm.setVolume(0,1.5);
      } else if (i == 15 && !sSong.isPlaying()){
        sSong.play();
        bgm.setVolume(0,1.5);
      } else if (i == 16 && !sFirework.isPlaying()){
        sFirework.play();
        bgm.setVolume(0,1.5);
      } else if (i == 17 && !sWorld.isPlaying()){
        sWorld.play();
        bgm.setVolume(0,1.5);
      } else if (i == 18 && !sVoicemail.isPlaying()){
        sVoicemail.play();
        bgm.setVolume(0,1.5);
      } else if (i == 19 && !sTmachine.isPlaying()){
        sTmachine.play();
        bgm.setVolume(0,1.5);
      }
      if (!triggerIsPlayed) {
        trigger.play();
        triggerIsPlayed = true;
      }
    } else if (toTest.getAnimationLabel() == 'touched') {
      targets[i].changeAnimation('normal');   
      if ( i == 0 && sBegin.isPlaying()){
        sBegin.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 1 && sFlood.isPlaying()){
        sFlood.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 4 && sIceberg.isPlaying()){
        sIceberg.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 5 && sReincarnation.isPlaying()){
        sReincarnation.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 9 && sDance.isPlaying()){
        sDance.stop();
        bgm.setVolume(0.8,1);
      }else if (i == 12 && sStar.isPlaying()){
        sStar.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 15 && sSong.isPlaying()){
        sSong.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 16 && sFirework.isPlaying()){
        sFirework.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 17 && sWorld.isPlaying()){
        sWorld.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 18 && sVoicemail.isPlaying()){
        sVoicemail.stop();
        bgm.setVolume(0.8,1);
      } else if (i == 19 && sTmachine.isPlaying()){
        sTmachine.stop();
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

  if (theCharacter.position.x < 6000) {
    let trueMouseX = mouseX + (camera.position.x - width / 2);
    if (pressed){
      theCharacter.velocity.x = (trueMouseX - theCharacter.position.x) / 20;
    theCharacter.velocity.y = (mouseY - theCharacter.position.y) / 20;
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
  } else {
    if (camera.position.x - theCharacter.position.x < (width/2)-300) {
      theCharacter.velocity.x = 3;
    }
    if (camera.position.x - theCharacter.position.x < (width/2)-300) {
      camera.position.x += 5;
    } else {
      camera.position.x += 2;
    }
    if (camera.position.x > SCENE_W - width / 2) {
      camera.position.x = SCENE_W - width / 2;
    } else if (camera.position.x < width / 2) {
      camera.position.x = width / 2;
    }
  }

  if (theCharacter.position.x < 50) {
    theCharacter.position.x = 50;
    theCharacter.velocity.x = 0;
  }
  if (theCharacter.position.y < 50) {
    theCharacter.position.y = 50;
    theCharacter.velocity.y = 0;
  }
  if (theCharacter.position.y > SCENE_H - 50) {
    theCharacter.position.y = SCENE_H - 50;
    theCharacter.velocity.y = 0;
  }

  for (let i = 0; i < nameList.length; i++) {
    nameList[i].displace(nameList);
  }
  theCharacter.displace(nameList);
  nameList.collide(timeMachine, function() {
    theCharacter.velocity.x = 0;
  });
  
  if (!pressed && millis() - timer > 5000){
    drawSprite(instruction);
  }
  
  let trueMouseX = mouseX + (camera.position.x - width / 2);
  if (abs(timeMachine.position.x - trueMouseX)<720/2 && abs(timeMachine.position.y - mouseY)<720/2){
    if (mouseIsPressed && ! tryClose){
      window.opener = null;
      window.open('','_self').close();
      tryClose =true;
    }
  }
  
  
  drawSprites(nameList);
  drawSprite(timeMachine);
  drawSprite(theCharacter);
  drawSprites(targets);
  if (tryClose){
    push();
    rectMode(CENTER);
    fill(0);
    rect(SCENE_W-width/2,height/2,width,height);
    pop();
  }
}