let a = 10;
let b = 5;

console.log("Summa:", a + b);
console.log("Starpība:", a - b);
console.log("Reizinājums:", a * b);
console.log("Dalījums:", a / b);

console.log("a pakāpē b:", Math.pow(a, b)); 
console.log("a dalījuma atlikums, dalot ar b:", a % b);

if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else if (b < a) {
    console.log("b ir mazāks par a");
}

if (a != b) {
    console.log("a nav vienāds ar b");
} else {
    console.log("a ir vienāds ar b");
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Masīva elementi:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("Masīva elementi apgrieztā secībā:");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
