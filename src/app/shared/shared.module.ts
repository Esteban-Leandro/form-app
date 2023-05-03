import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMmenuComponent } from './components/side-mmenu/side-mmenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMmenuComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports: [
    SideMmenuComponent
  ],
})
export class SharedModule { }
