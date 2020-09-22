import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseCharacterPage } from './choose-character.page';

describe('ChooseCharacterPage', () => {
  let component: ChooseCharacterPage;
  let fixture: ComponentFixture<ChooseCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCharacterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
