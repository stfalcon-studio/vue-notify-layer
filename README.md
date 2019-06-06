### Installation

#### npm
```
$ npm i -S vue-notify-layer
```

### Quick usage
```
import VueNotifyLayer from 'vue-notify-layer';
Vue.use(Notify, {
  // optional pluginOptions
  name: 'stNotify' // stNotify - name by default
});
```

### Using in components
```
<template>
  <button @click="handleNotify">
    Call notify
  </button>
</template>

<script>
export default {
  methods: {
    handleNotify() {
      this.$stNotify.emit({ type: 'default', title: 'Hello', message: 'World!' });
    }
  },
  created() {
    this.$stNotify.watch((params, pool) => {
      console.log(params); // Get notify data from our application
      console.log(pool); // Get all messages what we created
    })
  }
}
</script>
```

### Using in Store
Just call `dispatch` from your actions
```
actions: {
  someAction({ dispatch }) {
    dispatch('stNotify/notify', { /* payload */ });
  }
}
```

### Options

| Name           | Type        | Default          | Description |
| ---            | ---         | ---              | ---         |
| name           | String      | notify           | Defines the instance name. It's prefixed with the dollar sign. E.g. `$notify` |
| moduleName     | String      | notify-layer-api | Store module name if you want call notification from store |
| store          | Store  | null

### Glossary

#### Notify payload

```
type Notification = {
  type: string;
} & { [key: string]: any };
```

#### Notify interface
```
$notify: {
  emit: (params: Notification) => void,
  watch: (cb: (params: Notification, pool: Notification[]) => void) => void
}
```