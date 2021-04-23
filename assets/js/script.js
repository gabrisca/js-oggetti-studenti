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
  console.log("la chiave dell'oggetto student è: " + chiave)
  // console.log("------------");
  // stampo i valori dell'oggetto
  console.log("il valore della chiave è: " + student[chiave])
  console.log("------------");
  // stampo tutte le proprietà
  console.log("chiave: " + chiave + " - valore: " + student[chiave])
  console.log("------------");
}

//creo un array di oggetti students
var students = [
  {
    firstName: "Harry",
    lastName: "Potter",
    age: 17,
  },
  {
    firstName: "Ronald",
    lastName: "Wesley",
    age: 18,
  },
  {
    firstName: "William",
    lastName: "Denbrough",
    age: 13,
  },
  {
    firstName: "Jackson",
    lastName: "Teller",
    age: 30,
  }
];

// stampo l'array
console.log(students);

// Ciclo su tutti gli studenti e stampo per ognuno di essi, nome, cognome ed età
//stampo ogni singolo disco
for(var idStudent of students){
  // vedo tutti gli studenti dell'array
  console.log(idStudent);
  // ciclo for-in e stampo tutti gli studenti con le realtive prorpietà
  for(var chiave in idStudent){
    console.log("chiave: " + chiave + " - valore: " + idStudent[chiave])
  }
  console.log("-------------")
}
