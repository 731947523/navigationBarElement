import Vue from 'vue'
// 集成传进来的组件
import notice from './../components/notice/index.vue'
// 参数
function create (notice, props) {
  // 方案一
  // const vm = new Vue({
  //  // h是createElement  返回的是VNode，虚拟dom
  //   render: h =>
  //     h(Component, {
  //       props
  //     })
  // }).$mount(); // 不指定宿主元素  会追加dom
  // document.body.appendChild(vm.$el);
  // //   增加完去删除当前dom   释放内存
  // const comp = vm.$children[0];
  // comp.remove = function() {
  //   console.log(11315);
  //   document.body.removeChild(vm.$el);
  //   vm.$destroy();
  // };
  // return comp;
  // 方案二
  // 创建实例构造器
  const com = Vue.extend(notice)
  // 组件对象
  const comp = new com({ propsData: props })
  // 追加到body  不指定特定Dom
  comp.$mount()
  console.log(comp, 'ertyuio', comp.$el)
  document.body.appendChild(comp.$el)
  comp.show()
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}
// 导出形式1
// export default create;
// 导出形式2  使用use形式
export default {
  install (Vue) {
    Vue.prototype.$createNotice = function (optios) {
      return create(notice, optios)
    }
  }
}
