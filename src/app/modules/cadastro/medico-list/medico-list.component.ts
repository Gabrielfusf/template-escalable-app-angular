import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Medicos } from '../models/medicos.model';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.scss'],
  providers: [ConfirmationService]
})
export class MedicoListComponent implements OnInit {
  medicos: Array<Medicos> = [];
  loadingTable: boolean = false;
  constructor(
    private messageService: MessageService,
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getMedicosFromList();
  }

  getMedicosFromList(){
    this.loadingTable = true;
    this.medicoService.getMedicos().subscribe({
      next: (medics) => {
        this.medicos = medics;
        this.loadingTable = false;

      },
      error: (err) => {
        this.loadingTable = false;
        this.messageService.add({
          severity: 'error',
          detail:  'Algo deu errado ao buscar os dados.',
        });
      },
    });
  }

  goToEdit(medico: Medicos) {
    this.router.navigate([`/medico/editar/${medico.id_usuario_medico}`], { queryParams: { medicos: JSON.stringify(medico) } });
  }

  confirmDelete(medico: Medicos){
    return new Promise<boolean>((resolve) => {
        this.confirmationService.confirm({
          message:
            'Deseja excluir o registro?',
          rejectLabel: 'Não',
          acceptLabel: 'Sim',
          rejectButtonStyleClass: 'p-button-danger',
          accept: () => {
            resolve(true);
            console.log("-->", medico);
            // this.handleDeleteMovimento(cliente);
          },
          reject: () => {
            resolve(false);
           }
        });
      
    });
  }

  tableCols = [
    { label: 'Nome', field: 'nome' , sortable: true},
    { label: 'E-mail', field: 'email' , sortable: true} ,
    { label: 'Especialidade', field: 'especialidade' , sortable: true},
    { label: 'Status', field: 'status', sortable: true },
    { label: 'Ações', field: '', sortable: false },

  ];

}
