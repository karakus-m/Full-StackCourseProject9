//WelcomeText Object
const welcomeText = {
    //Content arrays for random messages
    array1: ["Welcome (English)", "Bienvenido (Spanish)", "Bienvenue (French)", "Willkommen (German)", "Benvenuto (Italian)", "Hoş Geldiniz (Turkish)", "Marhaban (Arabic)"],
    array2: ["25 Reps Push-Ups", "40 Reps Bodyweight Squats", "90 Seconds Plank Hold", "20 Reps Each Leg Lunges", "20 Reps Burpees"],
    array3: ["1984 by George Orwell", "To Kill a Mockingbird by Harper Lee", "The Great Gatsby by F. Scott Fitzgerald", "Crime and Punishment by Fyodor Dostoevsky", "Sapiens: A Brief History of Humankind by Yuval Noah Harari", "Kürk Mantolu Madonna by Sabahattin Ali", "The Alchemist by Paulo Coelho", "Tutunamayanlar by Oğuz Atay", "What Men Live By by Leo Tolstoy"],
    //Method for random number
    randomInteger(contentArray) {
        return Math.floor(Math.random() * contentArray.length);
    },
    //Messages;
    message1 () {
        return `${this.array1[this.randomInteger(this.array1)]} Muzaffer!`;
    },
    message2 () {
        return `Today, you should do at least ${this.array2[this.randomInteger(this.array2)]}.`;
    },
    message3 () {
        return `After the exercise, you can read ${this.array3[this.randomInteger(this.array3)]}.`;
    },
}
//Global printing function
const printWelcomeMessage = function () {
    console.log(welcomeText.message1());
    console.log(welcomeText.message2());
    console.log(welcomeText.message3());
}
//Global printing function call
printWelcomeMessage();
