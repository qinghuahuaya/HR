import request from '@/utils/request'

export function login(data) {
  const res = request({
    url:'/sys/login' ,
    method:'post',
    data
  })
  // console.log('res',res);
  return res
  }

export function getInfo(token) {

}

export function logout() {

}
