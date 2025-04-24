import { CreateEventStatusDto } from 'src/modules/event/dto/event-status/create-event-status.dto';
import { EventStatus } from 'src/modules/event/entities/event-status.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * Seeder de estados de evento
 */
export default class EventStatusSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(EventStatus);

    const data: CreateEventStatusDto[] = [
      {
        name: 'Activo',
        description:
          'Este estado indica que el evento esta activo y puede ser visualizado y los usuarios pueden inscribirse'
      },
      {
        name: 'En curso',
        description:
          'Este estado indica que el evento esta en curso y los usuarios inscritos pueden participar.No se pueden inscribir nuevos usuarios'
      },
      {
        name: 'Finalizado',
        description: 'Este estado indica que el evento ha finalizado y solo se puede visualizar la información'
      },
      {
        name: 'Cancelado',
        description: 'Este estado indica que el evento ha sido cancelado.'
      },
      {
        name: 'Pendiente',
        description: 'Este estado indica que el evento esta pendiente de aprobación.'
      },
      {
        name: 'Rechazado',
        description: 'Este estado indica que el evento ha sido rechazado.'
      },
      {
        name: 'Suspendido',
        description: 'Este estado indica que el evento ha sido suspendido.'
      },
      {
        name: 'Pausado',
        description: 'Este estado indica que el evento ha sido pausado.'
      }
    ];

    for (const item of data) {
      if (!(await repository.findOne({ where: { name: item.name } }))) {
        await repository.insert([item]);
      }
    }
  }
}
