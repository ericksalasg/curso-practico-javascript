const notas = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
]

const notesWithCredit = notas.map(function (notaObject) {
    return notaObject.note * notaObject.credit;
});

const sumaNotesWithCredit = notesWithCredit.reduce((a, b) => a + b);

const ArrayCredits = notas.map(function (CreditObject) {
    return CreditObject.credit;
});

const sumaCredits = ArrayCredits.reduce((a, b) => a + b);




const promedioPondedaro =  sumaNotesWithCredit /  sumaCredits;