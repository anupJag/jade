import * as pino from 'pino';

let _loggerInstance: pino.Logger | null = null;

export const createLogger = (appName: string, logLevel = 'debug') =>
  (_loggerInstance =
    _loggerInstance ||
    pino({
      name: appName,
      level: logLevel,
      prettyPrint: {
        colorize: true,
        levelFirst: true,
        translateTime: true,
        ignore: 'pid,time,hostname',
      },
    }));

export const getLogger = () => _loggerInstance;
