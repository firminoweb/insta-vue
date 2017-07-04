// User Store Data
class UserStore {

  get userData () {
    return {
      clientid: 'dc0f03d7620e49f2920315a8efd26b90',
      redirecturi: 'http://localhost:8080/auth',
      responsetype: 'token',
      scope: 'public_content'
    }
  }

  setItem (name, item) {
    localStorage.setItem(name, item)
  }

  getItem (name) {
    return localStorage.getItem(name)
  }

  removeItem (id) {
    localStorage.removeItem('token')
  }

}

const instance = new UserStore()

export default instance
