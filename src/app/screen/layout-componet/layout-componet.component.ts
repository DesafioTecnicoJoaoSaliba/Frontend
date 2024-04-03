import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/user/service/login.service';

@Component({
  selector: 'app-layout-componet',
  templateUrl: './layout-componet.component.html',
  styleUrls: ['./layout-componet.component.scss'],
})
export class LayoutComponetComponent implements OnInit {
  menuItems: any[] = [
    {
      label: 'Inicio',
      route: '/produto/list',
    },
    { label: 'Lista Produto', route: '/produto/list' },
    { label: 'Cadastro Produto', route: '/produto/cadastro' },

  ];

  public currentUrl: string;

  constructor(
    private router: Router,
    private readonly location: Location,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.location.onUrlChange(() => {
      this.currentUrl = this.location.path();
    });

    this.currentUrl = this.location.path();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
