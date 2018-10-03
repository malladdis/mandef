import { NgezGanttModule } from './ngez-gantt.module';

describe('NgezGanttModule', () => {
  let ngezGanttModule: NgezGanttModule;

  beforeEach(() => {
    ngezGanttModule = new NgezGanttModule();
  });

  it('should create an instance', () => {
    expect(ngezGanttModule).toBeTruthy();
  });
});
