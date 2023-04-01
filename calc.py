import simple_plotter

def double(x):
    return x * 2

def triple(x):
    return x * 3

def calculate(x_vals, f):
    return [(x, f(x)) for x in x_vals]

def plot_function_with_plotter(x_vals, f, plotter):
    plotter(calculate(x_vals, f))

def plot(x_vals, f):
    plotter = simple_plotter.plot
    plot_function_with_plotter(x_vals, f, plotter)
