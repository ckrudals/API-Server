import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { MissionModule } from "./mission/mission.module";
import { ProfileModule } from "./profile/profile.module";
import { GroupModule } from "./group/group.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
    AccountModule,
    MissionModule,
    ProfileModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
