import pgLib from "pg-promise";

export function createSingleton<T>(name: string, create: () => T): T {
  const s = Symbol.for(name);
  let scope = (global as any)[s];
  if (!scope) {
    scope = { ...create() };
    (global as any)[s] = scope;
  }
  return scope;
}

const pgp = pgLib();

interface IDatabaseScope {
  db: pgLib.IDatabase<any>;
}

export function getDB(): IDatabaseScope {
    return createSingleton<IDatabaseScope>("db-scope", () => {
      if (!process.env.DB_CONNECTION)
        throw new Error("Missing DB Connection String");
      return {
        db: pgp(process.env.DB_CONNECTION),
      };
    });
}