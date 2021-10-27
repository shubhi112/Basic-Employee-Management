import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})

export class AddDepComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddDepComponent>,
    public service:DepartmentService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
this.resetForm();

  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData = {
      DepartmentId:0,
      DepartmentName:''
    }
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    
    this.service.addDepartment(form.value).subscribe(res=>
      {
        this.resetForm(form);
        this.snackBar.open(res.toString(), '', {
          duration:5000,
          verticalPosition:'top'
        });
      }
      )
    // this.service.addDepartment(form.value).subscribe(res =>{
    //   this.resetForm(form);
    //   alert(res);
    // })
  }

}
