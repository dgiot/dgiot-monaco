const MonacoWebpackPlugin = require('monaco-editor-esm-webpack-plugin');

module.exports = {
  configureWebpack:{
  module: {
    /**
     * @description: 汉化 Monaco 右键菜单
     * @doc: https://blog.csdn.net/m0_37986789/article/details/121135519
     * @topo: 汉化放出下列注释
     */
    rules: [
      {
        test: /\.js/,
        enforce: 'pre',
        include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
        use: MonacoWebpackPlugin.loader,
      },
    ]
  },
    plugins: [
      new MonacoWebpackPlugin()
    ]
  },
  chainWebpack: config => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['abap', 'aes', 'apex', 'azcli', 'bat', 'bicep', 'c', 'cameligo', 'clojure', 'coffeescript', 'cpp', 'csharp', 'csp', 'css', 'dart', 'dockerfile', 'ecl', 'elixir', 'flow9', 'freemarker2', 'freemarker2.tag-angle.interpolation-bracket', 'freemarker2.tag-angle.interpolation-dollar', 'freemarker2.tag-auto.interpolation-bracket', 'freemarker2.tag-auto.interpolation-dollar', 'freemarker2.tag-bracket.interpolation-bracket', 'freemarker2.tag-bracket.interpolation-dollar', 'fsharp', 'go', 'graphql', 'handlebars', 'hcl', 'html', 'ini', 'java', 'javascript', 'json', 'julia', 'kotlin', 'less', 'lexon', 'liquid', 'lua', 'm3', 'markdown', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'pla', 'plaintext', 'postiats', 'powerquery', 'powershell', 'proto', 'pug', 'python', 'qsharp', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scala', 'scheme', 'scss', 'shell', 'sol', 'sparql', 'sql', 'st', 'swift', 'systemverilog', 'tcl', 'twig', 'typescript', 'vb', 'verilog', 'xml', 'yaml'],

        features: ['accessibilityHelp', 'anchorSelect', 'bracketMatching', 'caretOperations', 'clipboard', 'codeAction', 'codelens', 'colorPicker', 'comment', 'contextmenu', 'coreCommands', 'cursorUndo', 'dnd', 'documentSymbols', 'find', 'folding', 'fontZoom', 'format', 'gotoError', 'gotoLine', 'gotoSymbol', 'hover', 'iPadShowKeyboard', 'inPlaceReplace', 'indentation', 'inlineHints', 'inspectTokens', 'linesOperations', 'linkedEditing', 'links', 'multicursor', 'parameterHints', 'quickCommand', 'quickHelp', 'quickOutline', 'referenceSearch', 'rename', 'smartSelect', 'snippets', 'suggest', 'toggleHighContrast', 'toggleTabFocusMode', 'transpose', 'unusualLineTerminators', 'viewportSemanticTokens', 'wordHighlighter', 'wordOperations', 'wordPartOperations']
      }
    ])
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  lintOnSave: false,   // 取消 eslint 验证
}