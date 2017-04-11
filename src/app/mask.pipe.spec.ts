import { MaskPipe } from './mask.pipe';

// need @types/jasmine
describe('MaskPipe', () => {
    let maskPipe: MaskPipe;

    afterAll(() => {

    });

    afterAll(() => {

    });

    beforeEach(() => {
        //setup
        maskPipe = new MaskPipe();
    });

    afterEach(() => {
        // clean up tear down
    });


    it('should hide everything when no letters selected', () => {
        const masked = maskPipe.transform('ANGULAR', '');
        expect(masked).toBe('*******');
    });

    it('should reveal only the selected letter', () => {
        const masked = maskPipe.transform('ANGULAR', 'A');
        expect(masked).toBe('A****A*');
    });

    it('should reveal only the selected letters', () => {
        const masked = maskPipe.transform('ANGULAR', 'ABCL');
        expect(masked).toBe('A***LA*');
    });

    it('should reveal everything when all letters selected', () => {
        const masked = maskPipe.transform('ANGULAR', 'ANGULR');
        expect(masked).toBe('ANGULAR');
    });


    it("check", function () {
        expect('abcd').toEqual('dcba');
    });
});

