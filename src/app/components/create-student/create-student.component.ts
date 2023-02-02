import { Component } from '@angular/core';
import { FormGroup,FormControl ,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      email:new FormControl(null,[Validators.required]),
      batch:new FormControl(null,[Validators.required,Validators.min(2000),Validators.max(2030)]),
      address:new FormGroup(
        {
          city:new FormControl(null,[Validators.required]),
          mandal:new FormControl(null,[Validators.required]),
          district:new FormControl(null,[Validators.required]),
          state:new FormControl(null,[Validators.required]),
          pincode:new FormControl(null,[Validators.required])

        }
      ),
      educations:new FormArray([]),
      sourcetype:new FormControl(),
      Direct:new FormControl(),
      Reffer:new FormControl(),
      //nested form//
      company:new FormGroup(
        {
          name:new FormControl(null,[Validators.required]),
          location:new FormControl(null,[Validators.required]),
          package:new FormControl(null,[Validators.required]),
          offerDate:new FormControl(null,[Validators.required])

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
          qualification:new FormControl(null,[Validators.required]),
          year:new FormControl(null,[Validators.required]),
          percentages:new FormControl(null,[Validators.required])

        }
      )
    )
  }
  delete(i:number){
    this.educationsFormArray.removeAt(i)
  }
  
}
