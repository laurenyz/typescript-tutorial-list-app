import React from 'react';

let name: string;
//let anyType: any; // not recommended, instead see next line
let unknownType: unknown; // also accepts any types
let age: number | string; // can be number or string - "|" is called union
let isStudent: boolean;
let hobbies: object[]
let role:[number, string] // duple -> role = [5, 'student']
//let person: object; not recommended - can have many different keywords/types. Instead, create Type interface.

type X = {
  a: string;
  b?: number; // ? makes age optional
}

let x: X = {
  a: "L-dawg",
  b: 84
}

let lotsOfXs: X[]

type Y = X & { //type can be extended
  c: string;
  d: number;
}

let test: Y = { 
  a: "hi",
  c: "bye",
  d: 3
}

interface Person {
  name: string;
  age?: number; // ? makes age optional
}

interface Guy extends Person {
    profession: string;
}

// can use both custom types and interaces to extend each other 
// interface extend otherInterface
// interface extend type
// type = otherType &
// type = interface &

// let printName: Function; // this works fine, but there's a better way

let printName: (name: string) => void // void returns undefined
let printName1: (name: string) => never // doesn't return anything

function printName2(name: string){
  console.log(name)
}