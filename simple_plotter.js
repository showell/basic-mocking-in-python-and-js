function plot(tuples) {
    for (tup of tuples) {
        x = tup[0];
        y = tup[1];
        console.log(x, "*".repeat(y));
    }
}

module.exports = {plot};
