for (let numero = 0; numero <= 100; numero++) {

    if (numero % 3 == 0 ) {
        console.log("Fizz");
    }
    if (numero % 5 == 0) {
        console.log("Buzz");
    }
    else (numero % 3 == 0 && numero % 5 == 0); {
        console.log("FizzBuzz");
    }
    console.log(numero);

}