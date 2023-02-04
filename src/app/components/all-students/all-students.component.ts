import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  public studentTableData:any=[]
  public order:string="";
  public column:string="";
  public term:any=[]
  constructor(private _studentService:StudentService){
    _studentService.getStudentData().subscribe(
      (data:any)=>{
        this.studentTableData=data
      },
      (err:any)=>{
        alert("error")

      }
    )
  }
  page(page:number){
    this._studentService.getPageData(page).subscribe(
      (data:any)=>{
        this.studentTableData=data
          
      }
    )
    
  }
  sorting(){
    this._studentService.getSortingData(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentTableData=data
      },
      (err:any)=>{
        alert("error occurs")
      }
    )
  }
  filtering (){
    this._studentService.getFilterData(this.term).subscribe(
      (data:any)=>{
        this.studentTableData=data
      },
      (err:any)=>{
        alert("error")
      }
    )
  }



  
}
