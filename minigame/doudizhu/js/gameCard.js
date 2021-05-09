import Music from './runtime/music'
import logic from './base/logic'
import GameBackground from './runtime/gamebackground'
import GameSence from './runtime/gamesence'
import CardSence from './runtime/cardsence'
const ctx = canvas.getContext('2d')
const logi = new logic()
export {
    logi
}

export default class GameCard {
    constructor() {
        this.aniId = 0
        this.start()
    }
    start() {
        logi.init()
        logi.fapai()
        canvas.removeEventListener(
            'touchstart',
            this.touchHandler
        )

        this.bg = new GameBackground(ctx)
        this.gamesence = new GameSence()
        this.gamesence.btndef()
        this.cardsence = new CardSence()
        //this.music = new Music()
        console.log(logi.player1)
        this.bindLoop = this.loop.bind(this)
        this.hasEventBind = false

        window.cancelAnimationFrame(this.aniId)

        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            canvas
        )
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.bg.display(ctx)
        this.gamesence.drawmsg(ctx)
        //this.gamesence.btnready(ctx)
        this.gamesence.drawqiang(ctx)
        this.gamesence.drawbtn(ctx)
        this.cardsence.update_dipai(ctx)
        this.cardsence.update_player2(ctx)
        this.cardsence.update_player3(ctx)
        this.cardsence.update_player1(ctx)
        this.touchHandler = this.touchEventHandler.bind(this)
        canvas.addEventListener('touchstart', this.touchHandler)
    }

    // 实现游戏帧循环
    loop() {
        this.render()
        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            canvas
        )
    }

    // 触摸事件处理逻辑
    touchEventHandler(e) {
        e.preventDefault()

        const x = e.touches[0].clientX
        const y = e.touches[0].clientY

        const area = this.gamesence.btn
        for (let i = 0; i < area.length; i++) {
            if (x >= area[i].startX && x <= area[i].endX && y >= area[i].startY && y <= area[i].endY) {
                if (logi.player1.dataStore[i].status == 0) {
                    logi.player1.dataStore[i].status = 1
                    break
                } else {
                    logi.player1.dataStore[i].status = 0
                    break
                }
            }
        }
    }
}