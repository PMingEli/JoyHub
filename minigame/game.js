import './dafeiji/js/libs/weapp-adapter'
import './dafeiji/js/libs/symbol'

import Main from './dafeiji/js/main'
//new Main()
import logic from './doudizhu/js/base/logic'

var logi = new logic()
logi.init()
logi.fapai()
console.log(logi.player1)
console.log(logi.player2)
console.log(logi.player3)
console.log(logi.allCards)
logi.fapaiend()
console.log(logi.player1)
console.log(logi.player2)
console.log(logi.player3)
console.log(logi.allCards)
logi.moni(1,16)
console.log(logi.curcards)
console.log(logi.selectcards)
console.log(logi.canPlayCardsJudge())