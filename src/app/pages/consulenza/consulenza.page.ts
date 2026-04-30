import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var Calendly: any;

@Component({
  selector: 'app-consulenza-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './consulenza.page.html',
})
export class ConsulenzaPage implements AfterViewInit {
  ngAfterViewInit(): void {
    // Se Calendly è già caricato (grazie all'index.html), inizializziamo subito il widget
    if (typeof Calendly !== 'undefined') {
      this.loadCalendly();
    } else {
      // Altrimenti aspettiamo che lo script sia pronto (fallback)
      const checkCalendly = setInterval(() => {
        if (typeof Calendly !== 'undefined') {
          this.loadCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      // Timeout di sicurezza dopo 5 secondi per fermare il controllo
      setTimeout(() => clearInterval(checkCalendly), 5000);
    }
  }

  private loadCalendly(): void {
    const element = document.querySelector('.calendly-inline-widget');
    if (element && element.innerHTML === '') {
      Calendly.initInlineWidget({
        url: 'https://calendly.com/italiano-andrea87/1hour',
        parentElement: element,
      });
    }
  }
}

