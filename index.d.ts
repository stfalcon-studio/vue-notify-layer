import { PluginFunction } from 'vue';
import { Store } from 'vuex';

export interface NotifyOptions {
  name?: string;
  moduleName?: string;
  store?: Store<any>;
}

type Notification = {
  type: string;
  title?: string;
  message?: string;
};

declare module 'vue/types/vue' {
  interface VueConstructor {
    $notify: {
      emit: (params: Object) => void,
      watch: (cb: (params: Object, pool: Notification & { [key: string]: any }[]) => void) => void
    }
  } 
}

declare class VueNotify {
  static install: PluginFunction<NotifyOptions>
}

export default VueNotify;