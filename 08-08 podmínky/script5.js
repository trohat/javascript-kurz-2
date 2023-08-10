console.log("script5");

let vek = 20;
let pohlavi = "muž";

if (vek > 18 && pohlavi === "muž") {
    console.log("Máme tu skvělý pivo který chutná jenom chlapům.");
} else if (vek > 18 && pohlavi === "žena") {
    console.log("Červené víno pro dámy.")
} else if ((vek < 18) || (pohlavi === "žena")) {
    console.log("Máme tady moc dobrou limonádu pro děti a něžné pohlaví.");
}

/* AND === &&
OR === ||   */

if (!(vek > 18)) {
    console.log("Něco pro děti...");
}
