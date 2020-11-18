const directive = {
  // 封装一个自动获取焦点的方法
  focus: {
    inserted: function(el) {
      el.children[0].focus();
    }
  },
  throle: {
    inserted: function(el) {
      console.log(el);
    },
    bind: function(el, binding) {
      console.log(binding);
    }
  },
  debounce: {
    inserted: function(el, binding) {
      console.log(el, binding);
      let timer;
      el.addEventListener("click", () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          binding.value();
        }, 1000);
      });
    }
  }
};
module.exports = directive;
