import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }
  postStudentData(data:any):Observable<any>{
    return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data)

  }
}
