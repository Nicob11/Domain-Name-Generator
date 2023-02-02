/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#bottonGenerate").addEventListener("click", () => {
    document.querySelector("#domainName").innerHTML = generateRandomDomain();
  });

  let generateRandomDomain = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let nounHack = [];
    let randomDomain;
    let randomPronum;
    let randomAdj;
    let randomNounHack;
    const agregarCaracter = (cadena, caracter, pasos) => {
      let cadenaConCaracteres = "";
      const longitudCadena = cadena.length;
      for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
          cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
          cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
      }
      return cadenaConCaracteres;
    };
    noun.forEach(e => {
      let hackToPush = agregarCaracter(e, ".", [e.length - 2]);
      nounHack.push(hackToPush);
    });

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < nounHack.length; k++) {
          console.log(pronoun[i] + adj[j] + nounHack[k]);
        }
      }
    }
    for (let i = 0; i < 10; i++) {
      randomPronum = Math.floor(Math.random() * pronoun.length);
      randomAdj = Math.floor(Math.random() * adj.length);
      randomNounHack = Math.floor(Math.random() * nounHack.length);
    }
    randomDomain =
      pronoun[randomPronum] + adj[randomAdj] + nounHack[randomNounHack];
    return randomDomain;
  };
};
