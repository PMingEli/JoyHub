import Music from './runtime/music'
import logic from './base/logic'
import GameBackground from './runtime/gamebackground'
import GameSence from './runtime/gamesence'

const ctx = canvas.getContext('2d')
export const gamelogic = new logic()

export default class GameCard{
  constructor() {
    this.aniId = 0
    this.start()
  }
  start() {
    canvas.removeEventListener(
        'touchstart',
        this.touchHandler
    )

    this.bg = new GameBackground(ctx)
    this.gamesence = new GameSence()
    //this.music = new Music()

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
    this.gamesence.drawqiang(ctx)
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

    //const area = this.gameinfo.btncreateroom

    if (x >= area.startX &&
        x <= area.endX &&
        y >= area.startY &&
        y <= area.endY) this.game()
}
}