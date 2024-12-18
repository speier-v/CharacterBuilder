import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Users } from '../users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: Users;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserServiceService) {
    this.user = new Users();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}