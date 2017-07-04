// User Store Data
class UserStore {

  get userData () {
    return {
      clientId: 'dc0f03d7620e49f2920315a8efd26b90',
      redirectUri: window.location.origin + '/auth',
      responseType: 'token',
      scope: 'public_content'
    }
  }

  getGetLocation (UserStore) {
    function showError (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('User denied the request for Geolocation.')
          break
        case error.POSITION_UNAVAILABLE:
          console.log('Location information is unavailable.')
          break
        case error.TIMEOUT:
          console.log('The request to get user location timed out.')
          break
        case error.UNKNOWN_ERROR:
          console.log('An unknown error occurred.')
          break
      }
    }

    function showPosition (position) {
      if (UserStore) {
        UserStore.setItem('latitude', position.coords.latitude)
        UserStore.setItem('longitude', position.coords.longitude)
      } else {
        console.log('Latitude: ', position.coords.latitude)
        console.log('Longitude: ', position.coords.longitude)
      }
    }

    if (navigator.geolocation) {
      var optn = {
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0
      }
      navigator.geolocation.getCurrentPosition(showPosition, showError, optn)
    } else {
      alert('Geolocation is not supported in your browser')
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
