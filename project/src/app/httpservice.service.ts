import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { reason } from './reason.dto';
import { types } from './types.dto';
import { location } from './location.dto';
import { category } from './category.dto';
import { division } from './division.dto';
import { priority } from './priority.dto';
import { department } from './department.dto';
import { project } from './Project.dto';
import { status } from './status.dto';
import { ProjectCount } from './dashboard-component/ProjectCount.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  apiUrl="https://localhost:44372";
  http=inject(HttpClient);

  constructor() { }


  login(email:string,password:string){
    return this.http.post<{token:string}>(this.apiUrl+'/api/Login/Login',{
      
        "email": email,
        "password": password
      
    })
  }
  public getAllreasons():Observable<reason[]>{
    return this.http.get<reason[]>(this.apiUrl+'/api/Project/getallreasons');
   }
   public getAlltypes():Observable<types[]>{
    return this.http.get<types[]>(this.apiUrl+'/api/Project/getalltypes');
   }
   public getAlllocations():Observable<location[]>{
    return this.http.get<location[]>(this.apiUrl+'/api/Project/getalllocations');
   }
   public getAllcategory():Observable<category[]>{
    return this.http.get<category[]>(this.apiUrl+'/api/Project/getallcategory');
   }
   public getAlldivisions():Observable<division[]>{
    return this.http.get<division[]>(this.apiUrl+'/api/Project/getalldivisions');
   }
   public getAllpriority():Observable<priority[]>{
    return this.http.get<priority[]>(this.apiUrl+'/api/Project/getallpriority');
   }
   public getAlldepartments():Observable<department[]>{
    return this.http.get<department[]>(this.apiUrl+'/api/Project/getalldepartments');
   }
   public getAllstatus():Observable<status[]>{
    return this.http.get<status[]>(this.apiUrl+'/api/Project/getAllstatus');
   }

   public getAllProjects():Observable<project[]>{
    return this.http.get<project[]>(this.apiUrl+'/api/Project/GetProjects');
   }


  
  // public getRequest(url: string): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + url);
  // }

  // public postRequest(url: string, param: {}) {
  //   return this.http.post(this.apiUrl + url, param)
  //     .pipe(
  //       catchError(this.errorHandler.bind(this)) // then handle the error
  //     );
  // }
//  public postRequest(endpoint: string, data: any): Observable<any> {
//     const url = `${this.apiUrl}/${endpoint}`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });

//     return this.http.post(url, data, { headers });
//   }
saveProject(projectData: project): Observable<any> {
  return this.http.post(`${this.apiUrl}/api/Project/saveproject`, projectData);
}

  public getRequest(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }
  getprioritybyid(id: any): Observable<priority> {
    const url = `${this.apiUrl}/api/Project/getprioritybyid/{id}`;
    return this.http.get<priority>(url);
  }
  getbytype(id: any): Observable<types> {
    const url = `${this.apiUrl}/api/Project/getbytype/{id}`;
    return this.http.get<types>(url);
  }
  getdepartmentbyid(id: any): Observable<department> {
    const url = `${this.apiUrl}/api/Project/getdepartmentbyid/{id}`;
    return this.http.get<department>(url);
  }
  getlocationbyid(id: any): Observable<location> {
    const url = `${this.apiUrl}/api/Project/getlocationbyid/{id}`;
    return this.http.get<location>(url);
  }
  getcategorybyid(id: any): Observable<category> {
    const url = `${this.apiUrl}/api/Project/getcategorybyid/{id}`;
    return this.http.get<category>(url);
  }
  getReasonById(id: any): Observable<reason> {
    const url = `${this.apiUrl}/api/Project/getreasonbyid/{id}`;
    return this.http.get<reason>(url);
  }
  getdivisionbyid(id: any): Observable<division> {
    const url = `${this.apiUrl}/api/Project/getdivisionbyid/{id}`;
    return this.http.get<division>(url);
  }

  updateProjectStatus(project:any): Observable<any> {
    return this.http.put(this.apiUrl+"/api/Project/UpdateStatusProject", project);
  }
  getProjectCount(): Observable<ProjectCount> {
    return this.http.get<ProjectCount>(this.apiUrl+"/api/Project/projectcount");
  }

  // public putRequest(url: string, param: {}): Observable<any> {
  //   return this.http.put<any>(this.apiUrl + url, param).pipe(
  //     catchError(this.errorHandler)
  //   );
  // }

  // public deleteRequest(url: string, id: number): Observable<any> {
  //   return this.http.delete<any>(this.apiUrl + url + id).pipe(
  //     catchError(this.errorHandler)
  //   );
  // }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = 'error code :$(error.status)\nMessage:${error.message}';
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  

}
