import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Adicione o CommonModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
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
