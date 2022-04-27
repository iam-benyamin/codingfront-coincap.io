export function displayTime(entryTime) {
    var str = "";
    var currentTime = new Date(entryTime * 1000);
    var hours = currentTime.getHours();
    str += String(hours);
    if (hours > 11) {
        str += " PM"
    } else {
        str += " AM"
    }
    return str;
}