import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFoundationSites } from './ngx-foundation-sites';

describe('NgxFoundationSites', () => {
  let component: NgxFoundationSites;
  let fixture: ComponentFixture<NgxFoundationSites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFoundationSites],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxFoundationSites);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
