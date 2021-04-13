import { APP_ENVIRONMENT, appEnvrionmentFromString } from '../constants';

class Config {
    constructor() {
        this._environment = APP_ENVIRONMENT.Undefined;
    }

    private _environment: APP_ENVIRONMENT

    get environment(): APP_ENVIRONMENT {
        return this._environment;
    }

    Load(): Config {
        this._environment = appEnvrionmentFromString(process.env.REACT_APP_ENVIRONMENT as string)
        if (this.environment === APP_ENVIRONMENT.Undefined) {
            console.log("WARNING APP ENV IS UNDEFINED")
        }

        return this;
    }
}

export const config = (new Config()).Load()
