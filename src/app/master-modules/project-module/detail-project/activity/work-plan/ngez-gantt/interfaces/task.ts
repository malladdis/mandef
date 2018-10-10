export interface Task {
  id: number;
  name: string;
  start: Date;
  end: Date;
  percentComplete: number;
  status?: string;
  target: number;
  actual: number;
  budget?: number;
}
