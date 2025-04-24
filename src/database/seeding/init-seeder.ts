import { DataSource } from 'typeorm';
import { runSeeders, Seeder } from 'typeorm-extension';
import UserGenderSeeder from './user/user-gender.seed';

/**
 *
 */
export default class InitSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    await runSeeders(dataSource, {
      seeds: [UserGenderSeeder]
    });
  }
}
