import { CustomFormModule } from './custom-form.module';

describe('CustomFormModule', () => {
  let customFormModule: CustomFormModule;

  beforeEach(() => {
    customFormModule = new CustomFormModule();
  });

  it('should create an instance', () => {
    expect(customFormModule).toBeTruthy();
  });
});
