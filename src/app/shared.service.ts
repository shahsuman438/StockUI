import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:3000";
  
  constructor(private http:HttpClient) { }

  getTransactionList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Transac/');
  }
  getCompList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Company/');
  }

  addTransaction(val:any){
    return this.http.post<any[]>(this.APIUrl + '/Transac/',val);
  }

  deleteTransaction(val:any){
    return this.http.delete<any[]>(this.APIUrl + '/Transac/'+val);
  }

}
