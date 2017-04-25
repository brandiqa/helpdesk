import { observable, action } from 'mobx';

class AuthStore {

  @observable isAuthenticated = false;
  @observable loading = false;

  @action
  login = () => {
    this.loading = true;
    setTimeout(
      () => {
        this.isAuthenticated = true;
        this.loading = false;
      },
      2000
    );
  }

  @action
  logout = () => {
    this.isAuthenticated = false;
  }
}

export default new AuthStore();
