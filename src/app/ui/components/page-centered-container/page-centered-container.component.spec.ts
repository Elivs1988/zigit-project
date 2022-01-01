import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCenteredContainerComponent } from './page-centered-container.component';

describe('PageCenteredContainerComponent', () => {
  let component: PageCenteredContainerComponent;
  let fixture: ComponentFixture<PageCenteredContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCenteredContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCenteredContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
