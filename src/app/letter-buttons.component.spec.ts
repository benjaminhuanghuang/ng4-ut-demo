import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {

  const component = new LetterButtonsComponent();

  fit('should display a button for each letter of the alphabet', () => {
    expect(component.alphabet).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  });

  it('should...', () => {
    expect(component.alphabet[0]).toEqual('A');
  });

});
