import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
 
  constructor(private fb: FormBuilder) { }
  flagText=false;
employeeInfo = this.fb.group({
    employeeName : ['',Validators.required],
    employeeEmail:['',[Validators.required,Validators.email]],
    employeePhone:['',[Validators.required,Validators.pattern('[5-9]{1}[0-9]{9}')]],
    employeeDOB:['',Validators.required],
    employeeAdd:['',Validators.required],
  })

  submitHandler(){
    if(this.employeeInfo.status==='VALID'){
      this.flagText=true;
      console.log(this.employeeInfo.value)
    }else{
      this.flagText=false
      alert("form is invalid")
    }
    
  }

  ngOnInit(): void {
  }

}
