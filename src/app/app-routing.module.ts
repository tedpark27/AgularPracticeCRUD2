import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { ListEmployeesComponent } from './employees/list-employees.component';

const routes: Routes = [
  {path:'list', component:ListEmployeesComponent},
  {
    path:'create', 
    component:CreateEmployeeComponent,
    canDeactivate:[createEmployeeCanDeactivateGuardService]
  
  },
  {path:'employees/:id', component:EmployeeDetailsComponent},
  {path: '', redirectTo:'/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
