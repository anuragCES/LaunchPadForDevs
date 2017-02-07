import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// My Components
import { DashboardComponent } from './../../app/dashboard/dashboard.component';
import { BoardListComponent } from './../../app/board/board-list/board-list.component';

describe('Dashboard Tests', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            declarations: [DashboardComponent],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        });
    });

    it ('Should render DashboardComponent', () => {
        let component = TestBed.createComponent(DashboardComponent);
        expect(component.componentInstance instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
    })

    it ('Dashboard should have title as dashboard', () => {
        let component = TestBed.createComponent(DashboardComponent);
        const header = component.debugElement.query(By.css('h1'));
        const element = header.nativeElement;
        expect(element.textContent).toContain('Dashboard');
    });

    // it ('Dashboard should have board-list and board-from', () => {
    //     let component = TestBed.createComponent(DashboardComponent);
    //     // const header = component.debugElement.query(By.directive());
    //     // const element = header.nativeElement;
    //     // expect(element.textContent).toContain('Dashboard');
    //     const element = component.debugElement.query(By.all())
    //     console.log(element.nativeElement);
        
    // });
})