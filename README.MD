### How to

```
import Notify from 'notify';
Vue.use(Notify, {/* some options */});
```

### Options

| Name           | Type        | Default          | Description |
| ---            | ---         | ---              | ---         |
| name           | String      | notify           | Defines the instance name. It's prefixed with the dollar sign. E.g. `$notify` |
| moduleName     | String      | notify-layer-api | Store module name if you want call notification from store |
| store          | Store<any>  | null