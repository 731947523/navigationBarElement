module.exports = {
  root: true,
  env: {
    // 运行环境的配置    能识别出所运行环境的全局变量
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    // 配置文件可以被基础配置中的已启用的规则继承。"@vue/prettier",
    'imperative-es6',"plugin:vue/essential",  'standard'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    // 解析器选项
    parser: "babel-eslint" // 一个对Babel解析器的包装，使其能够与 ESLint 兼容 
  }
};

