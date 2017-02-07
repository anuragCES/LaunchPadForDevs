import { TestBed } from '@angular/core/testing';
import { AppComponent } from './../app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('App', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [AppComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'App should create AppComponent');
  });

});