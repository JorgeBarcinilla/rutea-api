import { CreateUserStatusDto } from 'src/modules/user/dto/user-status/create-user-status.dto';
import { UserStatus } from 'src/modules/user/entities/user-status.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * Seeder de estados de usuario
 */
export default class UserStatusSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(UserStatus);

    const data: CreateUserStatusDto[] = [
      {
        name: 'Activo',
        description: 'Este estado indica que el usuario esta activo y puede interactuar con la plataforma'
      },
      {
        name: 'Inactivo',
        description: 'Este estado indica que el usuario no esta activo y no puede interactuar con la plataforma'
      },
      {
        name: 'Bloqueado',
        description: 'Este estado indica que el usuario esta bloqueado y no puede interactuar con la plataforma'
      }
    ];

    for (const item of data) {
      if (!(await repository.findOne({ where: { name: item.name } }))) {
        await repository.insert([item]);
      }
    }
  }
}
