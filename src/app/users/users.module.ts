import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { UserService } from './services/user.service';
import { UserAddComponent } from './components/user-add/user-add.component';
import { SharedModule } from '../shared.module';
const MATERIAL = [
  MatButtonModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule
];
@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    ...MATERIAL,
    StoreModule.forFeature('users', reducers, { metaReducers }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserEffects, UserService, Actions]
})
export class UsersModule {}
