import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuth: boolean = false;

  redirectToAuthentification() {
    window.location.replace("https://api.imgur.com/oauth2/authorize?client_id=3bc18f24c0a3a70&response_type=token");
  }

  authenticate() {
  }

  checkAuth(): boolean {
    return this.isAuth;
  }

  // JSON "set" example
  async setObject(key: string, object: Object) {
    await Storage.set({
      key,
      value: JSON.stringify(object)
    });
  }

  // JSON "get" example
  async getObject(key: string) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async setItem() {
    await Storage.set({
      key: 'name',
      value: 'Max'
    });
  }

  async getItem() {
    const { value } = await Storage.get({ key: 'name' });
    console.log('Got item: ', value);
  }

  async removeItem(key: string) {
    await Storage.remove({ key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
  }

  async clear() {
    await Storage.clear();
  }
}
