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


  // search(params: any, idInstituicao: number): Observable<any> {
  //   return this.http.get<any>(`${getHost()}/api/xxxxx`, {params} );
  // }

  // delete(params: Array<lancamentoPregaoDelete>) {
  //   return this.http.post(`${getHost()}/api/xxxx/excluir`, params);
  // }

  // salvar(params: tipagem) {
  //   return this.http.post(`${getHost()}/api/xxxx`, params);
  // }
  // editar(params: tipagem) {
  //   return this.http.put(`${getHost()}/api/xxxx`, params);
  // }

  // AlteraClienteLotePregao(params: tipagem, clienteBolsaId: number, instituicaoId: number, data: string) {
  //   return this.http.put(`${getHost()}/api/xxxxx/alterar-cliente`, params);
  // }


  //Quando a response for arquivo
  // gerarRelatorio(params: tipagem): Observable<any> {
  //   const headers = new HttpHeaders();
  //   const requestOptions: Object = {
  //     headers: headers,
  //     responseType: 'arraybuffer'
  //   }
  //   return this.http.get<any>(`${getHost()}/api/xxxx`, requestOptions);
  // }

  // buscaPersonalizada(params: tipagem): Observable<any> {
  //   const headers = new HttpHeaders();
  //   const requestOptions: Object = {
  //     headers: headers,
  //     params: params
  //   }
  //   return this.http.get<any>(`${getHost()}/api/xxxxxxxx`, requestOptions );
  // }

}
