import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../student/student.component';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { StudentRoutingModule } from './student.routing.module';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../views/widgets/widgets.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    UtilitiesModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    FormModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    ModalModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
  ],
})
export class StudentModule {}
