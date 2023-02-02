import { Component } from '@angular/core';
import { FormGroup,FormControl ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl()

        }
      ),
      educations:new FormArray([]),
      sourcetype:new FormControl(),
      Direct:new FormControl(),
      Reffer:new FormControl(),
      //nested form//
      company:new FormGroup(
        {
          name:new FormControl(),
          location:new FormControl(),
          package:new FormControl(),
          offerDate:new FormControl()

        }
      )
    }
  );
  get educationsFormArray(){
    return this.studentForm.get('educations')as FormArray
  }
  add(){
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification:new FormControl(),
          year:new FormControl(),
          percentages:new FormControl()

        }
      )
    )
  }
  delete(i:number){
    this.educationsFormArray.removeAt(i)
  }
  
}
