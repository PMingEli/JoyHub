import gamelogic from '../mainCard'
import {logi} from '../gameCard'
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

const qiang = new Image()
qiang.src = 'doudizhu/images/qiangzhuang.png'

const buqiang = new Image()
buqiang.src = 'doudizhu/images/buqiangzhuang.png'

const chupai = new Image()
chupai.src = 'doudizhu/images/btn_chupai.png'

const buchupai = new Image()
buchupai.src = 'doudizhu/images/btn_bujiao.png'

const card = new Image()
card.src = 'doudizhu/images/card.png'

const ready = new Image()
ready.src = 'doudizhu/images/btnready.png'

const yizhunbei = new Image()
yizhunbei.src = 'doudizhu/images/pm_ready.png'

export default class GameSence {
  constructor(){
    this.btn = []
  }
  btnready(ctx){
    ctx.drawImage(
      ready,0,0,166,76,screenWidth/2-30,screenHeight*0.6,60,28
    )
    ctx.drawImage(
      yizhunbei,0,0,126,43,0.13*screenWidth,0.28*screenHeight,0.12*screenWidth,0.06*screenWidth
    )
    ctx.drawImage(
      yizhunbei,0,0,126,43,0.74*screenWidth,0.28*screenHeight,0.12*screenWidth,0.06*screenWidth
    )
  }
  btndef(){
    for(let j=0;j<logi.player1.size();j++){
      if(j==logi.player1.size()-1){
        this.btn[j] = {
          startX: 0.17*screenWidth+24*j,
          startY: 0.73*screenHeight,
          endX: 0.17*screenWidth+24*j+48,
          endY: 0.73*screenHeight+64
        }
      }
      else{
        this.btn[j] = {
          startX: 0.17*screenWidth+24*j,
          startY: 0.73*screenHeight,
          endX: 0.17*screenWidth+24*j+24,
          endY: 0.73*screenHeight+64
        }
      }
    }
  }
  drawbtn(ctx){
    ctx.fillStyle = '#000000'
    ctx.font = '20px Arial'
    if(logi.dizhu==0){
      ctx.drawImage(
        buqiang,0,0,118,68,screenWidth/2-100,0.6*screenHeight,59,39
      )
      ctx.drawImage(
        clock,0,0,84,93,screenWidth/2-28,0.55*screenHeight,56,62
      )
      ctx.fillText(
        logi.countdown,screenWidth/2-10,0.66*screenHeight
      )
      ctx.drawImage(
        qiang,0,0,118,68,screenWidth/2+41,0.6*screenHeight,59,39
      )
    }
    else{
      ctx.drawImage(
        buchupai,0,0,118,68,screenWidth/2-100,0.6*screenHeight,59,39
      )
      ctx.drawImage(
        clock,0,0,84,93,screenWidth/2-28,0.55*screenHeight,56,62
      )
      ctx.fillText(
        logi.countdown,screenWidth/2-10,0.66*screenHeight
      )
      ctx.drawImage(
        chupai,0,0,118,68,screenWidth/2+41,0.6*screenHeight,59,39
      )
    }
  }
  drawmsg(ctx){
    ctx.fillStyle = '#ffffff'
    ctx.font = '12px Arial'

    ctx.fillText(
      "房间号：",
      0.016*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      logi.roomnumber,
      0.08*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "底：",
      0.14*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      logi.base,
      0.17*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      "倍数：",
      0.2*screenWidth,
      0.047*screenHeight
    )

    ctx.fillText(
      logi.times,
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
