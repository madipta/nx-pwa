import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NewsBodyDirective } from './news-body.directive';
import { NewsItemComponent } from './news-item.component';

@NgModule({
  declarations: [NavComponent, NewsBodyDirective, NewsItemComponent],
  imports: [CommonModule],
  exports: [NavComponent, NewsBodyDirective, NewsItemComponent],
})
export class AppCommonModule {}
