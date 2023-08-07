import Helper from './Helper';

describe('Helper', () => {

    describe('reduce', () => {
        it('should iterate by all keys', () => {
            const keys = Helper.reduce(
                { foo: 'bar', q: 42, color: 'red' },
                (result, _, key) => {
                    result.push(key);
                    return result;
                },
                [] as string[],
            );
            keys.sort();
            expect(keys).toEqual(['color', 'foo', 'q']);
        });

        it('should return correct sum of values', () => {
            const sum = Helper.reduce(
                { foo: 100, q: 42, color: 13 },
                (result, value) => result + value,
                10,
            );
            expect(sum).toEqual(165);
        });

        it('should pass to callback function correct params', () => {
            const testObj: { [key: string]: any } = { foo: 'bar', q: 42, color: 'red' };
            const counts = Helper.reduce(
                testObj,
                (result, value, key, obj) => {
                    expect(obj).toBe(testObj);
                    expect(key in testObj).toBeTruthy();
                    expect(testObj.hasOwnProperty(key)).toBeTruthy();
                    expect(testObj[key]).toEqual(value);
                    return result + 1;
                },
                0,
            );
            expect(counts).toEqual(3);
        });
    });

    describe('map', () => {
        it('should iterate by all keys and update values', () => {
            const newObj = Helper.map(
                { foo: 'bar', q: 42, test: null },
                (value) => value + '-new',
            );
            expect(newObj).toEqual({ foo: 'bar-new', q: '42-new', test: 'null-new'});
        });
    });

    describe('diffKeysByValue', () => {
        it('should return keys with different values', () => {
            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 42, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
            )).toEqual(['bar']);

            expect(Helper.diffKeysByValue(
                { bar: 42, baz: 84 },
                { foo: 10, bar: 42 },
            )).toEqual(['baz', 'foo']);

            expect(Helper.diffKeysByValue(
                {},
                { foo: 10, bar: 42 },
            )).toEqual(['foo', 'bar']);

            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 42 },
                {},
            )).toEqual(['foo', 'bar']);

            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 43, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
            )).toEqual([]);
        });

        it('should ignore props difference for provided props', () => {
            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 42, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
                ['bar']
            )).toEqual([]);

            expect(Helper.diffKeysByValue(
                { bar: 42, baz: 84 },
                { foo: 10, bar: 42 },
                ['foo']
            )).toEqual(['baz']);

            expect(Helper.diffKeysByValue(
                {},
                { foo: 10, bar: 42 },
                ['foo', 'bar']
            )).toEqual([]);

            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 42 },
                {},
                ['bar']
            )).toEqual(['foo']);

            expect(Helper.diffKeysByValue(
                { foo: 10, bar: 43, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
                []
            )).toEqual([]);
        });
    });

});