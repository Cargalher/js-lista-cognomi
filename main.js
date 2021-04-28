/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

// declaring an array of surnames
var surnames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
// console.log("surnames");

// 1. chiedi all’utente il cognome_ I am taking the input from the user and saving it as a variable.
var Usersurname = prompt("What's your Surname?");
// console.log("Usersurname");

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
    surnames.push(Usersurname);  //with this I add the Usersurname, I asked for, to the Array surnames.
    console.log(surnames);

// converting surnames in Lowercases
// var surnamesLowerCases = Usersurname.toLowerCase
// console.log(surnamesLowerCases);

    var i = 0;
    while (i< surnames.length){
        console.log(surnames[i]);                               //using ciclo while
        i++
    }