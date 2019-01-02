/**
 * Created by laixiangran on 2017/3/22.
 * homepage：http://www.laixiangran.cn
 */

import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {RequestService} from '../../../../services/request.service';
import {ConfigService} from '../../../../services/config.service';
import {MenuController} from 'ionic-angular';
import {AMapWebService, GeolocationService, LngLat, PositionResult, TransformService} from 'e-ngx-services';

@Component({
	selector: 'page-weather-report',
	templateUrl: 'weatherReport.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherReportPage {
	currentPosition: string; // 当前定位坐标，'105.925833,38.400789'
	cityInfo: any; // 定位的城市信息
	weatherReport: any; // 天气预报信息
	live: any;
	forecasts: any[];
	weatherType: string = 'fine';
	dayType: string = 'day';
	weekArr: string[] = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

	constructor(public rs: RequestService,
				public changeDetector: ChangeDetectorRef,
				public menu: MenuController,
				public statusBar: StatusBar,
				public config: ConfigService,
				public amapWebService: AMapWebService,
				public geolocationService: GeolocationService,
				public transform: TransformService) {
	}

	ionViewDidEnter() {
		this.menu.enable(false);

		// 简单判断白天及黑夜，18：00 - 6：00算黑夜
		if (new Date().getHours() >= 6 && new Date().getHours() < 18) {
			this.dayType = 'day';
		} else {
			this.dayType = 'night';
		}

		this.statusBar.backgroundColorByHexString('#0f69bd');

		const options: PositionOptions = {
			enableHighAccuracy: true
		};
		this.geolocationService.getCurrentPosition(options).subscribe((positionResult: PositionResult) => {
			if (positionResult.code === 'ok') {
				const currLocation: LngLat = this.transform.gcj2wgs(positionResult.result.position.coords.longitude, positionResult.result.position.coords.latitude);
				this.currentPosition = `${currLocation.lng},${currLocation.lat}`;
				this.amapWebService.regeocode({location: this.currentPosition}).subscribe((cityInfoResult: any) => {
					if (cityInfoResult.status === '1') {
						this.cityInfo = cityInfoResult.regeocode;
						this.amapWebService.weatherInfo({city: this.cityInfo.addressComponent.adcode, extensions: 'all'}).subscribe((weatherInfoResult: any) => {
							if (weatherInfoResult.status === '1') {
								this.weatherReport = weatherInfoResult.forecasts[0];
								this.live = this.weatherReport.casts[0];
								this.forecasts = this.weatherReport.casts.slice(1);
								if (this.live[`${this.dayType}weather`].indexOf('晴') >= 0) {
									this.weatherType = 'fine';
									this.statusBar.backgroundColorByHexString('#0f69bd');
								} else {
									this.weatherType = 'cloudy';
									this.statusBar.backgroundColorByHexString('#4b5967');
								}
								this.changeDetector.detectChanges();
							}
						});
					}
				});
			}
		});
	}

	ionViewDidLeave() {
		this.menu.enable(true);
		this.statusBar.backgroundColorByHexString(this.config.mainStatusBarColor);
	}
}
