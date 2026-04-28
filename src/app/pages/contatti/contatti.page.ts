import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatti-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatti.page.html',
})
export class ContattiPage {
  private readonly router = inject(Router);

  protected sent = false;

  protected model = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  protected submit(): void {
    this.sent = true;
    window.setTimeout(() => this.router.navigateByUrl('/'), 4000);
  }
}

