import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl:  String = environment.baseUrl;

  constructor(private http: HttpClient,private _snack: MatSnackBar) { }

  findAll():Observable<Usuario[]>{
    const url = `${this.baseUrl}/usuarios`
    return this.http.get<Usuario[]>(url)
  }

  findById(id: String): Observable<Usuario> {
    const url = `${this.baseUrl}/usuarios/${id}`
    return this.http.get<Usuario>(url)
  }

  create(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios`
    return this.http.post<Usuario>(url, usuario);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/usuarios/${id}`
    return this.http.delete<void>(url)
  }

  update(usuario: Usuario):Observable<void> {
    const url = `${this.baseUrl}/usuarios/${usuario.id}`
    return this.http.put<void>(url, usuario)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
