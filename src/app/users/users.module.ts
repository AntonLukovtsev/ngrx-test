import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule,
    StoreModule.forFeature('users', reducers, { metaReducers }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserEffects, UserService, Actions]
})
export class UsersModule {}
