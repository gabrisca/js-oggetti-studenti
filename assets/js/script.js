// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo l'oggetto student e inserisco le chiavi con i relativi valori
var student = {
  firstName: "Gabriele",
  lastName: "Scarparo",
  age: 35,
};

// controllo che student sia un oggetto con typeof
console.log("student è: " + typeof student);
console.log("------------");

// stampo il mio oggetto
console.log(student);
console.log("------------");

//stampo le proprietà dell'oggetto con ciclo for-in
for(var chiave in student){
  // stampo le chiavi dell'oggetto
  console.log("le chiavi dell'oggetto student sono: " + chiave)
  console.log("------------");
  // stampo i valori dell'oggetto
  console.log("i valori delle chiavi sono: " + student[chiave])
  console.log("------------");
  // stampo tutte le proprietà
  console.log(chiave + " ha valore: " + student[chiave])
  console.log("------------");
}
