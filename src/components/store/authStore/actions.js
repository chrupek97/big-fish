export default ({
  login(context) {
    const date = new Date()
    const expiryDate = new Date(date.getTime() + 1000 * 60 * 60 * 1).getTime()
    context.commit('setAuth', { isLoggedIn: true })
    localStorage.setItem('isLoggedIn', 1)
    localStorage.setItem('expiryDate', expiryDate)
  },
  logout(context) {
    context.commit('setAuth', { isLoggedIn: false })
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('expiryDate')
  }
})