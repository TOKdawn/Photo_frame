import app from '../App.vue'
export default [{
    path: '/',
    component: app,
    redirect: '/before',
    children: [{
        path: '/before',
        component: r => require.ensure([], () => r(require('../components/before.vue')), 'before')
    }, {
        path: '/hello',
        component: r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'helloworld'),
    }]
}]