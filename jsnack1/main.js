const arrayFirstNames = ["Marco", "Luca", "Giulia", "Elena", "Sara"];
const arrayLastNames = ["Bianchi", "Rossi", "Verdi", "Neri", "Gialli"];
const arrayGuestsNames = [];

for (i = 0; i < 20; i++) {
    
    let firstName = arrayFirstNames[Math.floor(Math.random() * 5)];

    let lastName = arrayLastNames[Math.floor(Math.random() * 5)];

    let guestName = firstName + " " + lastName;

    arrayGuestsNames.push(guestName);
}

console.log(arrayGuestsNames);