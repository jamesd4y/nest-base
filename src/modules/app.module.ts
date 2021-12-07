import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configValidation } from '../validation/config.validation';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: configValidation
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
