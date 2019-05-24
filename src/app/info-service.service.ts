import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  
  constructor(private http: HttpClient) { };
  
  urlBase: string = 'https://angular-dev-romariofe44eira.c9users.io/';


  getAstonautas(){
    return this.http.get(this.urlBase + 'astronauta')
  };
  
 getAstonauta(astoId) {
    return this.http.get(this.urlBase + 'astronauta/' + astoId)
  }


  getMissoes() {
    return this.http.get(this.urlBase + 'missao')
  };
  
  getNaves(){
    return this.http.get(this.urlBase + 'naves');
  };
  
  
  getNavesId(id:number){
    console.log(this.http.get(this.urlBase + 'naves/' + id));
  };
  
  postNave(id: number, nome: string, valor:string){
    return this.http.post(this.urlBase + 'naves',
    {
      "id": id,
      "nome": nome,
      "valor": valor
    })
      .subscribe(
        data => {
            console.log("Requisição POST Success!", data);
        },
        error => {
            console.log("Error: Request in POST", error);
        }
      );
  }
  
  
  
  updateNave(id:number, nome: string, valor:string){
    this.http.patch(this.urlBase + 'naves/' + id,
      {
        "id": id,
        "nome": nome,
        "valor": valor
      })
      .subscribe(
        data => {
            console.log("PATCH Request is successful ", data);
        },
        error => {
            console.log("Error PATCH", error);
        }
      );
  }
  
  
  deleteNave(id: number){
     this.http.delete(this.urlBase + 'naves/' + id)
      .subscribe(
        data => {
            console.log("Request: DELETE is successful ", data);
        },
        error => {
            console.log("Error DELETE", error);
        }
      );
    
    
  }

  
  deleteAstronauta(id: number){
    const url = `https://angular-dev-romariofe44eira.c9users.io/astronauta/${id}`;
    return this.http.delete(url);
  }
  
}
