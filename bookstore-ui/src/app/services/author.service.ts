import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  public listAuthors() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/authors/list")
  }
}
