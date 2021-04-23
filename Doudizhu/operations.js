import { orderBy, sortBy } from 'lodash'
var logic = {}
logic.canPlayCardsJudge = function (cards, curCards) {
    var type1 = this.cardsTypeJudge(cards)
    console.log(`点击选择的纸牌：${type1}`)
    var type2 = this.cardsTypeJudge(curCards)
    console.log(`桌面上已有牌型：${type2}`)
    if (cards.length > 0 && curCards.length > 0) {
        if (type1 != type2) { //牌型不同
            if (!(type1 == '火箭' || (type1 == '炸弹' && type2 != '火箭'))) {
                console.log(`牌型不同`)
                return 1
            }
        }
        else { //牌型相同
            if (type1 == '单牌' || type1 == '对牌' || type1 == '三张牌' || type1 == '炸弹') {
                if (cards[0].weight <= curCards[0].weight) {
                    console.log(`分值小于等于牌桌上的牌`)
                    return 1
                }
            }
            if (cards.length != curCards.length) {
                console.log(`总张数不同`)
                return 1
            }
            else {
                cards = orderBy(cards, ['weight'], ['desc'])
                curCards = orderBy(curCards, ['weight'], ['desc'])

                if (type1 == '单顺' || type1 == '双顺' || type1 == '三顺') {
                    if (cards[0].weight <= curCards[0].weight) {
                        console.log(`分值小于等于牌桌上的牌`)
                        return 1
                    }
                }
                else if (type1 == '三带一张牌' || type1 == '三带一对牌') {
                    var mark = {}
                    var x = 0
                    var y = 0
                    for (var i = 0; i < cards.length; i++) {
                        if (!mark[cards[i].weight])
                            mark[cards[i].weight] = 1
                        else
                            mark[cards[i].weight]++
                        if (mark[cards[i].weight] == 3)
                            x = cards[i].weight
                    }
                    for (var i = 0; i < curCards.length; i++) {
                        if (!mark[curCards[i].weight])
                            mark[curCards[i].weight] = 1
                        else
                            mark[curCards[i].weight]++
                        if (mark[curCards[i].weight] == 3)
                            y = curCards[i].weight
                    }
                    if (x <= y) {
                        console.log(`分值小于等于牌桌上的牌`)
                        return 1
                    }
                }
                else if (type1 == '四带二') {
                    var mark = {}
                    var x = 0
                    var y = 0
                    for (var i = 0; i < cards.length; i++) {
                        if (!mark[cards[i].weight])
                            mark[cards[i].weight] = 1
                        else
                            mark[cards[i].weight]++
                        if (mark[cards[i].weight] == 4)
                            x = cards[i].weight
                    }
                    for (var i = 0; i < curCards.length; i++) {
                        if (!mark[curCards[i].weight])
                            mark[curCards[i].weight] = 1
                        else
                            mark[curCards[i].weight]++
                        if (mark[curCards[i].weight] == 4)
                            y = curCards[i].weight
                    }
                    if (x <= y) {
                        console.log(`分值小于等于牌桌上的牌`)
                        return 1
                    }
                }
                else if (type1 == '飞机带翅膀') {
                    var mark = {}
                    var max1 = 0
                    var max2 = 0
                    for (var i = 0; i < cards.length; i++) {
                        if (!mark[cards[i].weight])
                            mark[cards[i].weight] = 1
                        else
                            mark[cards[i].weight]++
                        if (mark[cards[i].weight] == 3) {
                            if (cards[i].weight > max1)
                                max1 = cards[i].weight
                        }
                    }
                    for (var i = 0; i < curCards.length; i++) {
                        if (!mark[curCards[i].weight])
                            mark[curCards[i].weight] = 1
                        else
                            mark[curCards[i].weight]++
                        if (mark[curCards[i].weight] == 3) {
                            if (curCards[i].weight > max2)
                                max2 = curCards[i].weight
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

logic.cardsTypeJudge = function (cards) {
    if (cards.length == 1)
        return '单牌'
    if (cards.length == 2 && cards[0].weight >= 14 && cards[1].weight >= 14)
        return '火箭'

    cards = orderBy(cards, ['weight'], ['desc'])
    let arr = []
    let cnt = 1
    let flag = true //判断顺牌
    for (var i = 0; i < cards.length; i++) {
        if (i < cards.length - 1 && cards[i].weight == cards[i + 1].weight)
            cnt++
        else {
            if ((arr.length > 0 && cnt != arr[arr.length - 1])
                || cards[i].weight >= 13 || cards.length < 5)
                flag = false
            arr.push(cnt)
            cnt = 1
        }
    }

    if (flag) {
        if (arr[0] == 1 && arr.length >= 5) {
            let judge = true
            for (var i = 0; i < cards.length; i++) {
                if (i < cards.length - 1) {
                    if (cards[i].weight - cards[i + 1].weight != 1) {
                        judge = false
                    }
                }
            }
            if (judge)
                return '单顺'
        }
        else if (arr[0] == 2 && arr.length >= 3) {
            let judge = true
            for (var i = 0; i < cards.length; i = i + 2) {
                if (i < cards.length - 2) {
                    if (cards[i].weight - cards[i + 2].weight != 1) {
                        judge = false
                    }
                }
            }
            if (judge)
                return '双顺'
        }
        else if (arr[0] == 3 && arr.length >= 2) {
            let judge = true
            for (var i = 0; i < cards.length; i = i + 3) {
                if (i < cards.length - 3) {
                    if (cards[i].weight - cards[i + 3].weight != 1) {
                        judge = false
                    }
                }
            }
            if (judge)
                return '三顺'
        }
    }
    else {
        arr = sortBy(arr)
        if (arr.length == 1) {
            if (arr[0] == 2)
                return '对牌'
            else if (arr[0] == 3)
                return '三张牌'
            else if (arr[0] == 4)
                return '炸弹'
        }
        else if (arr.length == 2) {
            if (arr[0] == 1 && arr[1] == 3)
                return '三带一张牌'
            else if (arr[0] == 2 && arr[1] == 3)
                return '三带一对牌'
        }
        else if (arr.length == 3) {
            if ((arr[0] == 1 && arr[1] == 1 && arr[2] == 4) ||
                (arr[0] == 2 && arr[1] == 2 && arr[2] == 4))
                return '四带二'
        }
        else if (arr.length >= 4) {
            if (arr.length % 2 == 0) {
                let flag = true
                for (var i = 0; i < arr.length / 2; i++) {
                    if ((i < arr.length / 2 - 1 && arr[i] != arr[i + 1]) ||
                        (arr[i] != 1 && arr[i] != 2))
                        flag = false
                }
                for (var i = arr.length / 2; i < arr.length; i++) {
                    if (arr[i] != 3)
                        flag = false
                }
                if (flag)
                    return '飞机带翅膀'
            }
        }
    }
    return null
}

logic.systemPlay = function (curCards, Data) { //系统出牌
    curCards = orderBy(curCards, ['weight'], ['asc'])
    Data = orderBy(Data, ['weight'], ['asc'])

    var map = {}
    var x = 0
    var y = 0
    for (var i = 0; i < curCards.length; i++) {
        if (!map[curCards[i].weight])
            map[curCards[i].weight] = 1
        else
            map[curCards[i].weight]++
        if (map[curCards[i].weight] == 3)
            x = curCards[i].weight
        else if (map[curCards[i].weight] == 4) {
            if (x > 0)
                x = 0
            y = curCards[i].weight
        }
    }

    var type = this.cardsTypeJudge(curCards)
    var len = curCards.length
    if (len == 0) {
        Data[0].isChoosed = true
        return 0
    }

    if (type == '火箭')
        return 1

    if (type == '单牌') {
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].weight > curCards[0].weight) {
                Data[i].isChoosed = true
                return 0
            }
        }
    }
    else if (type == '对牌') {
        for (var i = 0; i < Data.length - 1; i++) {
            if (Data[i].weight == Data[i + 1].weight && Data[i].weight > curCards[0].weight) {
                Data[i].isChoosed = true
                Data[i + 1].isChoosed = true
                return 0
            }
        }
    }
    else if (type == '三张牌' || type == '三带一张牌' || type == '三带一对牌') {
        var cnt = 1
        for (var i = 0; i < Data.length - 1; i++) {
            if (Data[i].weight == Data[i + 1].weight)
                cnt++
            else
                cnt = 1
            if (cnt == 3 && Data[i].weight > x) {
                Data[i + 1].isChoosed = true
                Data[i].isChoosed = true
                Data[i - 1].isChoosed = true
                if (type == '三张牌')
                    return 0
                else if (type == '三带一张牌') {
                    for (var j = 0; j < Data.length; j++) {
                        if (!Data[j].isChoosed) {
                            Data[j].isChoosed = true
                            return 0
                        }
                    }
                }
                else if (type == '三带一对牌') {
                    for (var j = 0; j < Data.length - 1; j++) {
                        if (Data[j].weight == Data[j + 1].weight && !Data[j].isChoosed && !Data[j + 1].isChoosed) {
                            Data[j].isChoosed = true
                            Data[j + 1].isChoosed = true
                            return 0
                        }
                    }
                }
                for (var k = 0; k < Data.length; k++) {
                    if (Data[k].isChoosed)
                        Data[k].isChoosed = false
                }
            }
        }
    }
    else if (type == '炸弹' || type == '四带二') {
        var cnt = 1
        for (var i = 0; i < Data.length - 1; i++) {
            if (Data[i].weight == Data[i + 1].weight)
                cnt++
            else
                cnt = 1
            if (cnt == 4 && Data[i].weight > y) {
                Data[i + 1].isChoosed = true
                Data[i].isChoosed = true
                Data[i - 1].isChoosed = true
                Data[i - 2].isChoosed = true
                if (type == '炸弹')
                    return 0
                else {
                    var num = null
                    if (len == 6) {
                        for (var j = 0; j < Data.length; j++) {
                            if (!Data[j].isChoosed) {
                                if (!num) {
                                    Data[j].isChoosed = true
                                    num = Data[j].weight
                                }
                                else {
                                    if (num != Data[j].weight) {
                                        Data[j].isChoosed = true
                                        return 0
                                    }
                                }
                            }
                        }
                    }
                    else if (len == 8) {
                        var num = null
                        for (var j = 0; j < Data.length - 1; j++) {
                            if (Data[j].weight == Data[j + 1].weight &&
                                !Data[j].isChoosed && !Data[j + 1].isChoosed) {
                                if (!num) {
                                    Data[j].isChoosed = true
                                    Data[j + 1].isChoosed = true
                                    num = Data[j].weight
                                }
                                else {
                                    if (num != Data[j].weight) {
                                        Data[j].isChoosed = true
                                        Data[j + 1].isChoosed = true
                                        return 0
                                    }
                                }
                            }
                        }
                    }
                }
                for (var k = 0; k < Data.length; k++) {
                    if (Data[k].isChoosed)
                        Data[k].isChoosed = false
                }
            }
        }
    }
    else if (type == '单顺') {
        var cnt = 0
        var mark = null
        var arr = {}
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].weight > 12)
                break
            if (mark) {
                if (Data[i].weight - mark == 1) {
                    mark = Data[i].weight
                    arr[i] = true
                    cnt++
                    if (cnt == len) {
                        for (var j = 0; j < Data.length; j++) {
                            if (arr[j])
                                Data[j].isChoosed = true
                        }
                        return 0
                    }
                }
                else if (Data[i].weight - mark > 1) {
                    cnt = 1
                    mark = Data[i].weight
                    arr = {}
                    arr[i] = true
                }
            }
            else {
                if (Data[i].weight > curCards[0].weight) {
                    mark = Data[i].weight
                    arr[i] = true
                    cnt++
                }
            }
        }
    }
    else if (type == '双顺') {
        var cnt = 0
        var cur = null
        for (var i = 0; i < Data.length - 1; i++) {
            if (Data[i].weight > 12)
                break
            if (Data[i].weight == Data[i + 1].weight && Data[i].weight > curCards[0].weight) {
                if (!cur) {
                    cnt++
                    cur = Data[i].weight
                    Data[i].isChoosed = true
                    Data[i + 1].isChoosed = true
                }
                else {
                    if (Data[i].weight - cur > 1) {
                        i--
                        for (var j = 0; j < Data.length; j++) {
                            if (Data[j].isChoosed)
                                Data[j].isChoosed = false
                        }
                        cur = null
                        cnt = 0
                    }
                    else if (Data[i].weight - cur == 1) {
                        cur = Data[i].weight
                        Data[i].isChoosed = true
                        Data[i + 1].isChoosed = true
                        cnt++
                        if (cnt == len / 2) {
                            return 0
                        }
                    }
                    else {
                    }
                }
            }
        }
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].isChoosed)
                Data[i].isChoosed = false
        }
    }
    else if (type == '三顺') {
        var cnt = 0
        var cur = null
        for (var i = 0; i < Data.length - 2; i++) {
            if (Data[i].weight > 12)
                break
            if (Data[i].weight == Data[i + 1].weight &&
                Data[i].weight == Data[i + 2].weight && Data[i].weight > curCards[0].weight) {
                if (!cur) {
                    cnt++
                    cur = Data[i].weight
                    Data[i].isChoosed = true
                    Data[i + 1].isChoosed = true
                    Data[i + 2].isChoosed = true
                }
                else {
                    if (Data[i].weight - cur > 1) {
                        i--
                        for (var j = 0; j < Data.length; j++) {
                            if (Data[j].isChoosed)
                                Data[j].isChoosed = false
                        }
                        cur = null
                        cnt = 0
                    }
                    else if (Data[i].weight - cur == 1) {
                        cur = Data[i].weight
                        Data[i].isChoosed = true
                        Data[i + 1].isChoosed = true
                        Data[i + 2].isChoosed = true
                        cnt++
                        if (cnt == len / 3) {
                            return 0
                        }
                    }
                    else {
                    }
                }
            }
        }
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].isChoosed)
                Data[i].isChoosed = false
        }
    }
    //没有更大的匹配牌型时，如果有大小王，则打出火箭
    if (Data[Data.length - 1].weight >= 14 && Data[Data.length - 2].weight >= 14) {
        Data[Data.length - 1].isChoosed = true
        Data[Data.length - 2].isChoosed = true
        return 0
    }

    return 1
}

module.exports = logic