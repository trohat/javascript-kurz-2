// Calculate the sum of all numbers in a range specified by the user.
/*5, 9

5 + 6 + 7 + 8 + 9

4, 8

4 + 5 + 6 + 7 + 8

11, 13

11 + 12 + 13

1500, 3000

4, 4
4

5, 3
3 + 4 + 5 -

"opice", "slon" */

// náhrada za let prvni = Number(prompt("Zadej první číslo: "));
let prvni = 4;
let druhe = 12;

let vysledek = 0;

for (let i = prvni; i <= druhe; i++) {
    vysledek += i;
}

console.log(vysledek);


