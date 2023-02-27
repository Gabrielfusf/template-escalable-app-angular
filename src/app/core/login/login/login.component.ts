import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { KeysStorage } from 'src/app/shared/enums/keys-storage.enum';
import { getFieldErrorFromForm, markAllFieldAsDirty } from 'src/app/shared/utils/form/form';
import { storage } from 'src/app/shared/utils/storage';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  display: boolean = true;
  searchForm?: FormGroup;
  loadingTable: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm();
    const TOKEN = storage.getEncripted(KeysStorage.TOKEN); 
    if (TOKEN){
      this.router.navigate(['home']);
      this.display = false;
    }
  }

  submitForm() {
    this.searchForm?.markAllAsTouched();
    console.log(this.searchForm);
    markAllFieldAsDirty(this.searchForm);
    if (this.searchForm?.valid){
      this.loadingTable = true;
      const params = {
        usuario: this.searchForm?.value.usuario,
        password: this.searchForm?.value.password,
      }

      this.loginService.login(params).subscribe({
        next: (sucess) => {
          console.log(sucess);
          
          storage.setEncripted(KeysStorage.TOKEN, sucess.token);
          storage.setEncripted(KeysStorage.USER_LOGGED, JSON.stringify(sucess.user));
        
          this.loadingTable = false;
          this.display = false;
          this.router.navigate(['home']);
         
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({
            severity: "error",
            detail:  err.error.message? err.error.message : "Erro ao tentar se conectar com servidor." ,
          });
          this.loadingTable = false;
        },
      });

      
    }
  }

  createForm() {

    this.searchForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });

  }


  getFieldError(field: string) {
    return getFieldErrorFromForm(this.searchForm, field);
  }

}
