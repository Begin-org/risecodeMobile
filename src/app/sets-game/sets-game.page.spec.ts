import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetsGamePage } from './sets-game.page';

describe('SetsGamePage', () => {
  let component: SetsGamePage;
  let fixture: ComponentFixture<SetsGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetsGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
