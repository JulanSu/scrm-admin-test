import axios from 'axios';
import { getToken } from '@/utils/auth'
import { MessageBox, Message } from 'element-ui'
function dataURLtoBlob(dataurl) {
    //注意base64的最后面中括号和引号是不转译的   
    var _arr = dataurl.substring(0,dataurl.length-2),
        bstr =atob(_arr),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
}

let downloadLeads = function (uri,method,params = {},temName,callback=()=>{}){
    console.log(uri,method, params);
    let url = process.env.VUE_APP_BASE_API + uri;
    let whiteList = ['/admin/exceleading/exceldown', '/admin/exceleading/tycexceldown', '/admin/exceleading/students-leading'];

    let config = { 
        method,
        url: url,
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
    console.log(config);
    axios(config)
    .then((data) => {
        console.log(data);
        
        callback(true);
        if (!data) {
            return
        }
        if (data.data.code != 200) {
            Message.error(data.data.err_msg);
            return
        }
        if(data.data.type =='application/json' && !whiteList.includes(uri)){
            const reader = new FileReader();
            reader.readAsText(data.data,'utf-8')
            reader.onload= function(e){
                let result = JSON.parse(reader.result);
                Message.error(result.err_msg);
                return
            }
        }
        else {
            callback(false);
            let { file, message } = data.data.data;
            Message.success(message);
            let dataFile = dataURLtoBlob(file);
            let url = window.URL.createObjectURL(dataFile)
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', `${temName}.xlsx`)
            document.body.appendChild(link)
            link.click();
        }
    }).catch(err => {Message.error(err.msg || 'Error')})
}

export default downloadLeads