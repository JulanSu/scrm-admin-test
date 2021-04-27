import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken, toLogin } from '@/utils/auth'
import router from '../router'
import resetMessage from '@/utils/index';

const service = axios.create({
  	timeout: 100000
})

// request interceptor
service.interceptors.request.use(
	config => {
		if (getToken()) {
			config.headers['Authorization'] = getToken();
		}
		return config
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	response => {
		const res = response.data
		if(response.data instanceof Blob) {
			return response.data
		}
		if (res.code !== 200) {
			switch (res.code) {
				case 10001:
					// 未登录
					toLogin()
					break;
				case 10006:
					// 无权限
					Message.error(res.err_msg || 'Error');
					router.push({
						path: '/loginFail'
					})
					break;
				case 0:
					resetMessage.error(res.err_msg || 'Error');
					break;
				default:
					Message.error(res.err_msg || 'Error');
					break;
			}
			
		} else {
			return res
		}
	},
	error => {
		console.log('err' + error) // for debug
		Message({
		message: error.message,
		type: 'error',
		duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)

const URLS = {
    // 基础路径
    userBase:process.env.VUE_APP_BASE_API,
}

export default function (config) {
	const url = URLS[config['type']];
	if (!url) throw '未获取到该type对应的baseURL';
	config.baseURL = url;
	return service(config);
}
  
