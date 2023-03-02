import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = 'http://localhost/214szft/receptke_angular/API/database.php';

  constructor(private http: HttpClient) {}

  getRecepts() {
    return this.http.get(this.serverUrl+'?table=receptek');
  }

  getRecept(id: number){
    return this.http.get(this.serverUrl+'?table=receptek&id='+id);
  }

  postRecept() {}

  updateRecept() {}

  deleteRecept(id: number) {

    let data = {  table: "receptek",
      id: id
    };

    return this.http.delete(this.serverUrl, {body: data});
  }

}
