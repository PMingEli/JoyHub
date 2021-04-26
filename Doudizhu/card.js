//"use strict";//严格模式
class card {
    constructor(type, number, weight) {
        this.type = type;
        this.number = number;
        this.weight = weight;
    }
}

//console.log(card)

var list_type = ["Heart", "Spade", "Diamond", "Club"]//花色：红心❤，黑桃♠，方块♦，梅花♣
var list_number = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"]

function Set() {
    this.dataStore = [];
    this.add = add;//新增元素
    this.remove = remove;//删除元素,到其他集合
    this.delete = delete_card;//删除元素
    this.size = size;//集合的元素个数
    this.contains = contains;//判断一个集合中是否包含某个元素
    this.intersect = intersect;//交集
    this.sort = sort;
    this.cardsTypeJudge = cardsTypeJudge;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(pos) {
    var c = this.dataStore[pos];
    this.dataStore.splice(pos, 1);
    return c;
}

function delete_card(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function size() {
    return this.dataStore.length;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function sort() {
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

function cardsTypeJudge() {
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
            if ((arr.length > 0 && cnt != arr[arr.length - 1])
                || this.dataStore[i].weight >= 13 || this.dataStore.length < 5)
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
        }
        else if (arr[0] == 2 && arr.length >= 3) {
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
        }
        else if (arr[0] == 3 && arr.length >= 2) {
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

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

var Cards = new Set();

var weight = 1;

//添加52张普通牌
for (var i = 0; i < list_number.length; i++) {
    for (var j = 0; j < list_type.length; j++) {
        var c = new card(list_type[j], list_number[i], weight);
        //console.log(c);
        Cards.add(c);
    }
    weight++;
}

//添加大小王
var c1 = new card("Black", "Joker", weight);
var c2 = new card("Red", "Joker", weight + 1);
Cards.add(c1);
Cards.add(c2);

for (var i = 0; i < Cards.size(); i++) {
    console.log(Cards.dataStore[i]);
}
console.log(Cards.size());

var player1 = new Set();
var player2 = new Set();
var player3 = new Set();
for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 17; i++) {
        var number = randomNum(0, Cards.size() - 1);
        var c = Cards.remove(number);
        if (j == 0) player1.add(c);
        if (j == 1) player2.add(c);
        if (j == 2) player3.add(c);
    }
}

console.log("player1", player1.size());
for (var i = 0; i < player1.size(); i++) {
    console.log(player1.dataStore[i]);
}

console.log("player2", player2.size());
for (var i = 0; i < player1.size(); i++) {
    console.log(player2.dataStore[i]);
}

console.log("player3", player3.size());
for (var i = 0; i < player1.size(); i++) {
    console.log(player3.dataStore[i]);
}

console.log("剩余", Cards.size());
for (var i = 0; i < Cards.size(); i++) {
    console.log(Cards.dataStore[i]);
}

console.log((player1.intersect(player2)).size());

// var player4 = new Set();
// player4 = player3;

player3.sort();
console.log("player3", player3.size());
for (var i = 0; i < player1.size(); i++) {
    console.log(player3.dataStore[i]);
}

//console.log(player4.intersect(player3));
var cards = new Set
var curCards = new Set

for (var i = 3; i < 9; i++) {
    var c = new card("Heart",i+2+'',i)
    cards.add(c)
}
cards.sort()
console.log(cards)
console.log(cards.cardsTypeJudge())