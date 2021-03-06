import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HttpClientXsrfModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './addtask/add/add.component';
import { UpdateComponent } from './updatetask/update/update.component';
import { ViewComponent } from './viewtask/view/view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    //,AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'addtask', component: AddComponent },
      { path: '', redirectTo: 'addtask', pathMatch: 'full' },
      { path: 'viewtask', component: ViewComponent },
      // { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'update', component: UpdateComponent },
      // { path: '', redirectTo: 'update', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
