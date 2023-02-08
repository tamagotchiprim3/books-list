import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CorePageRoutingModule } from './core-page-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [CorePageComponent],
  imports: [CommonModule, CorePageRoutingModule],
})
export class CorePageModule {}
