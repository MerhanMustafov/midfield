import { pgClient } from '@configs/pgDB.configs';

pgClient.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY , email VARCHAR(100), first_name VARCHAR(55), last_name VARCHAR(55), user_name VArCHAR(100), password VARCHAR(255))',
  (err) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log("Table 'users' created successfully");
    }
  },
);
pgClient.query('DROP TABLE users', (err) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log("Table 'users' created successfully");
  }
});
