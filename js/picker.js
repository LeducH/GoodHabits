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

function setTime(date, hour) {
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
}

function setLocalTime(date) {
    var intervallIndex = Math.floor(currentDate.getHours() / 8);
    var newDate = setTime(currentDate, intervalls[intervallIndex]);
    localStorage.setItem('timestamp', newDate.getTime());
}

function setLocalHabits() {
    var rand = getRandom(habits, 3);
    localStorage.setItem('habits', rand);
}

var intervalls = [0, 8, 16];
var currentDate = new Date();
var localTimestamp = new Date(parseInt(localStorage.getItem('timestamp')));
var htmlHabits = [
    "habit1",
    "habit2",
    "habit3"
]

if (localStorage.getItem('timestamp') == null) {
    setLocalTime(currentDate);
}

if (localStorage.getItem('habits') == null) {
    setLocalHabits();
}

if (currentDate.getTime() - localTimestamp.getTime() > 8 * 60 * 60 * 1000) {
    setLocalTime(currentDate);
} else {
    var habitsString = localStorage.getItem('habits');
    var habitsLocalList = habitsString.split(',');
    rand = habitsLocalList;
}


for (var i = 0; i < htmlHabits.length; i++) {
    document.getElementById(htmlHabits[i]).innerHTML = rand[i];
}
