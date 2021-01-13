const { generateTemplateFiles } = require('generate-template-files');

// https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359

generateTemplateFiles([
  {
    option: 'Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './.generated/components/__name__(kebabCase)',
      // pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'Store Global',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/stores/global/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/stores/__name__(kebabCase)',
    },
  },
  {
    option: 'Store Local',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/stores/local/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './.generated/stores',
    },
  },
  {
    option: 'Util',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './tools/templates/util/',
    },
    stringReplacers: ['__name__', '__method_name__'],
    output: {
      path: './.generated/utils/__name__(kebabCase)',
    },
  },
  {
    option: 'Test',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './tools/templates/util/__name__.utils.test.ts',
    },
    stringReplacers: [
      { question: 'Name of test', slot: '__name__' },
      { question: 'Function name', slot: '__method_name__' },
    ],
    output: {
      path: './.generated/utils/__name__(kebabCase)/__name__.test.ts',
    },
  },
  {
    option: 'Model',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__model__.model.ts',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './.generated/models/__model__.model.ts',
    },
  },
  {
    option: 'Interface',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/I__interface__.ts',
    },
    stringReplacers: ['__interface__'],
    output: {
      path: './.generated/models/I__interface__.ts',
    },
  },
  {
    option: 'Enum',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__enum__.enum.ts',
    },
    stringReplacers: ['__enum__'],
    output: {
      path: './.generated/constants/__enum__(pascalCase).enum.ts',
    },
  },
]);
