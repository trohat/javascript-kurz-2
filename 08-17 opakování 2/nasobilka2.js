document.write("<h1>Malá násobilka...</h1>");


document.write("<table>");
for (let i = 1; i <= 30; i++) {
    let retezec = "<tr>";
    for (let j = 0; j < 20; j++) {
        // console.log(i * j);
        let nasobek = i * j;
        retezec += "<td>" + nasobek + "</td>";
    }
    retezec += "</tr>";
    document.write(retezec);
}
document.write("</table>");

