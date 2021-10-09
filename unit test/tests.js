
function fun2(val) {    return val % 2 === 0;}
test('fun2()', function() {    ok(fun2(0), 'succeed'); })