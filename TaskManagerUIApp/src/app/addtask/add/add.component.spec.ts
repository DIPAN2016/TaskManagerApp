import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,
        FormsModule , 
        ReactiveFormsModule
      ],
      declarations: [
        AddComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should not have as title 'Task Manager'`, () => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(undefined);
  });
 
});



