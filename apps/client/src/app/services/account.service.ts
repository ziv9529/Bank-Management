import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private serverUrl: string = environment.serverUrl


  constructor(private httpClient: HttpClient) { 

  }

  getActionsByAccountNumber(accountNumber:number):Observable<any>{
    return this.httpClient.get(`${this.serverUrl}/account_actions/${accountNumber}`)
  }
  makeActionByAccountNumber(accountNumber:number,body:any):Observable<any>{
    return this.httpClient.post(`${this.serverUrl}/account_actions/${accountNumber}`,body)
  }

}
