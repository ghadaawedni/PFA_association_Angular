import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefinitionComponent} from './definition/definition.component';
import {StructureComponent} from './structure/structure.component';

@NgModule({
  declarations: [
    DefinitionComponent,
    StructureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
