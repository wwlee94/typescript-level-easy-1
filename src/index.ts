import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './App';

// Connect typeORM mysql
createConnection()
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch(error => console.log(error));

app.listen(3000, 'localhost', () => {
  console.log('Server running :)');
});
