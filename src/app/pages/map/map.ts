import { Component, ViewChild } from '@angular/core';
import { EssenceIonAMapComponent } from 'essence-ionic';
import { ConfigService } from '../../services/config.service';
import { Camera } from '@ionic-native/camera';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'page-map',
	templateUrl: 'map.html'
})
export class MapPage {
	@ViewChild('canvas') canvas: any;
	amapComponent: EssenceIonAMapComponent; // 当前地图控件对象
	amap: any; // 当前地图对象
	pictures: any[] = [];
	image1: string;
	image2: string;
	result: any;
	count: number = 0;

	constructor(public config: ConfigService,
				public camera: Camera,
				public http: HttpClient) {

		// this.handlerPicture().then(() => {
		// 	this.getFace();
		// });
		// this.handlerPicture();
	}

	/**
	 * 拍摄照片（使用 cordova-plugin-camera）
	 */
	getPicture() {
		this.count++;
		this.camera.getPicture().then((path: string) => {
			this.pictures.push({path: path});
			if (this.count === 2) {
				this.handlerPicture();
			}
		}, (err: any) => {
			console.error(err);
		});
	}

	handlerPicture() {
		const img1 = new Image();
		img1.src = this.pictures[0].path;
		img1.onload = () => {
			img1.width = 240;
			img1.height = 240;
			this.image1 = this.getBase64Image(img1);
		};
		const img2 = new Image();
		img2.src = this.pictures[1].path;
		img2.onload = () => {
			img2.width = 240;
			img2.height = 240;
			this.image2 = this.getBase64Image(img2);
		};


	}


	getBase64Image(img) {
		console.log(this.canvas);
		const canvas = this.canvas.nativeElement;
		canvas.width = img.width;
		canvas.height = img.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, img.width, img.height);
		const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
		const dataURL = canvas.toDataURL('image/' + ext).replace('data:image/png;base64,', '');
		return dataURL;
	}


	getFace() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8101',
			'Access-Control-Allow-Credentials': 'true'
		});
		const option: any = {headers: headers};
		const body = [
			{
				'image': this.image1,
				'image_type': 'BASE64',
				'face_type': 'LIVE',
				'quality_control': 'NONE'
			},
			{
				'image': this.image2,
				'image_type': 'BASE64',
				'face_type': 'IDCARD',
				'quality_control': 'NONE'
			}];
		const params = JSON.stringify(body);
		this.http.post('https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=24.bea83832ad385aedb1eeccb54ac5aa2b.2592000.1548384907.282335-15271148', params).subscribe((data: any) => {
			this.result = data.error_msg;
		});
	}
}
