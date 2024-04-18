let a, b, c, d;
let soma, mult;


a = parseInt(prompt("Insira um valor para A:"));
b = parseInt(prompt("Insira um valor para B:"));
c = parseInt(prompt("Insira um valor para C:"));
d = parseInt(prompt("Insira um valor para D:"));

alert("------------------Adição------------------");
soma = a + b;
alert("O valor da soma de A com B é " + soma);

soma = a + c;
alert("O valor da soma de A com C é " + soma);

soma = a + d;
alert("O valor da soma de A com D é " + soma);

soma = b + c;
alert("O valor da soma de B com C é " + soma);

soma = b + d;
alert("O valor da soma de B com D é " + soma);

soma = c + d;
alert("O valor da soma de C com D é " + soma);

alert("--------------Multiplicação--------------");
mult = a * b;
alert("O produto de A com B é " + mult);

mult = a * c;
alert("O produto de A com C é " + mult);

mult = a * d;
alert("O produto de A com D é " + mult);

mult = b * c;
alert("O produto de B com C é " + mult);

mult = b * d;
alert("O produto de B com D é " + mult);

mult = c * d;
alert("O produto de C com D é " + mult);

