const app = '/app/';
const dashboard = '/dashboard/';

export const routes = {
  app,
  dashboard,
  home: app,
  login: app + 'login',
  submit: app + 'submit',
  tickets: dashboard + '/tickets',
  ticket: dashboard + '/ticket'
}
