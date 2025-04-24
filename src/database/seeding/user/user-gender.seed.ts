import { CreateUserGenderDto } from 'src/modules/user/dto/user-gender/create-user-gender.dto';
import { UserGender } from 'src/modules/user/entities/user-gender.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * Seeder de géneros de usuario
 */
export default class UserGenderSeeder implements Seeder {
  /**
   *
   * @param {DataSource} dataSource - Data source
   */
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(UserGender);

    const data: CreateUserGenderDto[] = [
      {
        name: 'Masculino',
        description: 'Este genero es para personas que se identifican como hombre'
      },
      {
        name: 'Femenino',
        description: 'Este genero es para personas que se identifican como mujer'
      },
      {
        name: 'No binario',
        description: 'Este genero es para personas que no se identifican como hombre o mujer'
      },
      {
        name: 'Transgénero',
        description: 'Este genero es para personas que nacieron con un género diferente al que se identifican'
      },
      {
        name: 'Intersexual',
        description:
          'Este genero es para personas que nacieron con características sexuales que no se ajustan a las definiciones típicas de "masculino" o "femenino"'
      },
      {
        name: 'Agénero',
        description: 'Este genero es para personas que no se identifican con ningún género'
      },
      {
        name: 'Otro',
        description: 'Esta opcion es para personas que no se identifican con ninguno de los géneros anteriores'
      }
    ];

    for (const item of data) {
      if (!(await repository.findOne({ where: { name: item.name } }))) {
        await repository.insert([item]);
      }
    }
  }
}
