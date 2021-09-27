"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var myself = {
    name: "Captain",
    age: 31,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent " + amount);
        return amount;
    },
};
var someone;
var greetPerson = function (person) {
    console.log("Hello, " + person.name);
};
greetPerson(myself);
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// when wanting numbers from value attach valueAsNumber instead of just value
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
var invOne = new classes_1.Invoice("Jennifer", "work on body", 400);
var invTwo = new classes_1.Invoice("Ari", "work on other body", 500);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
