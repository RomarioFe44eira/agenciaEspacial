import { Component, OnInit } from '@angular/core';

import { InfoServiceService } from '../../info-service.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {


  nav$: object;
  id: number;
  nome: string;
  valor: string;
  
  navees$: object;
  /*
  * Variables Booleans
  */
  formName: string;
  formEditOrSave: number = 0;
  viewForm: boolean = false;
  btnInclude: boolean = false;
  
  
  constructor(private data: InfoServiceService) {};

  ngOnInit() {
   this.data.getNaves().subscribe(
      data => this.nav$ = data 
    );
  };
  

  openSection(tipoAbertura:any){
    if(tipoAbertura == 'editar'){
      this.viewForm = true;
      this.formName = 'Editar';
    }
    else{
      this.viewForm = !this.viewForm;
      this.btnInclude = !this.btnInclude;
      this.formName = 'Incluir';
    }
  };
  
  salvarValor(){
    console.log('Nome: ' + this.nome + ' Valor: ' + this.valor);
  
    //this.nav$.push(
      //JSON.parse('{"id": "8883","nome":"'+ this.nome +'","valor": "' + this.valor + '"}')
  //  );
    
    this.data.updateNave(this.id, this.nome, this.valor);
    
  };
  
  save(){
    if(this.formName == 'Editar'){
      console.log('Editar Nave - Success');
      this.data.updateNave(this.id, this.nome, this.valor);
    }
    else{
      console.log('Add Nave - Success');
      this.data.postNave(this.id, this.nome, this.valor);
    }
  };
 
 
  
  execPost(id: any){
    this.data.postNave(id, this.nome, this.valor);
  };
  
  deleteInfo(i:any){
    console.log('Deleting Index: ' + i);
    this.data.deleteNave(i);
  }
  
  editInfo(i:any, index:any){
    //console.log('Index: ' + index);
    //console.log('Id: ' + this.nav$[index].id);
    //console.log('Nome: ' + this.nav$[index].nome);
    //console.log('Valor: ' + this.nav$[index].valor);
    
    //this.id = this.nav$[index].id;
    //this.nome = this.nav$[index].nome;
    //this.valor = this.nav$[index].valor;
    if(this.formName == 'Editar'){
      console.log('Editing Index: ' + i);
      this.data.updateNave(i, this.nome, this.valor);
    }
    else{
      console.log('Não foi possível editar');
    }
    
  }
  
  inputObterDados(index:any){
    this.id = this.nav$[index].id;
    this.nome = this.nav$[index].nome;
    this.valor = this.nav$[index].valor;
  };
  
  limparInputs(){
    this.id = 0;
    this.nome = "";
    this.valor = "";
  }
  
  
  focaEmMim(){
    console.log('FocaEmMim() Executado');
    this.viewForm = true;
  }
  
}
