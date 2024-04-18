let A, B, C, troca;

A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));

if (A > B) {
    troca = A;
    A = B;
    B = troca;
}

if (B > C) {
    troca = B;
    B = C;
    C = troca;
}

if (A > B) {
    troca = A;
    A = B;
    B = troca;
}

alert("Os valores em ordem crescente são:", A, ",", B, " e", C);
