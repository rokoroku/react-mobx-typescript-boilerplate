import {
  APP_ENVIRONMENT,
  fromString as appEnvrionmentFromString,
} from 'app/constants';

class Config {
  constructor() {
    this._environment = APP_ENVIRONMENT.Undefined;
    this._todoStorePersistenceMinutes = 0;
  }

  private _environment: APP_ENVIRONMENT;

  get environment(): APP_ENVIRONMENT {
    return this._environment;
  }

  private _todoStorePersistenceMinutes: number;

  get todoStorePersistenceMinutes(): number {
    return this._todoStorePersistenceMinutes;
  }

  Load(): Config {
    this._environment = appEnvrionmentFromString(
      process.env.REACT_APP_ENVIRONMENT as string
    );
    if (this.environment === APP_ENVIRONMENT.Undefined) {
      console.log('WARNING APP ENV IS UNDEFINED');
    }
    this._todoStorePersistenceMinutes = parseInt(
      process.env.REACT_APP_TODO_STORE_PERSISTENCE_MINUTES,
      10
    );

    return this;
  }
}

export const config = new Config().Load();
