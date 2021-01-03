import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto:boolean= false;

  togglePhotoPreview(){
    this.previewPhoto =!this.previewPhoto;
  }
  employee:Employee={
    id: 1,
    name: '',
    gender: '',
    email: '',
    phoneNumber: 4 ,
    contactPreference: '',
    dateOfBirth: new Date(),
    department :'select' ,
    isActive: true ,
    photoPath: '',
    password: '',
    confirmPassword: ''

  };
  constructor(private _employeeService : EmployeeService,
      private _router :Router) {
    
  }
  

  ngOnInit(): void {
  }
  departments:Department[]=[
    {id:1, name:'HelpDesk'},
    {id:2, name:'HR'},
    {id:3, name:'IT'},
    {id:4, name:'payroll'}
  ];
  id!: number;
  fullName!: string;
  email!: string;
  phoneNumber!: number;
  gender!:string;
  contactPreference!: string;
  isActive!:boolean;
  department!: string;
  dateOfBirth!:  Date;
  photoPath!: string;
  password!: string;
  confirmPassword!: string;

  saveEmployee(): void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
