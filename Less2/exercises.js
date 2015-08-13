function greaterNum(a, b) {
    return (a > b) ? a : b;
}
console.log(greaterNum(5, 8));
console.log(greaterNum(6, 2));
console.log(greaterNum(5, 83));


function helloWorld(lang) {
    switch (lang) {
        case "en":
            return 'English';
            break
        case "es":
            return 'Espaniol';
            break
        case "de":
            return 'Deutch';
            break
        default:
            return 'Привет мир';
    }

}
console.log(helloWorld("es"));
console.log(helloWorld("en"));
console.log(helloWorld("de"));
console.log(helloWorld("ua"));

function assignGrade(numb) {
    if (numb > 90) {
        return '5';
    } else if (numb > 80) {
        return '4';
    } else if (numb > 70) {
        return '3';
    } else if (numb > 65) {
        return '2';
    } else {
        return '1';
    }

}
console.log(assignGrade(1));
console.log(assignGrade(20));
console.log(assignGrade(68));
console.log(assignGrade(84));
console.log(assignGrade(95));
console.log(assignGrade(89));
