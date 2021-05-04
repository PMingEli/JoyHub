import Cards from '../base/cards'
import {curcards as curCards} from '../base/logic'

export default class systemplay {
    constructor() {
        this.Data = new Cards();
    }
    systemplay() {
        let map = {}
        let x = 0
        let y = 0
        for (let i = 0; i < curCards.dataStore.length; i++) {
            if (!map[curCards.dataStore[i].weight])
                map[curCards.dataStore[i].weight] = 1
            else
                map[curCards.dataStore[i].weight]++
            if (map[curCards.dataStore[i].weight] == 3)
                x = curCards.dataStore[i].weight
            else if (map[curCards.dataStore[i].weight] == 4) {
                if (x > 0)
                    x = 0
                y = curCards.dataStore[i].weight
            }
        }

        let type = curCards.cardsTypeJudge()
        let len = curCards.dataStore.length
        if (len == 0) {
            this.Data[0].isChoosed = true
            return 0
        }

        if (type == '火箭')
            return 1

        if (type == '单牌') {
            for (let i = 0; i < Data.length; i++) {
                if (this.Data[i].weight > curCards.dataStore[0].weight) {
                    this.Data[i].isChoosed = true
                    return 0
                }
            }
        } else if (type == '对牌') {
            for (let i = 0; i < Data.length - 1; i++) {
                if (this.Data[i].weight == this.Data[i + 1].weight && this.Data[i].weight > curCards.dataStore[0].weight) {
                    this.Data[i].isChoosed = true
                    this.Data[i + 1].isChoosed = true
                    return 0
                }
            }
        } else if (type == '三张牌' || type == '三带一张牌' || type == '三带一对牌') {
            let cnt = 1
            for (let i = 0; i < Data.length - 1; i++) {
                if (this.Data[i].weight == this.Data[i + 1].weight)
                    cnt++
                else
                    cnt = 1
                if (cnt == 3 && this.Data[i].weight > x) {
                    this.Data[i + 1].isChoosed = true
                    this.Data[i].isChoosed = true
                    this.Data[i - 1].isChoosed = true
                    if (type == '三张牌')
                        return 0
                    else if (type == '三带一张牌') {
                        for (let j = 0; j < Data.length; j++) {
                            if (!this.Data[j].isChoosed) {
                                this.Data[j].isChoosed = true
                                return 0
                            }
                        }
                    } else if (type == '三带一对牌') {
                        for (let j = 0; j < Data.length - 1; j++) {
                            if (this.Data[j].weight == this.Data[j + 1].weight && !this.Data[j].isChoosed && !this.Data[j + 1].isChoosed) {
                                this.Data[j].isChoosed = true
                                this.Data[j + 1].isChoosed = true
                                return 0
                            }
                        }
                    }
                    for (let k = 0; k < Data.length; k++) {
                        if (this.Data[k].isChoosed)
                            this.Data[k].isChoosed = false
                    }
                }
            }
        } else if (type == '炸弹' || type == '四带二') {
            let cnt = 1
            for (let i = 0; i < Data.length - 1; i++) {
                if (this.Data[i].weight == this.Data[i + 1].weight)
                    cnt++
                else
                    cnt = 1
                if (cnt == 4 && this.Data[i].weight > y) {
                    this.Data[i + 1].isChoosed = true
                    this.Data[i].isChoosed = true
                    this.Data[i - 1].isChoosed = true
                    this.Data[i - 2].isChoosed = true
                    if (type == '炸弹')
                        return 0
                    else {
                        let num = null
                        if (len == 6) {
                            for (let j = 0; j < Data.length; j++) {
                                if (!this.Data[j].isChoosed) {
                                    if (!num) {
                                        this.Data[j].isChoosed = true
                                        num = this.Data[j].weight
                                    } else {
                                        if (num != this.Data[j].weight) {
                                            this.Data[j].isChoosed = true
                                            return 0
                                        }
                                    }
                                }
                            }
                        } else if (len == 8) {
                            let num = null
                            for (let j = 0; j < Data.length - 1; j++) {
                                if (this.Data[j].weight == this.Data[j + 1].weight &&
                                    !this.Data[j].isChoosed && !this.Data[j + 1].isChoosed) {
                                    if (!num) {
                                        this.Data[j].isChoosed = true
                                        this.Data[j + 1].isChoosed = true
                                        num = this.Data[j].weight
                                    } else {
                                        if (num != this.Data[j].weight) {
                                            this.Data[j].isChoosed = true
                                            this.Data[j + 1].isChoosed = true
                                            return 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    for (let k = 0; k < Data.length; k++) {
                        if (this.Data[k].isChoosed)
                            this.Data[k].isChoosed = false
                    }
                }
            }
        } else if (type == '单顺') {
            let cnt = 0
            let mark = null
            let arr = {}
            for (let i = 0; i < Data.length; i++) {
                if (this.Data[i].weight > 12)
                    break
                if (mark) {
                    if (this.Data[i].weight - mark == 1) {
                        mark = this.Data[i].weight
                        arr[i] = true
                        cnt++
                        if (cnt == len) {
                            for (let j = 0; j < Data.length; j++) {
                                if (arr[j])
                                    this.Data[j].isChoosed = true
                            }
                            return 0
                        }
                    } else if (this.Data[i].weight - mark > 1) {
                        cnt = 1
                        mark = this.Data[i].weight
                        arr = {}
                        arr[i] = true
                    }
                } else {
                    if (this.Data[i].weight > curCards.dataStore[0].weight) {
                        mark = this.Data[i].weight
                        arr[i] = true
                        cnt++
                    }
                }
            }
        } else if (type == '双顺') {
            let cnt = 0
            let cur = null
            for (let i = 0; i < Data.length - 1; i++) {
                if (this.Data[i].weight > 12)
                    break
                if (this.Data[i].weight == this.Data[i + 1].weight && this.Data[i].weight > curCards.dataStore[0].weight) {
                    if (!cur) {
                        cnt++
                        cur = this.Data[i].weight
                        this.Data[i].isChoosed = true
                        this.Data[i + 1].isChoosed = true
                    } else {
                        if (this.Data[i].weight - cur > 1) {
                            i--
                            for (let j = 0; j < Data.length; j++) {
                                if (this.Data[j].isChoosed)
                                    this.Data[j].isChoosed = false
                            }
                            cur = null
                            cnt = 0
                        } else if (this.Data[i].weight - cur == 1) {
                            cur = this.Data[i].weight
                            this.Data[i].isChoosed = true
                            this.Data[i + 1].isChoosed = true
                            cnt++
                            if (cnt == len / 2) {
                                return 0
                            }
                        } else {}
                    }
                }
            }
            for (let i = 0; i < Data.length; i++) {
                if (this.Data[i].isChoosed)
                    this.Data[i].isChoosed = false
            }
        } else if (type == '三顺') {
            let cnt = 0
            let cur = null
            for (let i = 0; i < Data.length - 2; i++) {
                if (this.Data[i].weight > 12)
                    break
                if (this.Data[i].weight == this.Data[i + 1].weight &&
                    this.Data[i].weight == this.Data[i + 2].weight && this.Data[i].weight > curCards.dataStore[0].weight) {
                    if (!cur) {
                        cnt++
                        cur = this.Data[i].weight
                        this.Data[i].isChoosed = true
                        this.Data[i + 1].isChoosed = true
                        this.Data[i + 2].isChoosed = true
                    } else {
                        if (this.Data[i].weight - cur > 1) {
                            i--
                            for (let j = 0; j < Data.length; j++) {
                                if (this.Data[j].isChoosed)
                                    this.Data[j].isChoosed = false
                            }
                            cur = null
                            cnt = 0
                        } else if (this.Data[i].weight - cur == 1) {
                            cur = this.Data[i].weight
                            this.Data[i].isChoosed = true
                            this.Data[i + 1].isChoosed = true
                            this.Data[i + 2].isChoosed = true
                            cnt++
                            if (cnt == len / 3) {
                                return 0
                            }
                        } else {}
                    }
                }
            }
            for (let i = 0; i < Data.length; i++) {
                if (this.Data[i].isChoosed)
                    this.Data[i].isChoosed = false
            }
        }
        //没有更大的匹配牌型时，如果有大小王，则打出火箭
        if (this.Data[Data.length - 1].weight >= 14 && this.Data[Data.length - 2].weight >= 14) {
            this.Data[Data.length - 1].isChoosed = true
            this.Data[Data.length - 2].isChoosed = true
            return 0
        }

        return 1
    }
}