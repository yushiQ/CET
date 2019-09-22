import request from '../utils/request';

export function query() {
  return request('/api/users');
}

//成绩列表
export function getData(){
  return request.get('/emstu/student/recordlists');
}

//添加成绩
export function edit(){
  return request.put('/api/emstu/student/addrecord')
}

//修改成绩
export function del(){
  return request.post('/emstu/student/modifyrecord')
}

