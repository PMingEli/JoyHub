const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const icon = new Image()
icon.src = 'doudizhu/images/male_landlord_left.png'

const yuanbao = new Image()
yuanbao.src = 'doudizhu/images/yuanbaoIcon.png'


export default class GameInfo {

  rendermsg(ctx,score){
    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'

    ctx.drawImage(
      icon,
      0,0,138,138,10,0,50,50
    )
    
    ctx.fillText(
      "Ming",
      70,35
    )


    ctx.drawImage(
      yuanbao,
      0,0,62,42,130,20,31,21
    )

    ctx.fillText(
      score,
      170,35
    )
    this.btnmyself = {
      startX: 0.03*screenWidth,
      startY: 0,
      endX: 0.08*screenWidth,
      endY: 0.12*screenHeight
    }

    this.btnmsg = {
      startX: 0.76*screenWidth,
      startY: 0,
      endX: 0.8*screenWidth,
      endY: 0.14*screenHeight
    }

    this.btnhelp = {
      startX: 0.84*screenWidth,
      startY: 0,
      endX: 0.88*screenWidth,
      endY: 0.14*screenHeight
    }

    this.btnsetting = {
      startX: 0.92*screenWidth,
      startY: 0,
      endX: 0.96*screenWidth,
      endY: 0.14*screenHeight
    }

    this.btnjoinroom = {
      startX: 0.24*screenWidth,
      startY: 0.57*screenHeight,
      endX: 0.55*screenWidth,
      endY: 0.78*screenHeight
    }

    this.btncreateroom = {
      startX: 0.65*screenWidth,
      startY: 0.57*screenHeight,
      endX: 0.96*screenWidth,
      endY: 0.78*screenHeight
    }

    this.btnrecord = {
      startX: 0.2*screenWidth,
      startY: 0.82*screenHeight,
      endX: 0.28*screenWidth,
      endY: 0.98*screenHeight
    }

    this.btnshare = {
      startX: 0.45*screenWidth,
      startY: 0.82*screenHeight,
      endX: 0.53*screenWidth,
      endY: 0.98*screenHeight
    }

    this.btnfeedback = {
      startX: 0.62*screenWidth,
      startY: 0.82*screenHeight,
      endX: 0.7*screenWidth,
      endY: 0.98*screenHeight
    }
  }
}
