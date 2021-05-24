import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {


  usuario: Usuario = {
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe((resposta) => {
      this.router.navigate(['usuarios'])
      this.service.mensagem('Usuario criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem("O campo Nome e Cpf é Obrigatório!")
      }
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios'])
  }

}
