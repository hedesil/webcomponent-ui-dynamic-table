import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [DynamicTableComponent],
  entryComponents: [DynamicTableComponent],
})

export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Se usa el metodo createCustomElement de Angular para crear un wc adecuado al estandar
    const customElement = createCustomElement(DynamicTableComponent, {injector: this.injector});
    customElements.define('orange-ui-dynamic-table', customElement);
  }
}




