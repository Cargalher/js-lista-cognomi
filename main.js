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


    var surnamesLowerCases = [];                                       //declaring empty array to store the surnames in lowercase


    var i = 0;
    while (i< surnames.length){
        surnamesLowerCases.push(surnames[i].toLowerCase());            //using ciclo while
        i++
    };
    console.log(surnamesLowerCases);                                   //checking that the array is now lowercase;


    Usersurname = Usersurname.toLowerCase();                            //Saving the username variable as lowercase
    
    // 3. stampa la lista ordinata alfabeticamente
    surnamesLowerCases.sort();
    console.log(surnamesLowerCases);                                    //sorting the Array surnamesLowerCases alphabetically


    /* 4. scrivi anche la posizione "umana" (partendo da 1)
     della lista in cui il nuovo utente si trova*/
    
    surnamesLowerCases.indexOf(Usersurname);                             //printing the index of the surname inside of the Array surnameLowerCases in a Human-friendly way 
    // console.log(surnamesLowerCases.indexOf(Usersurname));  
    console.log(surnamesLowerCases.indexOf(Usersurname)+1); 


/*
    var listElements = document.getElementById('list').innerHTML;
    for (var i = 0; i< Usersurname.length; i++){
        var surname = Usersurname[i];                                                                   //print list in browser 3 ways (by fabio, applied with the var fabio created for his correction so is not working)
        document.getElementById('list').innerHTML = listElements + '<li>' + surname + '</li>';
        doument.getElementById('list').insertAdjacentHTML('beforeend', '<li>' + lastname + '</li>');
        doument.getElementById('list').insertAdjacentHTML('beforeend','<li> ${lastname} </li>');  ///versione con insertAdjacentHTML
    }
    */