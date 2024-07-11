function hollowPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = rows - i;
        let stars = (i * 2) - 1;
        let row = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
        console.log(row);
    }
}

hollowPyramid(5);

function printHollowPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 1; j <= rows-i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2*i-1; k++) {
            if (k === 1 || k === 2*i-1 || i === rows) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}

// Example usage
printHollowPyramid(5);