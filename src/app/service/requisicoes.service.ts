import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost{
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  private readonly _httpClientAng = inject(HttpClient);
  getposts() : Observable<IPost[]>{
    return this._httpClientAng.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
 
}
