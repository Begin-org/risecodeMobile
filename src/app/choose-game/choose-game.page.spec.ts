import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseGamePage } from './choose-game.page';

describe('ChooseGamePage', () => {
  let component: ChooseGamePage;
  let fixture: ComponentFixture<ChooseGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
