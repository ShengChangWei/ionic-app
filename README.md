# mobile-start

基于 [angular-cli](https://github.com/angular/angular-cli/wiki) 及 [ionic-cli](https://ionicframework.com/docs/cli/) 的移动端前端起步项目，与后台起步项目相结合。

通过修改config.service.ts下相应的配置属性，可快速开始业务开发。

## 实现功能

- 统一配置API路径、新版本APP下载路径，获取是否连接网络、获取APP基本信息等（`config.service.ts`）

- 每个请求统一默认显示加载动画、请求header添加令牌属性URMS_LOGIN_TOKEN、请求错误统一处理等（`request.service.ts`）

- 检测网络是否断开及重连、启用后台模式等（`app.component.ts`）

- 检测服务器是否有新版本、可下载APP并打开安装（只支持android）、检测是否已经登录等（`login.ts`）

- 持久化保存token及用户信息（`auth.service.ts`）

- 集成高德地图、highchart、echarts，实现简单天气预报（调用高德api）

- 通过 URL Scheme 可以在外部（如浏览器）通过代码打开 APP（使用 `ionicStart://任意值` 即可）

- ...

## 搭建环境（[详细教程](http://www.cnblogs.com/laixiangran/p/8944435.html)）

- Install [Nodejs](https://nodejs.org/zh-cn/) (>= 6.9.0)

- Install [Java JDK ](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

- Install [Apache Ant](http://mirror.tcpdiag.net/apache//ant/binaries/apache-ant-1.9.4-bin.zip)

- Install [Android SDK]( http://developer.android.com/sdk/index.html)

- Ionic CLI <= 3.20.0（不要更新到 >= 4.x.x）

- [生成签名文件](http://www.cnblogs.com/laixiangran/p/8944435.html)

- `npm install -g ionic cordova@6.5.0` - 安装全局的 [ionic](https://ionicframework.com/docs/) 和 [cordova（>=7.0.0）](https://cordova.apache.org/)

- `npm install` - 安装依赖包

- `npm run add` - 添加安卓平台（cordova-android 固定为 6.3.0）

- `npm run resources` - 生成图标和启动页（resources下必须有icon.png和splash.png）

## 启动和构建项目

- `npm start` - 启动项目进行开发

- `npm run test` - 构建并启动设备运行（需要配置 `signing` 下的文件，查看 `signing` 目录下的 `README.md`）

- `npm run prod` - 构建APP（需要配置 `signing` 下的文件，查看 `signing` 目录下的 `README.md`）

### 构建时必须检查或修改下面内容：

- 检查或修改 `package.json` 中的 `version`

- 检查或修改 `config.xml` 中的 `widget -> version`，要与 `package.json` 中的 `version` 一致

- 检查或修改 `CHANGELOG.md` 对应版本的日志

- 检查或修改 `src/app/services/config.service.ts` 中的配置变量

## 其它资料

- [sass](http://sass-lang.com/)
- [karma](https://karma-runner.github.io/1.0/index.html)
- [tslint](https://palantir.github.io/tslint/) & [codelyzer](https://github.com/mgechev/codelyzer)
- [typescript](https://www.typescriptlang.org/) & [@types](https://www.npmjs.com/~types)

