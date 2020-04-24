import Cookies from 'js-cookie';

export default function authReducer(state = { authenticated: false }, action) {
  return { authenticated: Boolean(Cookies.get('AIOHTTP_SESSION', { path: '/' })) };
}
