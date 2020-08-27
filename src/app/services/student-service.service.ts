import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private current_port = window.location.port;
  private mongo_url;
 

  constructor(private http: HttpClient) {
    if(this.current_port=='4200')
      this.mongo_url= 'http://localhost:3000';
    else
      this.mongo_url= '';
  }
  
  getStudentsMongo()
  {
    return this.http.get(this.mongo_url+"/list");
  }
  addStudentsMongo(StudName, StudFamilyName){
    const myNewStudentObj = {
      studName: StudName,
      studFamily : StudFamilyName
    }
    return this.http.post(this.mongo_url+"/add", myNewStudentObj);
  }
  deleteStudentsMongo(id)
  {
    return this.http.delete(this.mongo_url+"/remove/"+id);

  }
  updateStudentsMongo(studId, StudName, StudFamilyName)
  {
    const myNewStudentObj = {
      studId: studId,
      studName: StudName,
      studFamily : StudFamilyName
    }
    return this.http.put(this.mongo_url+"/update", myNewStudentObj);

  }

  
  
}

