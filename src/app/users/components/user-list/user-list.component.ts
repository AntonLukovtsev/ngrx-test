import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  HostBinding,
  AfterViewChecked,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Output() removeUserEvent = new EventEmitter();
  @HostBinding('style.height') height: string;

  constructor() {
    this.height = '100%';
  }

  ngOnInit() {}

  removeUser(userId) {
    this.removeUserEvent.emit(userId);
  }
}
