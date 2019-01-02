import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { PatrolRecordPage } from './subpages/patrol-record/patrol-record';
import { ConfigService } from '../../services/config.service';

@Component({
	selector: 'page-patrol',
	templateUrl: 'patrol.html'
})
export class PatrolPage {
	@ViewChild(Content) content: Content;
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
	problemListHeight: number = 0;

	constructor(public navCtrl: NavController,
				public config: ConfigService) {
	}

	onMapReady(event) {

	}

	/**
	 * 展示巡查记录
	 */
	showPatrolRecord() {
		this.navCtrl.push(PatrolRecordPage, 123);
	}

	/**
	 * 展示问题列表
	 */
	showProblemList() {
		if (this.problemListHeight === 0) {
			this.problemListHeight = this.content.contentHeight - 82;
		} else {
			this.problemListHeight = 0;
		}
	}
}
