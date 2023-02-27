import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as _moment from 'moment';
// import { NavbarService } from 'src/app/shared/services/navbar.service';
import { Router } from '@angular/router';
// import { storage } from 'src/app/shared/utils/storage';
// import { KeysStorage } from 'src/app/shared/enums/keys-storage.enum';
const moment = _moment;
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    item: MenuItem[] = [];
    version: string = '0..';
    dateTime: any;
    usuario: any;

    constructor(
        // private navService: NavbarService,
        // private messageService: MessageService,
        private router: Router
    ) { }



    ngOnInit() {
        // this.usuario = JSON.parse(storage.getEncripted(KeysStorage.USER_LOGGED) as string);
        this.dateTime = moment().locale('pt-br').format('dddd').toUpperCase() + `, ${moment().locale('pt-br').format('LL').toUpperCase()}`;

        this.item = [
            {
                label: "TESTE",
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Alterar Senha', icon: 'pi pi-fw pi-pencil', command: (event) => { this.changePassword() }},
                    {
                        separator: true
                    },
                    { label: 'Sair', icon: 'pi pi-fw pi-power-off', command: (event) => { this.logout() } }
                ]
            }
        ];
    }

    logout() {
        sessionStorage.clear();
        window.location.reload();
     }
     
     changePassword() {
        this.router.navigate(['/login'], { queryParams: { changePassword: 'true' } });
     }
}
