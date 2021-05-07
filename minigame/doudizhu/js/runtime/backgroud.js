import Sprite from '../base/sprite'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC = 'doudizhu/images/main.png'
const BG_WIDTH = 2390
const BG_HEIGHT = 1349

const GAMEBG_IMG_SRC = 'doudizhu/images/table_bg_1.jpg'
const GAMEBG_WIDTH = 1136
const GAMEBG_HEIGHT = 768

export default class Background extends Sprite{
  constructor(ctx){
    super(BG_IMG_SRC,BG_WIDTH,BG_HEIGHT)
    this.display(ctx)
  }

  display(ctx){
    //背景
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      0,
      screenWidth,
      screenHeight
    )
  }
}