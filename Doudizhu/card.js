"use strict";
class card {
    constructor(type, number, weight) {
        this.type = type;
        this.number = number;
        this.weight = weight;
    }
}

//console.log(card)
//针灸
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
