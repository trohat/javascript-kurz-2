console.log("Malá násobilka...");

for (let i = 1; i <= 10; i++) {
    console.log("Násobky čísla " + i + ":");
    let retezec = "";
    for (let j = 0; j < 10; j++) {
        // console.log(i * j);
        let nasobek = i * j;
        retezec += nasobek + " ";
    }
    console.log(retezec);
}

