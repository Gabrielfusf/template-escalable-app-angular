import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { OnComponentDeactivate } from 'src/app/shared/guards/can-deactivate.guard';
import { buildDateWithoutTZ, convertDates } from 'src/app/shared/utils/convertDates';
import { getFieldErrorFromForm, markAllFieldAsDirty } from 'src/app/shared/utils/form/form';
import { isADMDropList, sexoOps } from 'src/app/shared/utils/isADM.dropdown';
import { isADMtype, Medico, Medicos, sexoType } from '../models/medicos.model';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.scss'],
  providers: [ConfirmationService]
})
export class MedicoFormComponent implements OnInit, OnComponentDeactivate {
  searchForm?: FormGroup;
  loadingTable: boolean = false;
  admList: isADMtype[] = [];
  sexoOps: sexoType[] = [];
  isEdit: boolean = false;
  sexo: string = "";
  id_usuario: number = 0;
  id_usuario_medico: number = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private medicoService: MedicoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.admList = isADMDropList;
    this.sexoOps = sexoOps;
    this.searchForm?.controls['isADM'].disable();

    this.route.queryParams
      .subscribe((params: any) => {
       
        if(params.medicos){
          this.isEdit = true;
          let form = JSON.parse(params.medicos)
          this.searchForm?.patchValue(form);
          this.sexo = form.sexo;
          this.id_usuario = form.id_usuario;
          this.id_usuario_medico = form.id_usuario_medico;
          this.searchForm?.get('data_nascimento')?.setValue(new Date(form.data_nascimento));
          let defineLabel = form.sexo == "M"? "Masculino" : "Feminino"
          this.searchForm?.get('sexo')?.setValue({label: defineLabel,value: form.sexo});
          this.searchForm?.controls['password'].disable();
          this.searchForm?.controls['isADM'].disable();
          console.log(form);
        }
      
      });
  }

  submitForm() {
    this.searchForm?.markAllAsTouched();
    console.log(this.searchForm);
    markAllFieldAsDirty(this.searchForm);

    if (this.searchForm?.valid) {
        if(this.isEdit){
      this.editrarMedico();
    }else{
      this.salvarMedico();
    }

     
    } else {
      this.messageService.add({
        severity: "info",
        detail: "Preencher todos os campos.",
      });
    }

  

  }
  editrarMedico() {
    
    const params: Medico = this.searchForm?.value;
    params.isADM =  false;
    params.status =  "A";
    params.id_usuario = this.id_usuario;
    params.id_usuario_medico = this.id_usuario_medico;
    params.sexo = this.searchForm?.value.sexo.value? this.searchForm?.value.sexo.value : this.sexo;
    params.data_nascimento = convertDates(new Date(params.data_nascimento));
    this.loadingTable = true;

      console.log("-->", this.searchForm?.value)
    this.medicoService.editarMedico(params).subscribe({
      
      next: (sucess) => {
        this.messageService.add({
          severity: 'success',
          detail: 'Médico alterado com sucesso.',
        });
        this.createForm();
        this.loadingTable = false;
        this.router.navigate(['/medico']);
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: "error",
          detail:  "Houve um problema ao salvar.",
        });
        this.loadingTable = false;
      },
    });
  }

  salvarMedico() {
    this.searchForm?.value
    // const params: Medico = this.searchForm?.value;
    const params = {
      nome: this.searchForm?.value.nome? this.searchForm?.value.nome : "",
      sexo: this.searchForm?.value.sexo.value? this.searchForm?.value.sexo.value : "F",
      data_nascimento: this.searchForm?.value.data_nascimento? convertDates(new Date (this.searchForm?.value.data_nascimento)): new Date(),
      email: this.searchForm?.value.email? this.searchForm?.value.email : "",
      usuario: "",
      password: this.searchForm?.value.password? this.searchForm?.value.password : "",
      CPF: this.searchForm?.value.CPF? this.searchForm?.value.CPF : "",
      RG: this.searchForm?.value.RG? this.searchForm?.value.RG : "",
      CRM: this.searchForm?.value.CRM? this.searchForm?.value.CRM : "",
      especialidade: this.searchForm?.value.especialidade? this.searchForm?.value.especialidade : ""
    
    }
   
    params.data_nascimento = convertDates(new Date(params.data_nascimento));
    this.loadingTable = true;
    
    this.medicoService.criarMedico(params).subscribe({
      
      next: (sucess) => {
        console.log("salvo", sucess);
        this.messageService.add({
          severity: 'success',
          detail: 'Médico salvo com sucesso.',
        });
        this.createForm();
        this.loadingTable = false;
        this.router.navigate(['/medico']);
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: "error",
          detail:  "Houve um problema ao salvar.",
        });
        this.loadingTable = false;
      },
    });
  }

  createForm() {

    this.searchForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      sexo: ['M', Validators.required],
      data_nascimento: ['', Validators.required],
      usuario: [''],
      password: ['', Validators.required],
      // password_confirm: ['', Validators.required],
      CPF: ['', Validators.required],
      RG: ['', Validators.required],
      CRM: ['', Validators.required],
      especialidade: ['', Validators.required],
      isADM: [true, Validators.required],

    });

  }



  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.searchForm?.pristine) return true;
    return new Promise((resolve) => {
      this.confirmationService.confirm({
        message: "Todas as informações preenchidas serão perdidas.",
        accept: () => resolve(true),
        reject: () => resolve(false),
      });
    });
  }

  getFieldError(field: string) {
    return getFieldErrorFromForm(this.searchForm, field);
  }

}
