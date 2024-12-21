import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Adicione o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'login-page';

  // Controla a visibilidade do modal
  isModalOpen: boolean = false;

  // Abre o modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Fecha o modal
  closeModal(event?: MouseEvent): void {
    if (event && event.target === event.currentTarget) {
      this.isModalOpen = false; // Fecha se clicar fora do modal
    } else if (!event) {
      this.isModalOpen = false;
    }
  }
}
