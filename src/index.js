import "./styles.css";
import {character} from './logic/character.js';
import { player } from "./logic/player";
import { getTextOfJSDocComment } from "typescript";

let canvas;
let ctx;
const FPS = 50;

let character1;
let character2;
let character3;
let player1;
let imgCharacter;


const init = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  

  imgCharacter = new Image();
  imgCharacter.src = require('./img/monster.png');

  createCharacters();
  listeners();

  setInterval(() => {
    main();
  }, 1000/FPS)
}

const createCharacters = () => {
  character1 = new character(ctx, 10, 100);
  character2 = new character(ctx, 20, 200);
  character3 = new character(ctx, 30, 300);
  player1 = new player(ctx, 30, 300, imgCharacter);

}

const cleanCanvas = () => {
  canvas.width = 800;
  canvas.height = 800;
}

const listeners = () =>  {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      player1.up();
    }
    if (e.key === 'ArrowDown') {
      player1.down();
    }
    if (e.key === 'ArrowLeft') {
      player1.left();
    }
    if (e.key === 'ArrowRight') {
      player1.right();
    }
  })
}

const main = () => {
  cleanCanvas();
  character1.print();
  character2.print();
  character3.print();
  character1.move(2);
  character2.move(5);
  character3.move(8);
  player1.print();
}

init()