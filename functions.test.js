const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toEqual(4); //toEqual is what is called a MATCHER in jest. there are many
})