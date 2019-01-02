import { Component } from '@angular/core';
import { TipsService } from '../../services/tips.service';
import { Camera } from '@ionic-native/camera';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'page-rules',
	templateUrl: 'rules.html'
})
export class RulesPage {
	pictures: any[] = [];
	items = [
		{
			name: '天气预报',
			icon: 'partly-sunny',
			color: '#EA5854'
		},
		{
			name: '通讯录',
			icon: 'person',
			color: '#4FDDD1'
		}
	];

	constructor(public tips: TipsService,
				public http: HttpClient,
				public camera: Camera) {
	}

	/**
	 * 拍摄照片（使用 cordova-plugin-camera）
	 */
	getPicture() {
		this.camera.getPicture().then((path: string) => {
			this.pictures.push({path: path});
		}, (err: any) => {
			console.error(err);
		});
	}

	/**
	 * 删除图片
	 * */
	deletePicture() {
		this.tips.confirm({
			message: `确定删除该照片吗？`,
			buttons: [
				{
					text: '取消'
				},
				{
					text: '确定',
					handler: () => {
						this.pictures.pop();
					}
				}
			]
		});

	}

	getToken() {
		console.log(1);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8101',
			'Access-Control-Allow-Credentials': 'true'
		});
		const option: any = {headers: headers};
		this.http.post('https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=ewLZnPElfi25sAfG7a4ORcs0&client_secret=GIn9aMIsNdtbO8Y4fdtkGs5aZitNxKFg', null).subscribe((data) => {
			console.log(data);
		});
	}

}
