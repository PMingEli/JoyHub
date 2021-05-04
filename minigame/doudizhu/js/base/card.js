//"use strict"; //严格模式

export default class card {
    constructor(type, number, weight) {
        this.type = type;
        this.number = number;
        this.weight = weight;
    }
}

//console.log(card)

export const list_type = ["Heart", "Spade", "Diamond", "Club"] //花色：红心❤，黑桃♠，方块♦，梅花♣
export const list_number = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"]



// for (var j = 0; j < 3; j++) {
//     for (var i = 0; i < 17; i++) {
//         var number = randomNum(0, Cards.size() - 1);
//         var c = Cards.remove(number);
//         if (j == 0) player1.add(c);
//         if (j == 1) player2.add(c);
//         if (j == 2) player3.add(c);
//     }
// }

// console.log("player1", player1.size());
// for (var i = 0; i < player1.size(); i++) {
//     console.log(player1.dataStore[i]);
// }

// console.log("player2", player2.size());
// for (var i = 0; i < player1.size(); i++) {
//     console.log(player2.dataStore[i]);
// }

// console.log("player3", player3.size());
// for (var i = 0; i < player1.size(); i++) {
//     console.log(player3.dataStore[i]);
// }

// console.log("剩余", Cards.size());
// for (var i = 0; i < Cards.size(); i++) {
//     console.log(Cards.dataStore[i]);
// }

// console.log((player1.intersect(player2)).size());

// // var player4 = new Set();
// // player4 = player3;

// player3.sort();
// console.log("player3", player3.size());
// for (var i = 0; i < player1.size(); i++) {
//     console.log(player3.dataStore[i]);
// }

// //console.log(player4.intersect(player3));
// var cards = new Set
// var curCards = new Set

// for (var i = 3; i < 9; i++) {
//     var c = new card("Heart",i+2+'',i)
//     cards.add(c)
// }
// cards.sort()
// console.log(cards)
// console.log(cards.cardsTypeJudge())