import Vue from 'vue'
import Router from 'vue-router'
// 点击路由相同时会出现问题，添加下方代码可解决此问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const Home = () =>
    import ('views/home/Home.vue')
const Message = () =>
    import ('views/message/Message.vue')
const Time = () =>
    import ('views/time/Time.vue')
const User = () =>
    import ('views/user/User.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: '/home',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home

        },
        {
            path: '/message',
            component: Message

        },
        {
            path: '/time',
            component: Time

        },
        {
            path: '/user',
            component: User

        }
    ]
})