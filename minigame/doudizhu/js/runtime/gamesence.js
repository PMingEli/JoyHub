import gamelogic from '../mainCard'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const icon1 = new Image()
icon1.src = 'doudizhu/images/p_head_man.png'
const icon2 = new Image()
icon2.src = 'doudizhu/images/p_head_woman.jpg'
const icon3 = new Image()
icon3.src = 'doudizhu/images/p_head_woman.png'

const clock = new Image()
clock.src = 'doudizhu/images/clock.png'

const card = new Image()
card.src = 'doudizhu/images/card.png'

export default class GameSence {
  drawmsg(ctx){
    ctx.fillStyle = '#ffffff'
    ctx.font = '12px Arial'

    ctx.fillText(
      "房间号：",
      0.016*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "2333",
      0.08*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "底：",
      0.14*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "1",
      0.17*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "倍数：",
      0.2*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "1",
      0.25*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "玩家3",
      0.055*screenWidth,
      0.24*screenHeight
    )

    ctx.fillText(
      "玩家2",
      0.89*screenWidth,
      0.24*screenHeight
    )

    ctx.fillText(
      "玩家1",
      0.055*screenWidth,
      0.73*screenHeight
    )

    ctx.drawImage(
      icon3,
      0,0,184,188,0.05*screenWidth,0.28*screenHeight,0.06*screenWidth,0.06*screenWidth
    )

    ctx.drawImage(
      icon2,
      0,0,184,188,0.88*screenWidth,0.28*screenHeight,0.06*screenWidth,0.06*screenWidth
    )

    ctx.drawImage(
      icon1,
      0,0,184,188,0.05*screenWidth,0.76*screenHeight,0.06*screenWidth,0.06*screenWidth
    )
  }

  drawqiang(ctx){
    if(gamelogic.token==1){
      ctx.drawImage(
        clock,0,0,84,93,0.05*screenWidth,0.9*screenHeight,0.04*screenWidth,0.04*screenHeight
      )
      ctx.fillText(
        gamelogic.countdowm,
        0.06*screenWidth,0.92*screenHeight
      )
    }
    else if(gamelogic.token==2){
      ctx.drawImage(
        clock,0,0,84,93,0.89*screenWidth,0.32*screenHeight,0.04*screenWidth,0.04*screenHeight
      )
      ctx.fillText(
        gamelogic.countdowm,
        0.9*screenWidth,0.36*screenHeight
      )
    }
    else if(gamelogic.token==3){
      ctx.drawImage(
        clock,0,0,84,93,0.05*screenWidth,0.32*screenHeight,0.04*screenWidth,0.04*screenHeight
      )
      ctx.fillText(
        gamelogic.countdowm,
        0.06*screenWidth,0.36*screenHeight
      )
    }
  }
  
}
