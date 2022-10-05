for (let numero = 1; numero <= 100; numero++) {

    let ot = ""
    if (numero % 3 == 0 ) ot += "Fizz";
    if (numero % 5 == 0) ot += "Buzz";

    console.log(ot || numero);
}
