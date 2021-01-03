import { Component, Input,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-desplay-employee',
  templateUrl: './desplay-employee.component.html',
  styleUrls: ['./desplay-employee.component.css']
})
export class DesplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  private selectedEmployeeId: number;

 
  

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedEmployeeId=+this._route.snapshot.paramMap.get('id');
  }

  

 



}
