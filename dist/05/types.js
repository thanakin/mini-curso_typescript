"use strict";
// boolean true / false
let isOpen;
isOpen = true;
// string 'foo', "foo", `foo`
let message;
message = `foo`;
// number 0xff0 00110 1 0.2
let total;
total = 20.3;
// array
let items;
items = ['foo', 'bar'];
let values;
values = [1, 2, 3];
// tuple 
let title;
title = [1, 'dois'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL
let coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('xuxu');
}
// never
function error() {
    throw new Error("error");
}
// object
let cart;
cart = {
    key: 'fi'
};
