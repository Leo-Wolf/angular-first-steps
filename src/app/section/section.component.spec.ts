import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../filter.pipe';
import { SectionComponent } from './section.component';
import { FormsModule } from '@angular/forms';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent ,FilterPipe ],
      imports:[ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

