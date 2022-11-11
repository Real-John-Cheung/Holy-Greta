/*
using p5.js and p5.play lib by Paolo Pedercini
*/
let audio;
let url = "./utopia";

let remoteBG;
let remoteButton

let breakingNews;
let openTV;
let timer;
let timer2;
let timer3;

let buttonPressed = false;
let audioPlayed = false;
let began = false;

function preload() {
  remoteBG = loadImage('images/remoteBG.png');
  icon = loadImage('holy-greta-logo.png');
  rb1 = loadImage('images/remoteButton1.png');
  bn0 = loadImage('news/breaking-news-00.png');
  bn1 = loadImage('news/breaking-news-01.png');
  bn2 = loadImage('news/breaking-news-02.png');
  bn3 = loadImage('news/breaking-news-03.png');
  tvFrame = loadImage('images/TVframe.png');
  audio = loadSound('Breaking-News.mp3');
}

function setup() {
  createCanvas(1280, 720);
  remoteButton = createSprite(width / 2, height / 2);
  remoteButton.addAnimation('normal', rb1);
  remoteButton.addAnimation('pressed', 'images/remoteButton2.png');

  breakingNews = createSprite(width / 2, height / 2);
  breakingNews.addAnimation('normal', bn0, bn1);
  breakingNews.addAnimation('loop', bn2, bn2, bn2, bn2, bn3, bn3, bn3, bn3);

  openTV = createSprite(width / 2, height / 2);
  openTV.addAnimation('normal', '/images/openTV033.png', 'images/openTV033.png', 'images/openTV066.png', 'images/openTV066.png', 'images/openTV100.png', 'images/openTV100.png', 'images/openTV066.png', 'images/openTV066.png');

  background(204, 149, 230);
  timer2 = millis();
  timer3 = millis();
}

function draw() {
  background(204, 149, 230);
  //image(remoteBG,0,0);


  if (!began) {
    push();
    imageMode(CENTER);
    image(icon, width / 2, height / 2);
    pop();
    if (millis() - timer3 > 3000) {
      began = true;
    }
  } else {
    if (!buttonPressed) {
      if (millis() - timer2 > 10000) {
        drawSprite(openTV);
      }
      if (mouseIsPressed && remoteButton.overlapPixel(mouseX, mouseY)) {
        remoteButton.changeAnimation('pressed');
      } else if (remoteButton.getAnimationLabel() == 'pressed' && !mouseIsPressed) {
        //remoteButton.changeAnimation('normal');
        buttonPressed = true;
        timer = millis();
        audio.play();
        audioPlayed = true;
      }
      image(remoteBG, 0, 0);
      drawSprite(remoteButton);
    } else if (buttonPressed) {
      if (millis() - timer > 2400) {
        breakingNews.changeAnimation('loop');
      }
      if (millis() - timer > 63000) {
        window.location.assign(url);
        timer = millis();
      }
      drawSprite(breakingNews);
      image(tvFrame, 0, 0);
    }
  }
}