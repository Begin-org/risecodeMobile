import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HdPlayPage } from './hd-play.page';

describe('HdPlayPage', () => {
  let component: HdPlayPage;
  let fixture: ComponentFixture<HdPlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdPlayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HdPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
