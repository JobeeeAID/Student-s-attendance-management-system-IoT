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
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { SeanceComponent } from './seance.component';
import { SeanceRoutingModule } from './seance.routing.module';

import {
  ScheduleAllModule,
  RecurrenceEditorAllModule,
  ScheduleModule,
} from '@syncfusion/ej2-angular-schedule';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [SeanceComponent],
  imports: [
    CommonModule,
    ScheduleAllModule,
    ScheduleModule,
    DateTimePickerModule,
    RecurrenceEditorAllModule,
    SeanceRoutingModule,
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
  ],
})
export class SeanceModule {}
