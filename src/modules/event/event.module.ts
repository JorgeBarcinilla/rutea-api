import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventParticipantProductStatusLog } from './entities/event-participant-product-status-log.entity';
import { EventParticipantProductStatus } from './entities/event-participant-product-status.entity';
import { EventParticipantProduct } from './entities/event-participant-product.entity';
import { EventParticipantStatus } from './entities/event-participant-status.entity';
import { EventParticipant } from './entities/event-participant.entity';
import { EventProduct } from './entities/event-product.entity';
import { EventStatus } from './entities/event-status.entity';
import { EventType } from './entities/event-type.entity';
import { Event } from './entities/event.entity';
import { EventController } from './event.controller';
import { EventService } from './event.service';

/**
 *
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Event,
      EventStatus,
      EventType,
      EventProduct,
      EventParticipant,
      EventParticipantStatus,
      EventParticipantProduct,
      EventParticipantProductStatus,
      EventParticipantProductStatusLog
    ])
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
