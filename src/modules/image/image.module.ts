import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageStorage } from './entities/image-storage.entity';
import { Image } from './entities/image.entity';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([Image, ImageStorage])],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
