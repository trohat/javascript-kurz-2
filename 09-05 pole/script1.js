let pejsci = [ "Azor", "Míša", "Maxipes", "Rex", "Hafík" ];

for (let index = 0; index < pejsci.length; index++) {
    console.log("Jeden z pejsků se jmenuje " + pejsci[index] + ".");
}

for (let index2 = 0; index2 < pejsci.length; index2++) {
    console.log("Pejsek číslo " + (index2 + 1) + " se jmenuje " + pejsci[index2] + ".");
}

// trochu těžší, není nutné rozumět, už kvůli složitější podmínce
let indexHledani = 0;
while (indexHledani < pejsci.length && pejsci[indexHledani].toUpperCase() !== "MAXIPES") {
    indexHledani++;
}
console.log("MAXIPES nalezen na indexu " + indexHledani);

// vyhledávání skrz for cyklus, super složité!!!
for (var indexHledani2 = 0; 
    indexHledani2 < pejsci.length && pejsci[indexHledani2].toUpperCase() !== "MAXIPES"; 
    indexHledani2++) {
}
console.log("MAXIPES podruhé nalezen na indexu " + indexHledani2);
