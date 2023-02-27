import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public visibleSidebar1 = false;
  item: MenuItem[] = [];
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {

    this.item = [
      {
        label: 'Médicos',
        routerLink: 'medico',
        command: () => {
                  this.closeMenu()
                }
      }
        
      
        ];
    }

    closeMenu() {
        this.visibleSidebar1 = false;
    }
}
