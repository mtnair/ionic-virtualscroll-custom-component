import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomVirtualScrollItemComponent } from './custom-virtual-scroll-item.component';

describe('CustomVirtualScrollItemComponent', () => {
  let component: CustomVirtualScrollItemComponent;
  let fixture: ComponentFixture<CustomVirtualScrollItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomVirtualScrollItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomVirtualScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
