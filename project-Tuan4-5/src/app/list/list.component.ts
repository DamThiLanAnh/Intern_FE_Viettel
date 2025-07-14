import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  users: User[] = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
  ];

  editingUser: User | null = null;
  isModalVisible = false;

  openAddModal() {
    this.editingUser = null;
    this.isModalVisible = true;
  }

  openEditModal(user: User) {
    this.editingUser = { ...user };
    this.isModalVisible = true;
  }

  handleOk() {
    if (this.editingUser?.id) {
      const index = this.users.findIndex(u => u.id === this.editingUser?.id);
      if (index > -1) this.users[index] = this.editingUser!;
    } else {
      const newId = Math.max(...this.users.map(u => u.id)) + 1;
      this.users.push({ ...this.editingUser!, id: newId });
    }
    this.isModalVisible = false;
  }

  handleCancel() {
    this.isModalVisible = false;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
