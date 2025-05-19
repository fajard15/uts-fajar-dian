import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Modul Angular standar

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,      // Ini yang penting, tandai sebagai standalone
  imports: [CommonModule], // Import modul yang dibutuhkan (misal ngIf, ngFor, dll)
})
export class ArticleComponent {}
