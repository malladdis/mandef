import { ProgramRoutingModule } from './program-routing.module';

describe('ProgramRoutingModule', () => {
  let programRoutingModule: ProgramRoutingModule;

  beforeEach(() => {
    programRoutingModule = new ProgramRoutingModule();
  });

  it('should create an instance', () => {
    expect(programRoutingModule).toBeTruthy();
  });
});
