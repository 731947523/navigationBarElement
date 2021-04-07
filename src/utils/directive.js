let purviewArr = []
purviewArr = JSON.parse(localStorage.getItem('purviewArr'))
const directive = {
  // 封装一个自动获取焦点的方法
  focus: {
    // 自动到焦点
    inserted: function (el) {
      el.children[0].focus()
    }
  },
  purview: {
    inserted: function (el, binding) {
      // 权限code
      if (purviewArr) {
        if (binding.value) {
          if (purviewArr.includes(binding.value)) {
            console.warn('有权限')
          } else {
            el.parentNode && el.parentNode.removeChild(el)
          }
        }
      }
    }
  },
  throle: {
    inserted: function (el) {
      console.log(el)
    },
    bind: function (el, binding) {
      console.log(binding)
    }
  },
  debounce: {
    inserted: function (el, binding) {
      console.log(el, binding)
      let timer
      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          binding.value()
        }, 1000)
      })
    }
  }
}
export default directive
