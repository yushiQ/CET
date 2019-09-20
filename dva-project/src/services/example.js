import request from '../utils/request';

export function query() {
  return request('/api/users');
}


export function login (){
  return request.post('http://{{148.70.121.59:9001}}/emstu/teacher/login')
}






