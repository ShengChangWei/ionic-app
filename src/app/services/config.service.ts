/**
 * Created by laixiangran on 2016/7/2
 * homepage：http://www.laixiangran.cn
 * 配置服务
 */

import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { IsDebug } from '@ionic-native/is-debug';

@Injectable()
export class ConfigService {

	/**
	 * login界面标题
	 * */
	loginTitle: string = '阜南智慧河长信息管理系统';

	/**
	 * 百度定位返回的地址替换文本
	 * @type {string}
	 */
	replaceText: string = '中国安徽省阜阳市阜南县';

	/**
	 * app是否运行在浏览器上
	 * @type {boolean}
	 */
	isDev: boolean = !window.hasOwnProperty('cordova');

	/**
	 * app运行在设备上的版本是否是debug版
	 * @type {boolean}
	 */
	isTest: boolean = true;

	/**
	 * 模拟的api域名（请根据实际项目进行修改）
	 * @type {string}
	 */
	mockDomain: string = '/mockjsdata/16';

	/**
	 * 浏览器开发的api域名（请根据实际项目进行修改）
	 * @type {string}
	 */
	devDomain: string = '';

	/**
	 * 真实设备上测试的api域名（请根据实际项目进行修改）
	 * @type {string}
	 */
	testDomain: string = 'http://124.205.32.214:801';

	/**
	 * 真实设备上生产的api域名（请根据实际项目进行修改）
	 * @type {string}
	 */
	prodDomain: string = 'http://demo.fycard.cn/apps/rcs';

	/**
	 * 根据环境确定的api域名
	 * @type {string}
	 */
	domain: string = this.devDomain;

	/**
	 * storage保存用户信息对应的key（请根据实际项目进行修改，规则：xxx_USERINFO）
	 * @type {string}
	 */
	userInfoItemName: string = 'FN_RCS_USERINFO';

	/**
	 * storage保存令牌对应的key（请根据实际项目进行修改，规则：xxx_URMS_LOGIN_TOKEN）
	 * @type {string}
	 */
	tokenItemName: string = 'FN_RCS_URMS_LOGIN_TOKEN';

	/**
	 * 当前网络是否连接
	 * @type {boolean}
	 */
	network: boolean = true;

	/**
	 * APP启动时是否通过服务器检查了更新
	 * @type {boolean}
	 */
	isCheckNewVersion: boolean = false;

	/**
	 * APP名称（请根据实际项目进行修改）
	 * @type {any}
	 */
	appName: any = 'fnrcsApp';

	/**
	 * APP包名称（请根据实际项目进行修改）
	 * @type {any}
	 */
	packageName: any = 'fn.rcsApp.essence';

	/**
	 * APP版本编码
	 * @type {any}
	 */
	versionCode: any = 10000;

	/**
	 * APP版本号
	 * @type {any}
	 */
	versionNumber: any = '99.99.99';

	/**
	 * 登录页面的状态栏颜色（请根据实际项目进行修改）
	 * @type {string}
	 */
	loginStatusBarColor: string = '#FFFFFF';

	/**
	 * 主页的状态栏颜色（请根据实际项目进行修改）
	 * @type {string}
	 */
	mainStatusBarColor: string = '#1f3559';

	/**
	 * 几何服务路径
	 * @type {string}
	 */
	geoUrl: string = 'http://124.205.32.214:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer';

	/**
	 * 乡级河道图层
	 * @type {string}
	 */
	villageRiversMapServer: string = 'http://124.205.32.214:6080/arcgis/rest/services/FUNAN10/MapServer/1';

	/**
	 * 区县级河道图层
	 * @type {string}
	 */
	countyRiversMapServer: string = 'http://124.205.32.214:6080/arcgis/rest/services/FUNAN10/MapServer/2';

	/**
	 * arcgis javascript API路径
	 * @type {string}
	 */
	gisApiUrl: string = 'http://124.205.32.214:8/arcgis_api/3.x/init.js';

	/**
	 * esri.css路径
	 * @type {string}
	 */
	esriCSSUrl: string = 'http://124.205.32.214:8/arcgis_api/3.x/esri/css/esri.css';

	/**
	 * 上传附件路径。最后拼接附件组id，AttachFileAction/upload/{groupId}
	 * @type {string}
	 */
	attachFileUploadUrl: string = `${this.domain}/AttachFileAction/upload`;

	/**
	 * 预览文件
	 * @type {string}
	 */
	previewUrl: string = `${this.domain}/AttachFileAction/preview`;

	/**
	 * 新版APP下载路径，实际使用时将 version 替换为最新版本号
	 * @type {string}
	 */
	newAppUrl: string = `${this.domain}/assets/apk/app_version.apk`;

