import {Task} from './task';

export interface Project {
  id: number;
  name: string;
  start?: Date;
  end?: Date;
  tasks: Task[];
}
