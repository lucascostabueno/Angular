import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // signals
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  /*  zone.js
  selectedUser = DUMMY_USERS[randomIndex]; */

  // signals
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  /*   zone.js
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  } */

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // signals
    this.selectedUser.set(DUMMY_USERS[randomIndex]);

    /* zone.js
    this.selectedUser = DUMMY_USERS[randomIndex]; */
  }
}
