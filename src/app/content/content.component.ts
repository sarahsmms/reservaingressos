import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  usuario: any = {
    nome: null,
    ultimoNome: null,
    cpf: null,
    dataNasc: null,
    email: null,
    nomeAc: null,
    ultimoNomeAc: null,
    cpfAc: null,
    dataNascAc: null,
    emailAc: null,
    telefone: null
  };

  onSubmit(form){
   console.log(form);
  }

  toogleTag(){
    this.showme=!this.showme
  }
  constructor(private http: HttpClient) {

  }
  showme: boolean = false;
  ngOnInit() {  }

  consultaCEP(cep, form){
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados , form));
      }
    }
  }
  populaDadosForm(dados , form){
    form.setValue({
      nome: form.value.nome,
      ultimoNome: form.value.ultimoNome,
      cpf: form.value.cpf,
      dataNasc: form.value.dataNasc,
      email: form.value.email,
      nomeAc: form.value.nomeAc,
      ultimoNomeAc: form.value.ultimoNomeAc,
      cpfAc: form.value.cpfAc,
      dataNascAc: form.value.dataNascAc,
      emailAc: form.value.emailAc,
      telefone: form.value.telefone,
      cep: dados.cep,
      rua: dados.logradouro
    });
  }
}

