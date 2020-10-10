import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HdGamePage } from './hd-game.page';

describe('HdGamePage', () => {
  let component: HdGamePage;
  let fixture: ComponentFixture<HdGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HdGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
