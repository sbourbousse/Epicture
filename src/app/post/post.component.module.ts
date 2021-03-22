import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PostComponent } from './post.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [PostComponent],
  exports: [PostComponent]
})
export class PostComponentModule {}