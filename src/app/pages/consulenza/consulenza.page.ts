import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-consulenza-page',
  standalone: true,
  templateUrl: './consulenza.page.html',
})
export class ConsulenzaPage implements AfterViewInit {
  ngAfterViewInit(): void {
    const existing = document.querySelector('script[data-calendly-widget="true"]');
    if (existing) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.setAttribute('data-calendly-widget', 'true');
    document.body.appendChild(script);
  }
}

