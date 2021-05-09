import Background from './runtime/backgroud'
import GameInfo from './runtime/gameinfo'
import Music from './runtime/music'
import GameCard from './gameCard'

const ctx = canvas.getContext('2d')

export default class MainCard {
    constructor() {
        this.aniId = 0
        this.start()
    }
    start() {
        canvas.removeEventListener(
            'touchstart',
            this.touchHandler
        )

        this.bg = new Background(ctx)
        this.gameinfo = new GameInfo()
        this.music = new Music()

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
        this.gameinfo.rendermsg(ctx, 100)
        this.touchHandler = this.touchEventHandler.bind(this)
        canvas.addEventListener('touchstart', this.touchHandler)
    }

    update() {
        this.bg.display(ctx)
        this.gameinfo.rendermsg(ctx, 100)
    }

    // 实现游戏帧循环
    loop() {
        //this.update()
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

        const area = this.gameinfo.btncreateroom

        if (x >= area.startX &&
            x <= area.endX &&
            y >= area.startY &&
            y <= area.endY) new GameCard()
    }

}