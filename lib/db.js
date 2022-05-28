import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
});

export async function sql_query(query_string, values = []) {
  try {
    const results = await db.query(query_string, values);
    await db.end()
    return results;
  } catch (e) {
      throw Error(e.message)
  } 
}
   