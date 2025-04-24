import { CreateUserTypeDto } from 'src/modules/user/dto/user-type/create-user-type.dto';
import { UserType } from 'src/modules/user/entities/user-type.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * Seeder de tipos de usuario
 */
export default class UserTypeSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(UserType);

    const data: CreateUserTypeDto[] = [
      {
        name: 'Organizador',
        description: 'Este tipo de usuario tiene las funcionalidades para crear y gestionar eventos'
      },
      {
        name: 'Usuario',
        description: 'Este tipo de usuario tiene las funcionalidades basicas para interactuar con los eventos'
      }
    ];

    for (const item of data) {
      if (!(await repository.findOne({ where: { name: item.name } }))) {
        await repository.insert([item]);
      }
    }
  }
}
