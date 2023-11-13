# template-tools
A command tool.To generate some template,autodownload some dependencies.

该项目用于快速下载webpack的loader依赖
使用用法如下:
```bash
root>>  quick-template-tool -h
Usage: main [options]

generate some dependencies or some templates quickly

Options:
  -V, --version                                                           output the version number
  -d,--download <loader>                                                  to download webpack loader(use ',' to split args)
                                                                          (multi choices: css,file,webpack)
  -s,--switchTool <toolName>                                              to switch the download tool,need to use with -d (choices:
                                                                          "npm", "cnpm")
  -g,--generate <entryPath> <outputPath> <outputFileName> <generatePath>  entryPath  the entry file Path
                                                                          outputPath  the output file path
                                                                          outputFileName the output file name
                                                                          generatePath the path of finally generate
                                                                          example: quick-template-tool -g "test.js bundle.js dist/"
                                                                          notice: "" is necessary for this option!!
  -h, --help                                                              display help for command

```
更新中(不定期修改)...