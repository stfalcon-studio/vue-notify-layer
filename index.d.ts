import { PluginFunction } from 'vue';
import { Store } from 'vuex';

export interface NotifyOptions {
  name?: string;
  moduleName?: string;
  store?: Store<any>;
}

type Notification = {
  type: string;
} & { [key: string]: any };

declare module 'vue/types/vue' {
  interface VueConstructor {
    $notify: {
      emit: (params: Notification) => void,
      watch: (cb: (params: Object, pool: Notification[]) => void) => void
    }
  } 
}

declare class VueNotify {
  static install: PluginFunction<NotifyOptions>
}

export default VueNotify;