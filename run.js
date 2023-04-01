const calc = require("./calc");

f = (x) => calc.double(calc.triple(x));
x_values = [0, 1, 2, 3, 4, 5]

calc.plot(x_values, f)
