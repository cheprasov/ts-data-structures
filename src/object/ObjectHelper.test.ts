import ObjectHelper from './ObjectHelper';

describe('ObjectHelper', () => {

    describe('reduce', () => {
        it('should iterate by all keys', () => {
            const keys = ObjectHelper.reduce(
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
            const sum = ObjectHelper.reduce(
                { foo: 100, q: 42, color: 13 },
                (result, value) => result + value,
                10,
            );
            expect(sum).toEqual(165);
        });

        it('should pass to callback function correct params', () => {
            const testObj: { [key: string]: any } = { foo: 'bar', q: 42, color: 'red' };
            const counts = ObjectHelper.reduce(
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
            const newObj = ObjectHelper.map(
                { foo: 'bar', q: 42, test: null },
                (value) => value + '-new',
            );
            expect(newObj).toEqual({ foo: 'bar-new', q: '42-new', test: 'null-new'});
        });
    });

    describe('diffKeysByValue', () => {
        it('should return keys with different values', () => {
            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 42, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
            )).toEqual(['bar']);

            expect(ObjectHelper.diffKeysByValue(
                { bar: 42, baz: 84 },
                { foo: 10, bar: 42 },
            )).toEqual(['baz', 'foo']);

            expect(ObjectHelper.diffKeysByValue(
                {},
                { foo: 10, bar: 42 },
            )).toEqual(['foo', 'bar']);

            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 42 },
                {},
            )).toEqual(['foo', 'bar']);

            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 43, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
            )).toEqual([]);
        });

        it('should ignore props difference for provided props', () => {
            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 42, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
                ['bar']
            )).toEqual([]);

            expect(ObjectHelper.diffKeysByValue(
                { bar: 42, baz: 84 },
                { foo: 10, bar: 42 },
                ['foo']
            )).toEqual(['baz']);

            expect(ObjectHelper.diffKeysByValue(
                {},
                { foo: 10, bar: 42 },
                ['foo', 'bar']
            )).toEqual([]);

            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 42 },
                {},
                ['bar']
            )).toEqual(['foo']);

            expect(ObjectHelper.diffKeysByValue(
                { foo: 10, bar: 43, baz: 84 },
                { foo: 10, bar: 43, baz: 84 },
                []
            )).toEqual([]);
        });
    });

});