	/**
	 * 高德地图api key
	 * @type {string}
	 */
	amapApiKey: string = '3fe20cdb4d2c77b4892e665f7b8ee8cc';

	/**
	 * 高德地图web key
	 * @type {string}
	 */
	amapWebApiKey: string = '55f909211b9950837fba2c71d0488db9';

	/**
	 * 河长办负责人角色id
	 */
	RCS_CHARGE_ROLE: string = 'dbba106fe8f944b6b9269f0690bc497c';

	/**
	 * 河长办督查人角色id
	 */
	RCS_SUP_ROLE: string = '9d1e3071f4d14819bfb9234d4aa6b373';

	/**
	 * 河长角色id
	 * @type {string}
	 */
	CHIEF_ROLE: string = '602d95dfa9074556ad1f28554de19e1a';

	/**
	 * 巡查员角色id
	 */
	CHECK_ROLE: string = '1453adbdabcf463085fc73ad1c6eee3f';

	/**
	 *  阜南县单位id
	 * @type {string}
	 */
	countyUnitId: string = '1';

	/**
	 * 新消息事件主题（名称）
	 * @type {string}
	 */
	newMessageTopic: string = 'newMessage';

	/**
	 * 更新消息事件主题（名称）
	 * @type {string}
	 */
	updateMessageTopic: string = 'updateMessage';

	/**
	 * 改变x菜单事件主题（名称）
	 */
	changeTabxTopic: string = 'changeTabx';

	/**
	 * 消息本地缓存的key
	 * @type {string}
	 */
	messageCacheKey: string = 'messageCache';

	/**
	 * 地图初始范围
	 */
	mapArea: any = {xmax: 115.9588970000001, xmin: 115.26998200000003, ymax: 32.91169700000008, ymin: 32.40576700000005};

	/**
	 * 定位无效的数值
	 * @type {number}
	 */
	invalidLocation: number = 5e-324;

	/**
	 * 百度人脸识别
	 * @type {string}
	 */
	baiduFace: string = 'https://aip.baidubce.com/rest/2.0/face/v3/match';
	/**
	 * 百度 api
	 * @type {string}
	 */
	baiduAPI: string = 'ewLZnPElfi25sAfG7a4ORcs0';

	/**
	 * 百度 Secret Key
	 * @type {string}
	 */
	SecretKey: string = 'GIn9aMIsNdtbO8Y4fdtkGs5aZitNxKFg ';
	access_token: string = '24.bea83832ad385aedb1eeccb54ac5aa2b.2592000.1548384907.282335-15271148';

	constructor(public appVersion: AppVersion, public isDebug: IsDebug) {
	}

	/**
	 * 获取APP基本信息
	 * @memberof ConfigService
	 */
	initAppInfo(): Promise<any> {

		// 在虚拟机器或者真机上有效
		if (!this.isDev) {
			return Promise.all([
				this.appVersion.getAppName().then((appName: any) => {
					this.appName = appName;
				}),
				this.appVersion.getPackageName().then((packageName: any) => {
					this.packageName = packageName;
				}),
				this.appVersion.getVersionCode().then((versionCode: any) => {
					this.versionCode = versionCode;
				}),
				this.appVersion.getVersionNumber().then((versionNumber: any) => {
					this.versionNumber = versionNumber;
				}),

				// 监测是否在debug环境
				this.isDebug.getIsDebug().then((isDebug: boolean) => {
					this.isTest = isDebug;
					if (this.isTest) {
						this.domain = this.testDomain;
					} else {
						this.domain = this.prodDomain;
						this.geoUrl = 'http://demo.fycard.cn/apps/arcgis/rest/services/Utilities/Geometry/GeometryServer';
						this.villageRiversMapServer = 'http://demo.fycard.cn/apps/arcgis/rest/services/FUNAN10/MapServer/1';
						this.countyRiversMapServer = 'http://demo.fycard.cn/apps/arcgis/rest/services/FUNAN10/MapServer/2';
						this.gisApiUrl = 'http://demo.fycard.cn/apps/arcgis_api/3.x/init.js';
						this.esriCSSUrl = 'http://demo.fycard.cn/apps/arcgis_api/3.x/esri/css/esri.css';
					}
					this.newAppUrl = `${this.domain}/assets/apk/app_version.apk`;
					this.attachFileUploadUrl = `${this.domain}/AttachFileAction/upload`;
					this.previewUrl = `${this.domain}/AttachFileAction/preview`;
				})
			]);
		} else {
			return Promise.resolve(this.isDev);
		}
	}
}
