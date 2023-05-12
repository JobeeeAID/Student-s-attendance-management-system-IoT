import { Enumerations } from '../enums/enumerations';
import { Element } from './element';
import { Salle } from './salle';
import { Semester } from './semester';

export class Seance {
  id: number;
  date: Date;
  semester: Semester;
  element: Element;
  salle: Salle;
  type: Enumerations.SeanceType;
  time: any;
  duration: any;
}
