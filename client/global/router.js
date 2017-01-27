window.route = {
  uri: '/',
  page: 'home',
  modal: 'team'
};

function plugin(Vue) {

  Vue.mixin({
    data () {
      return {
        route: window.route
      }
    },
    methods: {
      routeClick(evt) {
        var page = evt.target.pathname;
        if (page.startsWith('/')) {
          page = page.slice(1)
        }
        this.route.page = page;

        console.log('router: going to page', page);

        evt.preventDefault();
      }
    }
  })
}

export default plugin;
