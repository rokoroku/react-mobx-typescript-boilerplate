export enum APP_ENVIRONMENT {
  Undefined,
  Local,
  Staging,
  Production,
}

export function fromString(value: string): APP_ENVIRONMENT {
  switch (value) {
    case 'local':
      return APP_ENVIRONMENT.Local;
    case 'staging':
      return APP_ENVIRONMENT.Staging;
    case 'production':
      return APP_ENVIRONMENT.Production;
    default:
      return APP_ENVIRONMENT.Undefined;
  }
}

export function toString(value: APP_ENVIRONMENT): string {
  switch (value) {
    case APP_ENVIRONMENT.Local:
      return 'local';
    case APP_ENVIRONMENT.Staging:
      return 'staging';
    case APP_ENVIRONMENT.Production:
      return 'production';
    default:
      return 'undefined';
  }
}
