const fs = require("fs"); 
let user = fs.readFileSync("users.json"); //importer le fichier "users.json"
const tab = JSON.parse(user);  //recupérer le tableau du fichier importé

//Parcourir le tableau en enregistrant les pays/sociétés dans une map tout en incrementant la valeurs pour les doublant.
 


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


    console.log(Mapp);
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

    console.log(Mapp);
}



//Pour afficher il suffit d'appler l'une des deux fonctions (console)
console.log((Liste_Société_Utilisateurs()));
console.log((Liste_Pays_Utilisateurs()));






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

