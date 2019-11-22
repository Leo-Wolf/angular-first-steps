import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './section/section.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        SectionComponent,
        FilterPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
