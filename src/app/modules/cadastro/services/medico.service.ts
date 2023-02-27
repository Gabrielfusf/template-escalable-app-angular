import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) {}

  getMedicos() {
    return this.http.get<any>(`${environment.BASE_URL}/medicosweb`);
  }

  criarMedico(medico: any) {
    const headers = new HttpHeaders();
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.http.post<any>(`${environment.BASE_URL}/usuario_medico`, medico, requestOptions);
  }

  editarMedico(medico: Medico) {
    const headers = new HttpHeaders();
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.http.put<any>(`${environment.BASE_URL}/usuario_medico`, medico, requestOptions);
  }

}
