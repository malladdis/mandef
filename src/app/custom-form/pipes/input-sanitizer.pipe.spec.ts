import { InputSanitizerPipe } from './input-sanitizer.pipe';

describe('InputSanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new InputSanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
