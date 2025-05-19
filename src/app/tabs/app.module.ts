import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';
import { ArticleComponent } from '../components/article/article.component';

@NgModule({
  declarations: [
    Tab1Page,
    ArticleComponent,   // deklarasi komponen di sini
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class Tab1PageModule {}
