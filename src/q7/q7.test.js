const { expect } = require('chai');
const { arrangeBy } = require('./q7')

describe('q7.js', () => {
    
    let objects;
    beforeEach(() => {
        objects = [
            {
                id: 1,
                name: 'bob'
            },
            {
                id: 2,
                name: 'sally',
                bool: true
            },
            null,
            4,
            [],
            {
                id: 3,
                name: 'bob',
                age: 30
            },
            {
                name: 'pooh',
                complex: {
                    mate: {
                        what: 'an object'
                    }
                }
            },
            undefined,
            {},
            {
                id: 4
            },

        ];
    });


    it('can arrange by string', () => {
        const expected = {
            "bob": [
                {
                    "id": 1,
                    "name": "bob"
                },
                {
                    "id": 3,
                    "name": "bob",
                    "age": 30
                }
            ],
            "sally": [
                {
                    "id": 2,
                    "name": "sally",
                    "bool": true
                }
            ],
            "pooh": [
                {
                    "name": "pooh",
                    "complex": {
                        "mate": {
                            "what": "an object"
                        }
                    }
                }
            ]
        };
        expect(arrangeBy('name')(objects)).eql(expected);
    });

    it('can arrage by int', () => {
        const expected = {
            "1": [
                {
                    "id": 1,
                    "name": "bob"
                }
            ],
            "2": [
                {
                    "id": 2,
                    "name": "sally",
                    "bool": true
                }
            ],
            "3": [
                {
                    "id": 3,
                    "name": "bob",
                    "age": 30
                }
            ],
            "4": [
                {
                    "id": 4
                }
            ]
        };
        expect(arrangeBy('id')(objects)).eql(expected);
    });

    it('can arrage by bool', () => {
        const expected = {
            true: [
                {
                    id: 2,
                    name: 'sally',
                    bool: true
                }
            ]
        }
        expect(arrangeBy('bool')(objects)).eql(expected);
    })

    it('can arrange by bool and not mutate the original array', () => {
        const expected = {
            true: [
                {
                    id: 2,
                    name: 'sally',
                    bool: true
                }
            ]
        }
        const other = Object.assign(objects, {})
        const output = arrangeBy('bool')(objects);

        expect(output).eql(expected);
        expect(objects).equals(other);
    })
})
