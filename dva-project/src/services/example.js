import request from '../utils/request';

// export function query() {
//   return request('/api/users');
// }

//登录
export function login (params){
  return request('/api/emstu/teacher/login',params)
}
//注册
export function sign(params){
  return request('/api/emstu/teacher/register',params)
}
//班级 数据
export function classData(params){
  return request('/api/emstu/teacher/register',params)
}
//视图数据
export function  viewData(params){
  return request('/api/emstu/teacher/register',params)
}
//检查个人信息
export function  query(params){
  return request('/api/emstu/teacher/checkuser',params)
}


