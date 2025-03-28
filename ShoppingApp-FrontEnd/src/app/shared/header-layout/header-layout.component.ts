import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css'],
})
export class HeaderLayoutComponent {
  isRegistering: boolean = false; // Mặc định hiển thị form đăng ký

  toggleForm() {
    console.log('toggleForm() được gọi');
    this.isRegistering = !this.isRegistering;
  }
}
