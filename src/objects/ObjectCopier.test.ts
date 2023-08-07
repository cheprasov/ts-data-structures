import { ObjectCopier } from './ObjectCopier';

describe('ObjectCopier', () => {
   describe('copy', () => {
      it('should copy Date instance', () => {
         const date = new Date('2020-10-10T10:10:10');
         const copiedDate = ObjectCopier.copy(date);
         expect(date).not.toBe(copiedDate);
         expect(date.getTime()).toEqual(copiedDate.getTime());
      });

       it('should copy URL instance', () => {
           const url = new URL('https://cv.cheprasov.com');
           const copiedUrl = ObjectCopier.copy(url);
           expect(url).not.toBe(copiedUrl);
           expect(url.toString()).toEqual(copiedUrl.toString());
       });


       it('should copy URLSearchParams instance', () => {
           const params = new URLSearchParams('foo=bar&q=42');
           const copiedParams = ObjectCopier.copy(params);
           expect(params).not.toBe(copiedParams);
           expect(params.toString()).toEqual(copiedParams.toString());
       });

       it('should throw an Error if copier is not provided', () => {
           function Foo(){}
           // @ts-ignore
           const obj = new Foo();
           expect(() => {
               ObjectCopier.copy(obj);
           }).toThrowError('Copier function is not provided for constructor Foo');
       });
   });
});