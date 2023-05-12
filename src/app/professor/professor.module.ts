import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalBodyComponent,
  ModalComponent,
  ModalContentComponent,
  ModalFooterComponent,
  ModalModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { ProfessorRoutingModule } from './professor.routing.module';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../views/widgets/widgets.module';

@NgModule({
  declarations: [ProfessorComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    UtilitiesModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    ModalModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    FormsModule,
  ],
})
export class ProfessorModule {}
