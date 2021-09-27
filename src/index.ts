import { Invoice } from "./classes";
import { HasFormatter } from "./interfaces";

// interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const myself: IsPerson = {
  name: "Captain",
  age: 31,

  speak(text: string): void {
    console.log(text);
  },

  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log(`Hello, ${person.name}`);
};

greetPerson(myself);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// when wanting numbers from value attach valueAsNumber instead of just value
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

const invOne = new Invoice("Jennifer", "work on body", 400);
const invTwo = new Invoice("Ari", "work on other body", 500);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
