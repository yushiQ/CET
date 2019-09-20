import request from '../utils/request';

export function query() {
  return request('/api/users');
}


export function login (params){
  return request('/api/emstu/teacher/login',params)
}

export function sign(params){
  return request('/api/emstu/teacher/register',params)
}





