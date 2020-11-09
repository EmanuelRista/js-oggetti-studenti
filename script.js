//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  'nome' : 'Massimo',
  'cognome' : 'Giuliani',
  'età' : 32
};//inizializzo variabile studente + le sue proprietà

for(var chiave in studente){
  console.log(chiave.charAt(0).toUpperCase() + chiave.slice(1));
  console.log(studente[chiave]);
}//stampo su console.log attraverso il for

// charAt = The charAt() method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on.
// The toUpperCase() method converts a string to uppercase letters.
// slice = The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
  {
    'nome' : 'Massimo',
    'cognome' : 'Giuliani',
    'età' : 32
  },
  {
    'nome' : 'Donald',
    'cognome' : 'Trump',
    'età' : 60
  },
  {
    'nome' : 'Vincenzo',
    'cognome' : 'De Luca',
    'età' : 61
  },
  {
    'nome' : 'Iva',
    'cognome' : 'Zanicchi',
    'età' : 75
  },
  {
    'nome' : 'Padre',
    'cognome' : 'Pio',
    'età' : 90
  },//elemento

];//array

for(var i=0; i < studenti.length; i++){//ciclo
  console.log("Nome: ");
  console.log(studenti[i].nome);
  console.log("Cognome: ");
  console.log(studenti[i].cognome);
}//non va bene <--- devo studiare i cicli

console.log(studenti.length);//NB. length in questo caso non conta le lettere della stringa ma il numero degli elementi dell'array ---> good to know


//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var addStudente = {
  'nome' : undefined,
  'cognome' : undefined,
  'età' : undefined
};

for(var prop in addStudente){
  addStudente[prop] = prompt("Inserire " + prop + " dello studente:");
}

studenti.push(addStudente);

console.log(studenti);
