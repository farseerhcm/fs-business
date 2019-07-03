import fscascader from './src/hr-org-cascader.vue';

/* istanbul ignore next */
fscascader.install = function(Vue) {
  Vue.component(fscascader.name, fscascader);
};

export default fscascader;