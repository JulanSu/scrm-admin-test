// export default function(uri,params = ''){
//     let host = process.env.VUE_APP_BASE_API;
//     uri = host + uri + params;
//     window.open(uri);
// }

import axios from 'axios';
import { getToken } from '@/utils/auth'
import { MessageBox, Message } from 'element-ui'
export default function (uri,method,params = {},temName,callback=()=>{}){

    let url = process.env.VUE_APP_BASE_API + uri;
    let whiteList = ['/admin/exceleading/exceldown', '/admin/exceleading/tycexceldown'];

    let config = { 
        method,
        url: url,
        responseType:'blob',
        headers: {
            Authorization: getToken()
        }
    }
    if(method == 'post'){
        config.data = params;
    }
    else{
        config.params = params;
    }
    axios(config)
    .then((data) => {
        callback(true);
        if (!data) {
            return
        }
        if(data.data.type =='application/json' && !whiteList.includes(uri)){
            const reader = new FileReader();
            reader.readAsText(data.data,'utf-8')
            reader.onload= function(e){
                let result = JSON.parse(reader.result);
                Message.error(result.err_msg || 'Error');
                return
            }
        }
        else {
            callback(false);
            let url = window.URL.createObjectURL(data.data)
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', `${temName}.xlsx`)
            document.body.appendChild(link)
            link.click();
        }
    }).catch(err => { Message.error(err.msg || 'Error')})
}