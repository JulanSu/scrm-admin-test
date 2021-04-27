import Cookies from 'js-cookie'
import store from '@/store'

const TokenKey = process.env.VUE_APP_TOKEN_KEY;

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return Cookies.remove(TokenKey,{domain:'.doushen.com',path:'/'});
}

// 退出登录
export function toLogin() {
    store.dispatch("user/logout");
    let ldap = process.env.VUE_APP_LDAP
    let redirect = process.env.VUE_APP_REDIRECT 
    let appName = process.env.VUE_APP_NAME
    location.href = `${ldap}?redirect=${redirect}&appName=${appName}`
}