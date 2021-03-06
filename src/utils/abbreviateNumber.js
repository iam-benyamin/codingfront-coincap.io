
export const abbreviateNumber = (number, fixed) => {
    if (number === null) { return null; }
    if (number === 0) { return '0'; }
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (number).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k < 1 ? number.toFixed(0 + fixed) : (number / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
        e = d + ['', 'k', 'm', 'b', 't'][k]; // append power
    return e;
}