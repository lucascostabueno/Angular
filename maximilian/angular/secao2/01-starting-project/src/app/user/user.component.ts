import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // zone.js
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // signal
  avatar = input.required<string>();
  name = input.required<string>();

  /* zone.js
  get imagePath() {
    return 'assets/users/' + this.avatar;
  } */

  // signal
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}
}
