import http from '../interface'

export const r_example = () => {
  return http.request({
    url: '/example',
    method: 'POST'
  })
}