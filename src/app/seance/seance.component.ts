import { Component, ViewChild, OnInit } from '@angular/core';
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
  ScheduleComponent,
  ActionEventArgs,
} from '@syncfusion/ej2-angular-schedule';

import { SeanceService } from '../../services/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss'],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService,
  ],
})
export class SeanceComponent implements OnInit {
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = {
    dataSource: [],
  };

  @ViewChild('schedule', { static: false })
  public scheduleObj: ScheduleComponent;

  constructor(private seanceService: SeanceService) {}

  ngOnInit(): void {
    this.loadSeances();
  }

  loadSeances() {
    this.seanceService.getAllSeances().subscribe((listSeances) => {
      console.log(listSeances);
      let datasource: any[] = [];
      listSeances.forEach((seance) => {
        let time = seance.time.split(':');
        let durationStr = seance.duration.split(':');
        let date = seance.date.split('-');

        let startDate = new Date(
          Number(date[0]),
          Number(date[1]) - 1,
          Number(date[2]),
          Number(time[0]),
          Number(time[1])
        );
        let endDate = new Date(
          startDate.getTime() +
            Number(durationStr[0]) * 60 * 60 * 1000 +
            Number(durationStr[1]) * 60 * 60 * 1000
        );
        console.log(endDate);
        datasource.push({
          Id: seance.id,
          Subject: seance.elementName,
          StartTime: startDate,
          EndTime: endDate,
        });
      });

      this.eventSettings.dataSource = datasource;
      this.scheduleObj.refresh();
    });
  }

  onPopupOpen(args: any) {
    console.log('popUp args', args.data);
    console.log('getEvent result', this.scheduleObj.getEvents(args.data));
  }

  onActionComplete(args: ActionEventArgs): void {
    console.log('actionComplete', args.requestType, args);

    switch (args.requestType) {
      case 'viewNavigate':
      case 'dateNavigate':
        this.scheduleObj.refresh();
        break;
      case 'toolBarItemRendered':
        break;
      default:
    }
  }
}
