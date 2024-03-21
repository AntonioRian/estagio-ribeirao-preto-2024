/* Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

function reverterString(str) {
    let reverter = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverter += str[i];
    }
    return reverter;
  }
  

  const entrada = "vou conseguir o estagio";
  const stringRevertida = reverterString(entrada);
  console.log(stringRevertida); 