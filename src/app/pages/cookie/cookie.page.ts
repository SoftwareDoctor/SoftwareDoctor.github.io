import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie.page.html',
})
export class CookiePage {}

