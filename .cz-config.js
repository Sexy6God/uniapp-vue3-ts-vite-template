module.exports = {
  types: [
    { value: 'feat', name: 'feat: 一个新的特性' },
    { value: 'fix', name: 'fix: 修复一个Bug' },
    { value: 'ui', name: 'ui: 更新UI' },
    { value: 'docs', name: 'docs: 更新注释、文档' },
    { value: 'style', name: 'style: 空格, 分号等格式修复' },
    { value: 'refactor', name: 'refactor: 代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: 'perf: 提升性能' },
    { value: 'test', name: 'test: 增删测试' },
    { value: 'chore', name: 'chore: 变更构建流程或辅助工具' },
    { value: 'build', name: 'build: 变更项目构建或外部依赖' },
    { value: 'ci', name: 'ci: 更改持续集成软件的配置文件和package中的scripts命令' },
    { value: 'revert', name: 'revert: 代码回退' },
  ],

  scopes: [],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    // 如果allowcustomscopes为true，则使用
    customScope: 'Denote the SCOPE of this change:',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body', 'footer'],

  // limit subject length
  subjectLimit: 100,
};
