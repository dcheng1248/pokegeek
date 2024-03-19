import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIndexComponent } from './pokemon-index.component';

describe('PokemonComponent', () => {
  let component: PokemonIndexComponent;
  let fixture: ComponentFixture<PokemonIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
