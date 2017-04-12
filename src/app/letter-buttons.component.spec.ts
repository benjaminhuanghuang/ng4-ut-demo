import { TestBed } from '@angular/core/testing';

import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LetterButtonsComponent
      ],
    }).compileComponents();
  });

  afterEach(() => {
    // clean up tear down
  });

  const component = new LetterButtonsComponent();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  it('test alphabet', () => {
    // check the content using toEqual
    expect(component.alphabet).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  });

  it('should...', () => {
    expect(component.alphabet[0]).toBe('A');
  });

  it('should display a button using TestBed', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = <HTMLElement>fixture.nativeElement;
    console.log(element);
    const buttons = element.querySelectorAll("button")
    expect(buttons.length).toBe(26);
    for (let i = 0; i < alphabet.length; i++) {
      const button = buttons.item(i);
      expect(button.textContent).toBe(alphabet.charAt(i));
      expect(button.disabled).toBe(false);
    }
  });

  it('should add letter to selection when a button is clicked', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = <HTMLElement>fixture.nativeElement;
    console.log(element);
    const buttons = element.querySelectorAll("button")
    const buttonO = buttons.item(alphabet.indexOf('O'))
    const buttonK = buttons.item(alphabet.indexOf('K'))

    expect(component.selection).toBe('');
    buttonO.click();
    expect(component.selection).toBe('O');
    expect(buttonO.disabled).toBe(true);
    buttonK.click();
    expect(component.selection).toBe('OK');
    expect(buttonK.disabled).toBe(true);
  });
});
