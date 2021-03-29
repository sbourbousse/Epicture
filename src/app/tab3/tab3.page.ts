import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentTab="my-posts"

  constructor(
    private authService: AuthService,
    private router: Router) {}

  changeTab(newTab: string) {
    this.currentTab = newTab;
  }

  disconnect() {
    this.authService.removeItem("user");
    this.router.navigate(['/'])
  }

}
