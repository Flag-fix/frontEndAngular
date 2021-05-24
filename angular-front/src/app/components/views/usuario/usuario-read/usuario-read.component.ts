import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'acoes'];

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta)
      this.usuarios = resposta
    })

  }

  irParaCreateUsuarios(){
    this.router.navigate(["usuarios/create"])
  }
}