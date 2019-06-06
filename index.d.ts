import { PluginFunction } from 'vue';
import { Store } from 'vuex';

export interface NotifyOptions {
  name?: string;
  moduleName?: string;
  store: Store<any>;
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $notify: {
      on: (params: Object) => void,
      watch: (cb: (params: Object, pool: any[]) => void) => void
    }
  } 
}

declare class VueNotify {
  static install: PluginFunction<never>
}

export default VueNotify;