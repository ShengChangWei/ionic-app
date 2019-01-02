/**
 * Created by laixiangran on 2016/8/6.
 * homepage：http://www.laixiangran.cn
 * 登录页面（组件）
 */

import { Component, ViewChild } from '@angular/core';
import { Content, MenuController, NavController, Platform } from 'ionic-angular';
import { LoginService } from '../../services/login.service';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.service';
import { TipsService } from '../../services/tips.service';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { ConfigService } from '../../services/config.service';
import { Md5 } from 'ts-md5/dist/md5';
import { ServerData } from '../../models/server-data.model';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	@ViewChild(Content) content: Content;
	user: any = {};

	constructor(public navCtrl: NavController,
				public platform: Platform,
				public network: Network,
				public statusBar: StatusBar,
				public config: ConfigService,
				public loginService: LoginService,
				public tips: TipsService,
				public authService: AuthService,
				public menu: MenuController) {
	}

	ionViewDidEnter() {
		this.menu.enable(false); // 禁用侧边菜单栏
		this.statusBar.backgroundColorByHexString(this.config.loginStatusBarColor);

		// 监听键盘显示/隐藏事件
		this.content.setScrollElementStyle('overflow-y', 'hidden');
		window.addEventListener('native.keyboardshow', (e: any) => {
			this.content.setScrollElementStyle('overflow-y', 'auto');
			this.content.scrollToBottom();
		});
		window.addEventListener('native.keyboardhide', (e: any) => {
			this.content.setScrollElementStyle('overflow-y', 'hidden');
			this.content.scrollToTop();
		});
	}

	ionViewDidLeave() {
		this.menu.enable(true);
	}

	login(isValid: boolean) {
		this.navCtrl.setRoot(TabsPage);
		// if (isValid) {
		// 	if (this.config.network) {
		// 		this.loginService.login({
		// 			username: this.user.username,
		// 			password: Md5.hashStr(this.user.password)
		// 		}).subscribe((serverData: ServerData) => {
		// 			if (serverData.code === 'ok') {
		// 				Promise.all([this.authService.setToken(serverData.result.token), this.authService.setUserInfo(serverData.result.user)]).then(() => {
		// 					this.navCtrl.setRoot(TabsPage);
		// 				});
		// 			} else {
		// 				this.tips.alert({
		// 					title: '登录失败',
		// 					message: serverData.info,
		// 					buttons: ['确定']
		// 				});
		// 			}
		// 		}, (error: any) => {
		// 			this.tips.alert({
		// 				title: '登录失败',
		// 				message: error,
		// 				buttons: ['确定']
		// 			});
		// 		});
		// 	} else {
		// 		this.tips.alert({
		// 			title: '无网络连接',
		// 			message: '请检查网络是否断开了！',
		// 			buttons: ['确定']
		// 		});
		// 	}
		// } else {
		// 	this.tips.alert({
		// 		title: '温馨提示',
		// 		message: '必须输入用户名和密码！',
		// 		buttons: ['确定']
		// 	});
		// }
	}
}
