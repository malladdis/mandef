import { SystemUsersModule } from './system-users.module';

describe('SystemUsersModule', () => {
  let systemUsersModule: SystemUsersModule;

  beforeEach(() => {
    systemUsersModule = new SystemUsersModule();
  });

  it('should create an instance', () => {
    expect(systemUsersModule).toBeTruthy();
  });
});
