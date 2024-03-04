import { pgClient } from '@configs/pgDB.configs';

pgClient.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY , email VARCHAR(100), firstName VARCHAR(55), lastName VARCHAR(55), userName VArCHAR(100), password VARCHAR(255))',
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
