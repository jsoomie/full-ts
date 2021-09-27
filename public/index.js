"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form = document.querySelector("form")!;
var form = document.querySelector(".new-item-form");
// const elForm = document.querySelector(".new-item-form")!; // Returns as element needs to be typecasted
// console.log(form.children);
//inputs
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
// when wanting numbers from value attach valueAsNumber instead of just value
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoice01 = new Invoice("Jennifer", "work on body", 400);
var invoice02 = new Invoice("Ari", "work on other body", 500);
console.log(invoice01, invoice02);
var invoices = [];
invoices.push(invoice01);
invoices.push(invoice02);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
