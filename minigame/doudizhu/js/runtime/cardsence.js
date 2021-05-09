const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const width = 118
const heigth = 161
import {logi} from '../gameCard'

const card = new Image()
card.src = 'doudizhu/images/card.png'

export default class CardSence{
  update_dipai(ctx){
    if(logi.allCards.size()){
      for(let i=0;i<logi.allCards.size();i++){
        ctx.drawImage(
          card,473,1,117,161,screenWidth/2-18-46+46*i,screenHeight/15,36,48
        )
      }
    }
  }
  update_player3(ctx){
    for(let i=0;i<logi.player3.size();i++){
      ctx.drawImage(
        card,473,1,117,161,0.14*screenWidth,0.15*screenHeight+i*8,36,48
      )
    }
  }

  update_player2(ctx){
    for(let i=0;i<logi.player3.size();i++){
      ctx.drawImage(
        card,473,1,117,161,0.89*screenWidth-64,0.15*screenHeight+i*8,36,48
      )
    }
  }
  update_player1(ctx){
    let i = 0
    for(let j=0;j<logi.player1.size();j++){
      
      
      let c = logi.player1.dataStore[i]
      if(c.type == "Diamond"&&c.number=="9"&&c.status==0){
        ctx.drawImage(
          card,1,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="8"&&c.status==0){
        ctx.drawImage(
          card,1+width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="7"&&c.status==0){
        ctx.drawImage(
          card,1+2*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="6"&&c.status==0){
        ctx.drawImage(
          card,1+3*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Black"&&c.number=="Joker"&&c.status==0){
        ctx.drawImage(
          card,1+5*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Red"&&c.number=="Joker"&&c.status==0){
        ctx.drawImage(
          card,1+6*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="K"&&c.status==0){
        ctx.drawImage(
          card,1+7*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="Q"&&c.status==0){
        ctx.drawImage(
          card,1+8*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="J"&&c.status==0){
        ctx.drawImage(
          card,1+9*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="5"&&c.status==0){
        ctx.drawImage(
          card,1+10*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="10"&&c.status==0){
        ctx.drawImage(
          card,1+11*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="9"&&c.status==0){
        ctx.drawImage(
          card,1+12*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="8"&&c.status==0){
        ctx.drawImage(
          card,1+0*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="7"&&c.status==0){
        ctx.drawImage(
          card,1+1*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="6"&&c.status==0){
        ctx.drawImage(
          card,1+2*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="5"&&c.status==0){
        ctx.drawImage(
          card,1+3*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="4"&&c.status==0){
        ctx.drawImage(
          card,1+4*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="3"&&c.status==0){
        ctx.drawImage(
          card,1+5*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="2"&&c.status==0){
        ctx.drawImage(
          card,1+6*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="A"&&c.status==0){
        ctx.drawImage(
          card,1+7*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
    
      else if(c.type == "Diamond"&&c.number=="4"&&c.status==0){
        ctx.drawImage(
          card,1+8*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="K"&&c.status==0){
        ctx.drawImage(
          card,1+9*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="Q"&&c.status==0){
        ctx.drawImage(
          card,1+10*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="J"&&c.status==0){
        ctx.drawImage(
          card,1+11*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="10"&&c.status==0){
        ctx.drawImage(
          card,1+12*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }


      else if(c.type == "Heart"&&c.number=="9"&&c.status==0){
        ctx.drawImage(
          card,1+0*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="8"&&c.status==0){
        ctx.drawImage(
          card,1+1*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="7"&&c.status==0){
        ctx.drawImage(
          card,1+2*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="6"&&c.status==0){
        ctx.drawImage(
          card,1+3*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="5"&&c.status==0){
        ctx.drawImage(
          card,1+4*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="4"&&c.status==0){
        ctx.drawImage(
          card,1+5*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="3"&&c.status==0){
        ctx.drawImage(
          card,1+6*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="3"&&c.status==0){
        ctx.drawImage(
          card,1+7*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="2"&&c.status==0){
        ctx.drawImage(
          card,1+8*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }

      else if(c.type == "Heart"&&c.number=="A"&&c.status==0){
        ctx.drawImage(
          card,1+9*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="K"&&c.status==0){
        ctx.drawImage(
          card,1+10*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="Q"&&c.status==0){
        ctx.drawImage(
          card,1+11*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="J"&&c.status==0){
        ctx.drawImage(
          card,1+12*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }

      else if(c.type == "Club"&&c.number=="10"&&c.status==0){
        ctx.drawImage(
          card,1+0*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="9"&&c.status==0){
        ctx.drawImage(
          card,1+1*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="8"&&c.status==0){
        ctx.drawImage(
          card,1+2*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="7"&&c.status==0){
        ctx.drawImage(
          card,1+3*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="2"&&c.status==0){
        ctx.drawImage(
          card,1+4*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="6"&&c.status==0){
        ctx.drawImage(
          card,1+5*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="5"&&c.status==0){
        ctx.drawImage(
          card,1+6*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="4"&&c.status==0){
        ctx.drawImage(
          card,1+7*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="3"&&c.status==0){
        ctx.drawImage(
          card,1+8*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }

      else if(c.type == "Club"&&c.number=="2"&&c.status==0){
        ctx.drawImage(
          card,1+9*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="A"&&c.status==0){
        ctx.drawImage(
          card,1+10*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="K"&&c.status==0){
        ctx.drawImage(
          card,1+11*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="Q"&&c.status==0){
        ctx.drawImage(
          card,1+12*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="J"&&c.status==0){
        ctx.drawImage(
          card,1+0*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="10"&&c.status==0){
        ctx.drawImage(
          card,1+1*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="A"&&c.status==0){
        ctx.drawImage(
          card,1+2*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="9"&&c.status==1){
        ctx.drawImage(
          card,1,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="8"&&c.status==1){
        ctx.drawImage(
          card,1+width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="7"&&c.status==1){
        ctx.drawImage(
          card,1+2*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="6"&&c.status==1){
        ctx.drawImage(
          card,1+3*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Black"&&c.number=="Joker"&&c.status==1){
        ctx.drawImage(
          card,1+5*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Red"&&c.number=="Joker"&&c.status==1){
        ctx.drawImage(
          card,1+6*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="K"&&c.status==1){
        ctx.drawImage(
          card,1+7*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="Q"&&c.status==1){
        ctx.drawImage(
          card,1+8*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="J"&&c.status==1){
        ctx.drawImage(
          card,1+9*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="5"&&c.status==1){
        ctx.drawImage(
          card,1+10*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="10"&&c.status==1){
        ctx.drawImage(
          card,1+11*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="9"&&c.status==1){
        ctx.drawImage(
          card,1+12*width,1,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="8"&&c.status==1){
        ctx.drawImage(
          card,1+0*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="7"&&c.status==1){
        ctx.drawImage(
          card,1+1*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="6"&&c.status==1){
        ctx.drawImage(
          card,1+2*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="5"&&c.status==1){
        ctx.drawImage(
          card,1+3*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="4"&&c.status==1){
        ctx.drawImage(
          card,1+4*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="3"&&c.status==1){
        ctx.drawImage(
          card,1+5*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="2"&&c.status==1){
        ctx.drawImage(
          card,1+6*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Spade"&&c.number=="A"&&c.status==1){
        ctx.drawImage(
          card,1+7*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
    
      else if(c.type == "Diamond"&&c.number=="4"&&c.status==1){
        ctx.drawImage(
          card,1+8*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="K"&&c.status==1){
        ctx.drawImage(
          card,1+9*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="Q"&&c.status==1){
        ctx.drawImage(
          card,1+10*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="J"&&c.status==1){
        ctx.drawImage(
          card,1+11*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="10"&&c.status==1){
        ctx.drawImage(
          card,1+12*width,1+1*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
    
    
      else if(c.type == "Heart"&&c.number=="9"&&c.status==1){
        ctx.drawImage(
          card,1+0*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="8"&&c.status==1){
        ctx.drawImage(
          card,1+1*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="7"&&c.status==1){
        ctx.drawImage(
          card,1+2*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="6"&&c.status==1){
        ctx.drawImage(
          card,1+3*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="5"&&c.status==1){
        ctx.drawImage(
          card,1+4*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="4"&&c.status==1){
        ctx.drawImage(
          card,1+5*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="3"&&c.status==1){
        ctx.drawImage(
          card,1+6*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="3"&&c.status==1){
        ctx.drawImage(
          card,1+7*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Heart"&&c.number=="2"&&c.status==1){
        ctx.drawImage(
          card,1+8*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
    
      else if(c.type == "Heart"&&c.number=="A"&&c.status==1){
        ctx.drawImage(
          card,1+9*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="K"&&c.status==1){
        ctx.drawImage(
          card,1+10*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="Q"&&c.status==1){
        ctx.drawImage(
          card,1+11*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="J"&&c.status==1){
        ctx.drawImage(
          card,1+12*width,1+2*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
    
      else if(c.type == "Club"&&c.number=="10"&&c.status==1){
        ctx.drawImage(
          card,1+0*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="9"&&c.status==1){
        ctx.drawImage(
          card,1+1*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="8"&&c.status==1){
        ctx.drawImage(
          card,1+2*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="7"&&c.status==1){
        ctx.drawImage(
          card,1+3*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="2"&&c.status==1){
        ctx.drawImage(
          card,1+4*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="6"&&c.status==1){
        ctx.drawImage(
          card,1+5*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="5"&&c.status==1){
        ctx.drawImage(
          card,1+6*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="4"&&c.status==1){
        ctx.drawImage(
          card,1+7*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="3"&&c.status==1){
        ctx.drawImage(
          card,1+8*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
    
      else if(c.type == "Club"&&c.number=="2"&&c.status==1){
        ctx.drawImage(
          card,1+9*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Club"&&c.number=="A"&&c.status==1){
        ctx.drawImage(
          card,1+10*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="K"&&c.status==1){
        ctx.drawImage(
          card,1+11*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="Q"&&c.status==1){
        ctx.drawImage(
          card,1+12*width,1+3*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="J"&&c.status==1){
        ctx.drawImage(
          card,1+0*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="10"&&c.status==1){
        ctx.drawImage(
          card,1+1*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else if(c.type == "Diamond"&&c.number=="A"&&c.status==1){
        ctx.drawImage(
          card,1+2*width,1+4*heigth,width-1,heigth-1,0.17*screenWidth+24*i,0.73*screenHeight-15,48,64
        )
        i++
      }
      else{
        ctx.drawImage(
          card,473,1,117,161,0.17*screenWidth+24*i,0.73*screenHeight,48,64
        )
        i++
      }
    }
  }
}
