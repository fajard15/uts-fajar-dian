import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [],
})
export class ArticleComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() image!: string;
}
