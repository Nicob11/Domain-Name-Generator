let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let several = ['.com','.net','.io','.us'];

let randomPronoum;
let randomAdj;
let randomNoun;
let randomSeveral;
let domainName;

for(let i = 0; i < 10; i++){
    randomPronoum = Math.floor(Math.random()* pronoun.length);
    randomAdj = Math.floor(Math.random()* adj.length);
    randomNoun = Math.floor(Math.random()* noun.length);
    randomSeveral = Math.floor(Math.random()* several.length);

    domainName = `${pronoun[randomPronoum]+adj[randomAdj]+noun[randomNoun]+several[randomSeveral]}`
    console.log(domainName);
}