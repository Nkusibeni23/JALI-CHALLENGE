import { Injectable, Signal, signal } from '@angular/core';
import { dummyData } from '../../../assets/dummyData/data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal(false);
  private _currentUser = signal<{
    id: number;
    telephone: string;
    role: string;
  } | null>(null);

  constructor() {}

  login(phone: string, password: string): boolean {
    const user = dummyData.users.find(
      (u) => u.telephone === phone && u.password === password
    );
    if (user) {
      this._isLoggedIn.set(true);
      this._currentUser.set({
        id: user.id,
        telephone: user.telephone,
        role: user.role,
      });
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn.set(false);
    this._currentUser.set(null);
  }

  get isLoggedIn(): Signal<boolean> {
    return this._isLoggedIn;
  }

  get currentUser(): Signal<{
    id: number;
    telephone: string;
    role: string;
  } | null> {
    return this._currentUser;
  }
}
