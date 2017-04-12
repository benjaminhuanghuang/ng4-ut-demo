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

  it('test alphabet', () => {
    // check the content using toEqual
    expect(component.alphabet).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  });

  it('should...', () => {
    expect(component.alphabet[0]).toBe('A');
  });

  fit('should display a button using TestBed', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    const component = fixture.componentInstance;
    const element = fixture.nativeElement;
    console.log('element', element);
  });

});
