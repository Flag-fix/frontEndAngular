import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.nome = resposta.nome
      this.usuario.cpf = resposta.cpf
      this.usuario.telefone = resposta.telefone
    })
  }

  delete(): void {
    this.service.delete(this.usuario.id!).subscribe((resposta) => {
      this.router.navigate(['usuarios'])
      this.service.mensagem('Usuario deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios'])
  }

}
