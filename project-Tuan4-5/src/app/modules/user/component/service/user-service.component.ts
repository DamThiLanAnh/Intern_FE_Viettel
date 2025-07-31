import { Injectable } from '@angular/core';
import { User } from '../../user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private formBuilder: FormBuilder) { }

  private users: User[] = [
    {
      id: 1,
      email: 'john.doe@example.com',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      email: 'alice.johnson@example.com',
      first_name: 'Alice',
      last_name: 'Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      email: 'charlie.brown@example.com',
      first_name: 'Charlie',
      last_name: 'Brown',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 5,
      email: 'david.brown@example.com',
      first_name: 'David',
      last_name: 'Brown',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 6,
      email: 'emily.davis@example.com',
      first_name: 'Emily',
      last_name: 'Davis',
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    {
      id: 7,
      email: 'oliver.jones@example.com',
      first_name: 'Oliver',
      last_name: 'Jones',
      avatar: 'https://i.pravatar.cc/150?img=7'
    },
    {
      id: 8,
      email: 'sophia.williams@example.com',
      first_name: 'Sophia',
      last_name: 'Williams',
      avatar: 'https://i.pravatar.cc/150?img=8'
    }

  ];

  getUsers() {
    return of([...this.users]);
  }

  // ✅ Lấy 1 user theo ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // ✅ Thêm user mới
  addUser(user: User): void {
    user.id = this.generateId();
    this.users.push(user);
  }
  createUser(user: User) {
    this.addUser(user);
    return of(user); // trả về Observable để component subscribe được
  }

  // ✅ Cập nhật user
  updateUser(updated: User) {
    const index = this.users.findIndex(user => user.id === updated.id);
    if (index > -1) {
      this.users[index] = updated;
    }
    return of(updated);
  }

  // ✅ Xoá user
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  // ✅ Tạo ID tự động
  private generateId(): number {
    return this.users.length > 0
      ? Math.max(...this.users.map(u => u.id)) + 1
      : 1;
  }

  createUserForm(): FormGroup {
    return this.formBuilder.group({
      first_name: [
        '', [Validators.required]
      ],
      last_name: [
        '', [Validators.required]
      ],
      email: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      desc: '',
    });
  }

}
