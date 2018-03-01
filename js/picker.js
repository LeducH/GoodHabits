var habits = [
    "Be kind",
    "Keep an open-mind",
    "Eat well",
    "Put your needs first",
    "Exercise",
    "Be honoest with yourself",
    "Meditate",
    "Speak well of others",
    "Be honest",
    "Listen to understand",
    "Dream big",
    "Choose faith over fear",
    "Be patient",
    "Make the most of now",
    "Judge less",
    "Clean your home",
    "Exercise self-discipline",
    "Tell the truth – at least, don’t lie",
    "Smile often",
    "Look on the bright side",
    "Love yourself",
    "Avoid social comparison",
    "Forgive easily",
    "See failure as opportunity",
    "Show gratitude",
    "Take opinions lightly",
    "Think positively",
    "Select friends that lift you up",
    "Drink lots of water",
    "Let go of what can't be changed",
    "Believe in yourself",
    "Have a healthy sleeping pattern"
];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function hasOneDayPassed() {
    var date = new Date().toLocaleDateString();

    if (localStorage.yourapp_date == date)
        return false;

    localStorage.yourapp_date = date;
    return true;
}

// some function which should run once a day
function runOncePerDay() {
    if (!hasOneDayPassed())

        return false;


    // your code below
    var rand = getRandom(habits, 3);
}
runOncePerDay();


var rand = getRandom(habits, 3);
var htmlHabits = [
    "habit1",
    "habit2",
    "habit3"
]
for (var i = 0; i < htmlHabits.length; i++) {
    document.getElementById(htmlHabits[i]).innerHTML = rand[i];
}
