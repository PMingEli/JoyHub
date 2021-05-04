import card from './card'

export default class Cards {
    constructor() {
        this.dataStore = [];
    }
    add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }
    
    remove(pos) {
        let c = new card;
        c = this.dataStore[pos];
        this.dataStore.splice(pos, 1);
        return c;
    }
    
    delete_card(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }
    
    size() {
        return this.dataStore.length;
    }
    
    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    }
    
    intersect(set) {
        var tempSet = new Cards();
        for (var i = 0; i < this.dataStore.length; i++) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
    
    sort() {
        var c = new card();
        var label = 0;
        for (var i = 0; i < this.dataStore.length - 1; i++) {
            c = this.dataStore[i + 1];
            label = i + 1;
            for (var j = i + 1; j < this.dataStore.length; j++) {
                if (c.weight < this.dataStore[j].weight) {
                    c = this.dataStore[j];
                    label = j;
                }
            }
            if (c.weight > this.dataStore[i].weight) {
                this.dataStore[label] = this.dataStore[i];
                this.dataStore[i] = c;
            }
        }
    }
    
    cardsTypeJudge() {
        //var this = new this
        if (this.dataStore.length == 1)
            return '单牌'
        if (this.dataStore.length == 2 && this.dataStore[0].weight >= 14 && this.dataStore[1].weight >= 14)
            return '火箭'
    
        //this = orderBy(this, ['weight'], ['desc'])
        let arr = []
        let cnt = 1
        let flag = true //判断顺牌
        for (var i = 0; i < this.dataStore.length; i++) {
            if (i < this.dataStore.length - 1 && this.dataStore[i].weight == this.dataStore[i + 1].weight)
                cnt++
            else {
                if ((arr.length > 0 && cnt != arr[arr.length - 1]) ||
                    this.dataStore[i].weight >= 13 || this.dataStore.length < 5)
                    flag = false
                arr.push(cnt)
                cnt = 1
            }
        }
    
        if (flag) {
            if (arr[0] == 1 && arr.length >= 5) {
                let judge = true
                for (var i = 0; i < this.dataStore.length; i++) {
                    if (i < this.dataStore.length - 1) {
                        if (this.dataStore[i].weight - this.dataStore[i + 1].weight != 1) {
                            judge = false
                        }
                    }
                }
                if (judge)
                    return '单顺'
            } else if (arr[0] == 2 && arr.length >= 3) {
                let judge = true
                for (var i = 0; i < this.dataStore.length; i = i + 2) {
                    if (i < this.dataStore.length - 2) {
                        if (this.dataStore[i].weight - this.dataStore[i + 2].weight != 1) {
                            judge = false
                        }
                    }
                }
                if (judge)
                    return '双顺'
            } else if (arr[0] == 3 && arr.length >= 2) {
                let judge = true
                for (var i = 0; i < this.dataStore.length; i = i + 3) {
                    if (i < this.dataStore.length - 3) {
                        if (this.dataStore[i].weight - this.dataStore[i + 3].weight != 1) {
                            judge = false
                        }
                    }
                }
                if (judge)
                    return '三顺'
            }
        } else {
            arr = sortBy(arr)
            if (arr.length == 1) {
                if (arr[0] == 2)
                    return '对牌'
                else if (arr[0] == 3)
                    return '三张牌'
                else if (arr[0] == 4)
                    return '炸弹'
            } else if (arr.length == 2) {
                if (arr[0] == 1 && arr[1] == 3)
                    return '三带一张牌'
                else if (arr[0] == 2 && arr[1] == 3)
                    return '三带一对牌'
            } else if (arr.length == 3) {
                if ((arr[0] == 1 && arr[1] == 1 && arr[2] == 4) ||
                    (arr[0] == 2 && arr[1] == 2 && arr[2] == 4))
                    return '四带二'
            } else if (arr.length >= 4) {
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
    
    
    
    // init() {
    //     var Cards = new Set();
    
    //     var weight = 1;
    
    //     //添加52张普通牌
    //     for (var i = 0; i < list_number.length; i++) {
    //         for (var j = 0; j < list_type.length; j++) {
    //             var c = new card(list_type[j], list_number[i], weight);
    //             //console.log(c);
    //             Cards.add(c);
    //         }
    //         weight++;
    //     }
    
    //     //添加大小王
    //     var c1 = new card("Black", "Joker", weight);
    //     var c2 = new card("Red", "Joker", weight + 1);
    //     Cards.add(c1);
    //     Cards.add(c2);
    
    //     for (var i = 0; i < Cards.size(); i++) {
    //         console.log(Cards.dataStore[i]);
    //     }
    //     console.log(Cards.size());
    
    //     var player1 = new Set();
    //     var player2 = new Set();
    //     var player3 = new Set();
    //     var curcards = new Set();
    //     var selectcards = new Set();
    // }
}