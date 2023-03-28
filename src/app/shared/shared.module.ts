import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    BarChartComponent,
    LineChartComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
