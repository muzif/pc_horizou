import {Message} from 'element-ui';
//全局js文件
//session 存值
export function s_set(name,val){
    sessionStorage.setItem(name,JSON.stringify(val))
}
// session 取值
export function s_get(name,val){
    sessionStorage.getItem(name,JSON.parse(val))
}
//手机号检验
export function phone(num){
    
    if(!(/^\d{11}$/.test(num))){ 
        Message.error('请您输入11位手机号');  
        return false; 
    }else if( !(/^1[3456789]\d{9}$/.test(num)) ){
        Message.error('请您输入的手机号不正确');  
        return false; 
    }
}
//身份证检验
export function identity(num){
    var idcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(num.length != 18){
        Message.error('请您输入的身份证号不正确');  
        return false;
    }else if(!idcardReg.test(num)){ 
        Message.error('请您输入的身份证号不正确');  
        return false; 
    }
}
// 邮箱验证
export function Email(num){
    var Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!Email.test(num)){ 
        Message.error('请您输入正确的邮箱');  
        return false; 
    }
}


