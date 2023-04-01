simple_plotter = require("./simple_plotter.js");

function double(x) {
    return x*2;
}

function triple(x) {
    return x*3;
}

function calculate (x_vals, f) {
    result = [];
    for (x of x_vals) {
        result.push([x,f(x)]);
    }
    return result;
}

function plot_function_with_plotter (x_vals, f, plotter) {
    plotter(calculate(x_vals, f));
}

function plot(x_vals, f) {
    plotter = simple_plotter.plot;
    plot_function_with_plotter(x_vals, f, plotter);
}

imports = {simple_plotter};

module.exports = {
    double,
    triple,
    calculate, 
    plot_function_with_plotter,
    plot,
    imports,
};
