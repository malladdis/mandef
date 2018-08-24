export class AppResult {
  protected errors: string[] = [];
  protected messages: string[] = [];
  constructor(protected success: boolean,
              protected data?: any,
              messages?: any,
              errors?: any) {
      this.errors = this.errors.concat([errors]);
      if (errors instanceof Array) {
        this.errors = errors;
      }
      this.messages = this.messages.concat([messages]);
      if (messages instanceof Array) {
        this.messages = messages;
      }
  }

  getData() {
    return this.data;
  }
  isSuccess() {
    return this.success;
  }
  getErrors(): string[] {
    return this.errors.filter(val => !!val);
  }

  getMessages(): string[] {
    return this.messages.filter(val => !!val);
  }
}
