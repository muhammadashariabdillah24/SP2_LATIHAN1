for (let y = 1;y < 10;y++) {
    for (let x = 1;x < 10;x++) {
        if(x <= y && x <= 9 - (y - 1)){
            document.write("*")
        } else if(x >= y && x >= 9 - (y - 1)){
            document.write("*")
        } else {
            document.write("_")
        }
    }
    document.write("<br />")
}