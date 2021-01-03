import { Employee } from "../models/employee.model";
import { CreateEmployeeComponent } from "./create-employee.component";
import {CanDeactivate} from '@angular/router';

export class createEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent):boolean {
        if(component.createEmployeeForm.dirty){
            return confirm('Are you sure you want to discard your changes ?')
        }
        return true;
    };
}
