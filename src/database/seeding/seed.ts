import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import dataSource from '../config/config-database';
import InitSeeder from './init-seeder';

const options: DataSourceOptions & SeederOptions = {
  ...dataSource.options,
  seeds: [InitSeeder]
};

const dataSourceSeed = new DataSource(options);
dataSourceSeed.initialize().then(async () => {
  await dataSourceSeed.synchronize(true);
  await runSeeders(dataSourceSeed);
  process.exit();
});
