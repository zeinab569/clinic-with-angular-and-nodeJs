import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderrComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderrComponent,
    SidebarComponent
  ],
  exports:[
    HeaderrComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
