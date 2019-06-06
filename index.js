import Vue from 'vue';

const events = new Vue({
  data: {
    id: 0,
    pool: [],
  },
  methods: {
    add(params, timeout) {
      this.id += 1;
      this.pool = [...this.pool, { ...params, id: this.id }];

      setTimeout(() => this.remove(this.id), timeout);
    },
    remove(id) {
      this.pool = this.pool.filter(item => item.id !== id);
      this.id -= 1;
    },
  },
});

export default {
  install(Vue, options = {}) {
    const name = options.name || 'stNotify';
    const moduleName = options.moduleName || 'stNotify';

    const notify = params => {
      if (typeof params !== 'object') {
        console.warn('Params should be object!');
        return;
      }

      events.add(params, options.timeout || 2000);
      events.$emit('add', params);
    };

    const watch = cb => {
      events.$on('add', params => cb(params, events.pool));
    };

    if (options.store) {
      options.store.registerModule(moduleName, {
        namespaced: true,
        actions: {
          notify(_, params) {
            notify(params);
          },
        },
      });
    }

    Vue.prototype['$' + name] = {
      watch,
      emit: notify,
    };
  },
};
