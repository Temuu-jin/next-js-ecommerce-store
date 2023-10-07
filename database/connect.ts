import 'server-only';
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../util/config.mjs';

setEnvironmentVariables();

// const sql = postgres({ transform: { ...postgres.camel, undefined: null } });

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();

/*
export async function getProductsFromDatabase() {
  const products = await sql`
  SELECT
    *
  FROM
    products
  `;
  return products;
}

function getProductByIdFromDatabase(id: number) {
  return sql`
  SELECT
    *
  FROM
    products
  WHERE
    id = ${id}
    `;
  return;
} */
