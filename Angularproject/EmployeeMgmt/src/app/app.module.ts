import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule} from'@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [AddDepComponent, EditDepComponent, AddEmpComponent, EditEmpComponent]
})
export class AppModule { }
