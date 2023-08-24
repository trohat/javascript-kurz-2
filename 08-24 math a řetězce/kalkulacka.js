/*
Napište funkci kalkulacka (můžete použít kód z dřívějška) - funkce se vždy zeptá na dvě čísla a na 
třetí číslo jako operaci. Operace je 0 - skončit, 1 - sčítání, 2 - odčítání atd. Po provedení 
operace se vytiskne výsledek a kalkulačka se zeptá na další zadání. Skončí jen po zadání nuly jako 
operace. Funkci zavolejte.

*/ 
// pomocí function declaration
function kalkulackaX() {
    // sem přijde tělo funkce
}



// pomocí arrow funkce
const kalkulacka = () => {
    while (true) {

        let cislo1 = Number(prompt("Zadej první číslo: "));
        let cislo2 = Number(prompt("Zadej druhé číslo: "));
        let operace = Number(prompt("Zadej operaci (1 - sčítání, 2 - odečítání, 0 - konec"));

        if (operace === 1) {
            document.write("Součet je " + (cislo1 + cislo2) + "<br>");
        } else if (operace === 2) {
            document.write("Rozdíl je " + (cislo1 - cislo2) + "<br>");
        } else if (operace === 0) {
            document.write("Děkujeme za používání naší kalkulačky.<br>");
            break;
        } else {
            document.write("Zadaná operace neexistuje.<br>");
        }
        
    }
};


kalkulacka();


