TypeScript React "react-testing-library" Auto Cleanup Demo
==========================================================

按官方文档：
https://testing-library.com/docs/react-testing-library/api#cleanup

当测试框架提供了`afterEach`，则`@testing-library`会自动调用`cleanup`

可以通过环境变量`RTL_SKIP_AUTO_CLEANUP=true`来跳过

`react-testing-library`已经迁移到`@testing-library/react`

```
npm install
npm run test
```
