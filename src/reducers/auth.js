import Cookies from 'js-cookie';

export default function authReducer(state = { authenticated: false }, action) {
  return { authenticated: Boolean(Cookies.get('auth_tkt', { path: '/' })) };
}
