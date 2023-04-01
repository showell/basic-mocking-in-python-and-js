assert = require("assert");
calc = require("./calc");

function run_test(s, f) { f();}

function with_mocked_value(obj, attr, val, f) {
    old_val = obj[attr];
    obj[attr] = val;
    f();
    obj[attr] = old_val;
}

run_test("double", () => {
    assert.equal(calc.double(1), 2);
    assert.equal(calc.double(2), 4);
    assert.equal(calc.double(3), 6);
});

run_test("triple", () => {
    assert.equal(calc.triple(1), 3);
    assert.equal(calc.triple(2), 6);
    assert.equal(calc.triple(3), 9);
});

run_test("calculate", () => {
    assert.deepEqual(
        calc.calculate([1, 2, 3], calc.double),
        [[1, 2], [2, 4], [3, 6]],
    );
    assert.deepEqual(
        calc.calculate([1, 2, 3], calc.triple),
        [[1, 3], [2, 6], [3, 9]],
    );
});

run_test("abstract plotter", () => {
    called = false;
    function mock_plotter(tups) {
        assert.deepEqual(tups, [[1, 6], [2, 12], [3, 18], [4, 24]]);
        called = true;
    }

    f = (x) => calc.double(calc.triple(x));
    calc.plot_function_with_plotter([1, 2, 3, 4], f, mock_plotter)
    assert.equal(called, true)
});

run_test("actual plot", () => {
    called = false;
    function mock_plotter(tups) {
        assert.deepEqual(tups, [[1, 2], [2, 4]]);
        called = true;
    }

    with_mocked_value(
        calc.imports.simple_plotter,
        "plot",
        mock_plotter,
        () => { 
            calc.plot([1, 2], calc.double);
        },
    );
    assert.equal(called, true)
});
