import calc

run_test = lambda f: f()

def with_mocked_value(obj, attr, val, f):
    old_val = getattr(obj, attr)
    setattr(obj, attr, val)
    f()
    setattr(obj, attr, old_val)

@run_test
def test_double():
    assert calc.double(1) == 2
    assert calc.double(2) == 4
    assert calc.double(3) == 6

@run_test
def test_triple():
    assert calc.triple(1) == 3
    assert calc.triple(2) == 6
    assert calc.triple(3) == 9

@run_test
def test_calculate():
    assert calc.calculate([1, 2, 3], calc.double) == [(1, 2), (2, 4), (3, 6)]
    assert calc.calculate([1, 2, 3], calc.triple) == [(1, 3), (2, 6), (3, 9)]

@run_test
def test_abstract_plotter():
    called = False
    def mock_plotter(tups):
        assert tups  == [(1, 6), (2, 12), (3, 18), (4, 24)]
        nonlocal called
        called = True

    f = lambda x: calc.double(calc.triple(x))
    calc.plot_function_with_plotter([1, 2, 3, 4], f, mock_plotter)
    assert(called)

@run_test
def test_actual_plot():
    called = False
    def mock_plotter(tups):
        assert tups  == [(1, 2), (2, 4)]
        nonlocal called
        called = True

    with_mocked_value(
        calc.simple_plotter,
        "plot",
        mock_plotter,
        lambda: calc.plot([1, 2], calc.double) ,
    )
    assert(called)
