import { CreateEventTypeDto } from 'src/modules/event/dto/event-type/create-event-type.dto';
import { EventType } from 'src/modules/event/entities/event-type.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * Seeder de tipos de evento
 */
export default class EventTypeSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(EventType);

    const data: CreateEventTypeDto[] = [
      {
        name: 'Running',
        description: 'Carrera de atletismo'
      }
    ];

    for (const item of data) {
      if (!(await repository.findOne({ where: { name: item.name } }))) {
        await repository.insert([item]);
      }
    }
  }
}
