import Vue from 'vue'
import Home from '@/components/Home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2#lastpo').textContent)
      .to.equal('Seus últimos posts')
    expect(vm.$el.querySelector('#logOut').textContent)
      .to.equal('Log Out')
  })
})
