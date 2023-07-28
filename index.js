let num1 = parseInt((prompt("Enter some number")))

for (var i=num1; i <= 20; i++) {
    
    document.write(`<b> <center> <br>Here is started a table of ${i}`)
    for (var j=1; j <= 10; j++) {
        document.write("<b> <center> <br>")
        document.write(`${i} x ${j} = ${i*j}`)
    }
    document.write(`<br> <hr>`)
}

if (num1 > 20) {
    document.write(`<b> <center> <br> Plz enter a number less than 21`)
}

document.write("<b> <br> <hr> <u> <center> Created by Mirza Abdullah Baig")