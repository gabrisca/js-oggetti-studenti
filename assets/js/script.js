// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
// 3 Creare un array di oggetti di studenti.
// 4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1 creo l'oggetto student e inserisco le chiavi con i relativi valori
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

// 2 stampo le proprietà dell'oggetto con ciclo for-in
for (var chiave in student) {
  // stampo le chiavi dell'oggetto
  console.log("la chiave dell'oggetto student è: " + chiave);
  // console.log("------------");
  // stampo i valori dell'oggetto
  console.log("il valore della chiave è: " + student[chiave]);
  console.log("------------");
  // stampo tutte le proprietà
  console.log("chiave: " + chiave + " - valore: " + student[chiave]);
  console.log("------------");
}

// 3 creo un array di oggetti students
var students = [{
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
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 60,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 15,
  },
];

// stampo l'array
console.log(students);

// push di un nuovo studente in fondo all'array (per allenamento)
students.push({
  firstName: "Michael",
  lastName: "Jordan",
  age: 55,
})

// // 5 Do la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// var newFirstName = prompt("Nome");
// var newLastName = prompt("Cognome");
// var newAge = parseInt(prompt("Età"));

// // pusho il tutto nell'array students
// students.push({
//   firstName: newFirstName,
//   lastName: newLastName,
//   age: newAge,
// });

console.log(students);

// 4 Ciclo su tutti gli studenti e stampo per ognuno di essi, nome, cognome ed età
//stampo ogni singolo disco
for (var idStudent of students) {
  // vedo tutti gli studenti dell'array
  console.log(idStudent);
  // ciclo for-in e stampo tutti gli studenti con le realtive prorpietà
  for (var chiave in idStudent) {
    // vedo le chiavi
    console.log(chiave);
    // vedo i valori
    console.log(idStudent[chiave]);
    // vedo le chiavi e i relativi valori
    console.log("chiave: " + chiave + " - valore: " + idStudent[chiave]);
  }
  console.log("-------------");

  //salvo in una var le ul creata in html
  var ulFirstName = document.getElementById("nome");
  var ulLastName = document.getElementById("cognome");
  var ulAge = document.getElementById("età");

  // salvo in una var le stringhe html con gli elementi dell'array
  var strHtmlFirstName =
    "<li><p>" + idStudent.firstName + '</p>';
  var strHtmlLastName =
    "<li><p>" + idStudent.lastName + '</p>';
  var strHtmlAge =
    "<li><p>" + idStudent.age + '</p>';

  // aggiungo i contenuti delle stringhe prima della chiusra dell'ul
  ulFirstName.innerHTML += strHtmlFirstName;
  ulLastName.innerHTML += strHtmlLastName;
  ulAge.innerHTML += strHtmlAge;
  // giunto qui visualizzo sul browser il contenuto dell'array suddiviso in ul
}