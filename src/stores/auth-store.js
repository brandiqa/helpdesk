import { observable, action } from 'mobx';

class AuthStore {

  @observable isAuthenticated = false;

  @action
  login = () => {
    this.isAuthenticated = true;
  }

  @action
  logout = () => {
    this.isAuthenticated = false;
  }
}

export default new AuthStore();
