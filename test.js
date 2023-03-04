const fs = require("fs"); 
let user = fs.readFileSync("users.json"); //importer le fichier "users.json"
const tab = JSON.parse(user);  //recupérer le tableau du fichier importé
const prompt = require("prompt-sync")();    //inclusion  de prompt


// la liste des couleurs  
//     Rouge : \x1b[31m
//     Vert : \x1b[32m
//     Jaune : \x1b[33m
//     Bleu : \x1b[34m
//     Cyan : \x1b[36m
//     Blanc : \x1b[37m


//demander la couleur voulu dans le console
console.log("Vous choisissez quelle couleur? \n\
1: Cyan  \n\
2: rouge       \n\
3: jaune :\n ");

const v = prompt(" ");  //récupérer la valeur taper par l'utilisateur



/**
 * La fonction Liste_Pays_Utilisateurs() qui increment la valeurs de la clé à chaque redondance sinon met la valeur de la clé à 1 
 */
function Liste_Pays_Utilisateurs()
{
    var Mapp = new Map;

    //Parcourir le tableau en enregistrant les pays/sociétés dans une map tout en incrementant la valeurs pour les doublant.
    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].country)) //cas ou la map contient déja ce pays comme clé
        {
            Mapp.set(tab[i].country, Mapp.get(tab[i].country) + 1);   //incrementer la valeurs de ce clé
        }
  
        else      
        {
            Mapp.set(tab[i].country,1);    // ajouter le nouveau pays comme clé en le donnant une valeurs de 1
        }

    }
    //partie d'affichage
    if(v==1){
        console.log("\x1b[36m%s\x1b[0m",Mapp); //le cyan
    }
    else if (v==2) {
        console.log("\x1b[31m%s\x1b[0m",Mapp);//le rouge 
    }
    else if (v==3) {
        console.log("\x1b[33m%s\x1b[0m",Mapp); //le jaune
    }

}





/**
 * La fonction Liste_Société_Utilisateurs() qui increment la valeurs de la clé à chaque redondance  sinon met la valeur de la clé à 1 
 */
function Liste_Société_Utilisateurs()
{
    var Mapp = new Map;
  
    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].company))
        {
            Mapp.set(tab[i].company, Mapp.get(tab[i].company) + 1);
        }

        else
        {
            Mapp.set(tab[i].company,1);
        }

    }
    if(v==1){
        console.log("\x1b[36m%s\x1b[0m",Mapp); //le cyan
    }
    else if (v==2) {
        console.log("\x1b[31m%s\x1b[0m",Mapp);//le rouge 
    }
    else if (v==3) {
        console.log("\x1b[33m%s\x1b[0m",Mapp); //le jaune
    }

}
   


//on a utiliser le console.log puisque le \n ne marche pas avec le prompt
console.log("C'est quoi votre choix ? \n\
1: Société   \n\
2: Pays       \n\
3: Quitter :\n ");


const c = prompt(" ");  //récupérer la valeur taper par l'utilisateur

console.log(`vous avez choisi la couleur numero :  ${v}`); //le numero de couleur
console.log(`et votre choix est du numero :  ${c}`); //pour afficher le choix saisi





if(c==1){ //les societes
   
    console.log((Liste_Société_Utilisateurs())); 
  
}
if(c==2){  //les pays   
    console.log((Liste_Pays_Utilisateurs())); 
}
   

if(c==3){     //exit  
    if(v==1){
        console.log("\x1b[36m%s\x1b[0m","Good bye"); 
    }
    else if (v==2) {
        console.log("\x1b[31m%s\x1b[0m","Good bye");
    }
    else if (v==3) {
        console.log("\x1b[33m%s\x1b[0m","Good bye");
    }
}





/////// pour afficher le fichier dans un serveur ./////
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

