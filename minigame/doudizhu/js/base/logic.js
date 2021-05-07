import card from './card'
import Cards from './cards'
import {
    list_type,
    list_number
} from './card'

export default class logic {
    constructor() {
        this.dizhu = Math.floor(Math.random() * 3);
        this.allCards = new Cards()
        this.player1 = new Cards()
        this.player2 = new Cards()
        this.player3 = new Cards()
        this.curcards = new Cards()
        this.selectcards = new Cards()
        this.roomnumber = 2333
        this.base = 1;
        this.times = 1;
        this.token = 1;
        this.countdown = 30;
    }

    init = function () {
        let weight = 1;
        //添加52张普通牌
        for (let i = 0; i < list_number.length; i++) {
            for (let j = 0; j < list_type.length; j++) {
                let c = new card(list_type[j], list_number[i], weight);
                this.allCards.add(c);
            }
            weight++;
        }

        //添加大小王
        let c1 = new card("Black", "Joker", weight);
        let c2 = new card("Red", "Joker", weight + 1);
        this.allCards.add(c1);
        this.allCards.add(c2);

        for (let i = 0; i < this.allCards.size(); i++) {
            console.log(this.allCards.dataStore[i]);
        }
        console.log(this.allCards.size());
    }

    fapai = function () {
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 17; i++) {
                let number = Math.floor(Math.random() * this.allCards.size());
                let c = this.allCards.remove(number);
                if (j == 0) this.player1.add(c);
                if (j == 1) this.player2.add(c);
                if (j == 2) this.player3.add(c);
            }
        }
        this.player1.sort();
        this.player2.sort();
        this.player3.sort();
    }

    moni = function (num1, num2) {
        this.curcards.add(this.player1.remove(num1))
        this.selectcards.add(this.player2.remove(num2))
    }

    fapaiend = function () {
        if (this.dizhu == 0) {
            for (let i = 0; i < 3; i++) {
                this.player1.add(this.allCards.remove(0))
            }
            this.player1.sort();
        }
        else if (this.dizhu == 1) {
            for (let i = 0; i < 3; i++) {
                this.player2.add(this.allCards.remove(0))
            }
            this.player2.sort();
        }
        else {
            for (let i = 0; i < 3; i++) {
                this.player3.add(this.allCards.remove(0))
            }
            this.player3.sort();
        }
    }

    canPlayCardsJudge = function () {
        let type1 = this.selectcards.cardsTypeJudge()
        console.log(`点击选择的纸牌：${type1}`)
        let type2 = this.curcards.cardsTypeJudge()
        console.log(`桌面上已有牌型：${type2}`)
        if (this.selectcards.dataStore.length > 0 && this.curcards.dataStore.length > 0) {
            if (type1 != type2) { //牌型不同
                if (!(type1 == '火箭' || (type1 == '炸弹' && type2 != '火箭'))) {
                    console.log(`牌型不同`)
                    return 1
                }
            } else { //牌型相同
                if (type1 == '单牌' || type1 == '对牌' || type1 == '三张牌' || type1 == '炸弹') {
                    if (this.selectcards.dataStore[0].weight <= this.curcards.dataStore[0].weight) {
                        console.log(`分值小于等于牌桌上的牌`)
                        return 1
                    }
                }
                if (this.selectcards.dataStore.length != this.curcards.dataStore.length) {
                    console.log(`总张数不同`)
                    return 1
                } else {
                    //cards = orderBy(cards, ['weight'], ['desc'])
                    //curCards = orderBy(curCards, ['weight'], ['desc'])

                    if (type1 == '单顺' || type1 == '双顺' || type1 == '三顺') {
                        if (this.selectcards.dataStore[0].weight <= this.curcards.dataStore[0].weight) {
                            console.log(`分值小于等于牌桌上的牌`)
                            return 1
                        }
                    } else if (type1 == '三带一张牌' || type1 == '三带一对牌') {
                        var mark = {}
                        var x = 0
                        var y = 0
                        for (var i = 0; i < this.selectcards.dataStore.length; i++) {
                            if (!mark[this.selectcards.dataStore[i].weight])
                                mark[this.selectcards.dataStore[i].weight] = 1
                            else
                                mark[this.selectcards.dataStore[i].weight]++
                            if (mark[this.selectcards.dataStore[i].weight] == 3)
                                x = this.selectcards.dataStore[i].weight
                        }
                        for (var i = 0; i < this.curcards.dataStore.length; i++) {
                            if (!mark[this.curcards.dataStore[i].weight])
                                mark[this.curcards.dataStore[i].weight] = 1
                            else
                                mark[this.curcards.dataStore[i].weight]++
                            if (mark[this.curcards.dataStore[i].weight] == 3)
                                y = this.curcards.dataStore[i].weight
                        }
                        if (x <= y) {
                            console.log(`分值小于等于牌桌上的牌`)
                            return 1
                        }
                    } else if (type1 == '四带二') {
                        var mark = {}
                        var x = 0
                        var y = 0
                        for (var i = 0; i < this.selectcards.dataStore.length; i++) {
                            if (!mark[this.selectcards.dataStore[i].weight])
                                mark[this.selectcards.dataStore[i].weight] = 1
                            else
                                mark[this.selectcards.dataStore[i].weight]++
                            if (mark[this.selectcards.dataStore[i].weight] == 4)
                                x = this.selectcards.dataStore[i].weight
                        }
                        for (var i = 0; i < this.curcards.dataStore.length; i++) {
                            if (!mark[this.curcards.dataStore[i].weight])
                                mark[this.curcards.dataStore[i].weight] = 1
                            else
                                mark[this.curcards.dataStore[i].weight]++
                            if (mark[this.curcards.dataStore[i].weight] == 4)
                                y = this.curcards.dataStore[i].weight
                        }
                        if (x <= y) {
                            console.log(`分值小于等于牌桌上的牌`)
                            return 1
                        }
                    } else if (type1 == '飞机带翅膀') {
                        var mark = {}
                        var max1 = 0
                        var max2 = 0
                        for (var i = 0; i < this.selectcards.dataStore.length; i++) {
                            if (!mark[this.selectcards.dataStore[i].weight])
                                mark[this.selectcards.dataStore[i].weight] = 1
                            else
                                mark[this.selectcards.dataStore[i].weight]++
                            if (mark[this.selectcards.dataStore[i].weight] == 3) {
                                if (this.selectcards.dataStore[i].weight > max1)
                                    max1 = this.selectcards.dataStore[i].weight
                            }
                        }
                        for (var i = 0; i < this.curcards.dataStore.length; i++) {
                            if (!mark[this.curcards.dataStore[i].weight])
                                mark[this.curcards.dataStore[i].weight] = 1
                            else
                                mark[this.curcards.dataStore[i].weight]++
                            if (mark[this.curcards.dataStore[i].weight] == 3) {
                                if (this.curcards.dataStore[i].weight > max2)
                                    max2 = this.curcards.dataStore[i].weight
                            }
                        }
                        if (max1 <= max2) {
                            console.log(`分值小于等于牌桌上的牌`)
                            return 1
                        }
                    }
                }
            }
        }
        return 0
    }
}