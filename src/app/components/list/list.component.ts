import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../../services/student-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  profileForm = new FormGroup({
    studName: new FormControl(''),
    studFamily: new FormControl(''),
  });
  updateForm = new FormGroup({
    studName: new FormControl(''),
    studFamily: new FormControl(''),

  });

  openUpdateBox : object;
  list_mongo: object;
  list: object;
  constructor (private studentService: StudentServiceService){}


  ngOnInit() {
    this.getAllStudents();
  }

     getAllStudents()
  {
     this.studentService.getStudentsMongo().subscribe(data_mongo=> this.list_mongo = data_mongo, null, ()=>console.log(this.list_mongo));
     //await this.studentService.getStudentsMongo().toPromise().then(data_mongo=> this.list_mongo = data_mongo);
    //console.log(this.list_mongo);
  }
  addStudentsMongo()
  {
    this.studentService.addStudentsMongo(this.profileForm.controls['studName'].value, this.profileForm.controls['studFamily'].value ).subscribe(null,null,()=>this.getAllStudents());
    this.profileForm.reset();
    //this.studentService.addStudentsMongo(this.profileForm.controls['studName'].value, this.profileForm.controls['studFamily'].value );
    //this.getAllStudents();

  }
  deleteStudentsMongo(id)
  {
    this.studentService.deleteStudentsMongo(id).subscribe(null,null,()=>this.getAllStudents());
    //this.studentService.deleteStudentsMongo(id);
    //this.getAllStudents();

}
    updateStudentsMongo(studId)
{
 
 this.studentService.updateStudentsMongo(studId, this.updateForm.controls['studName'].value, this.updateForm.controls['studFamily'].value).subscribe(null,null,()=>this.getAllStudents());
 this.updateForm.reset();

 //this.studentService.updateStudentsMongo(studId, this.updateForm.controls['studName'].value, this.updateForm.controls['studFamily'].value).toPromise().then(()=>this.getAllStudents());
   //promise.then(()=>this.getAllStudents());
   //await this.getAllStudents();
  //console.log(this.list_mongo);
  //this.getAllStudents();


}

}