import Sprite from '../base/sprite'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const GAMEBG_IMG_SRC = 'doudizhu/images/table_bg_1.jpg'
const GAMEBG_WIDTH = 1136
const GAMEBG_HEIGHT = 768

export default class GameBackground extends Sprite{
  constructor(ctx){
    super(GAMEBG_IMG_SRC,GAMEBG_WIDTH,GAMEBG_HEIGHT)
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