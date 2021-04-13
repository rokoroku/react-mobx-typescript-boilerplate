export enum APP_ENVIRONMENT {
    Undefined,
    Local,
    Staging,
    Production
}

export function appEnvrionmentFromString(value: string): APP_ENVIRONMENT {
    switch (value) {
        case "local":
            return APP_ENVIRONMENT.Local;
        case "staging":
            return APP_ENVIRONMENT.Staging;
        case "production":
            return APP_ENVIRONMENT.Production;
        default:
            return APP_ENVIRONMENT.Undefined;
    }
}
