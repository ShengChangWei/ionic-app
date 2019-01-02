import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { ServerData } from '../../../../models/server-data.model';

@Component({
	selector: 'page-patrol-record',
	templateUrl: 'patrol-record.html',
})
export class PatrolRecordPage {
	currentTask: any; // 当前任务
	currentRecord: any; // 当前选中的记录
	currentRecords: any[]; // 该任务所有的巡查记录
	riverGra: any;

	constructor(public navCtrl: NavController,
				public menuCtrl: MenuController,
				public navParams: NavParams) {
	}

	ionViewDidEnter() {
		this.menuCtrl.enable(false);
		this.currentTask = this.navParams.data.task;
		this.riverGra = this.navParams.data.riverGra;
		this.getPatrolRecords();
		console.log(this.navParams);
	}

	ionViewWillLeave() {
		this.menuCtrl.enable(true);
	}

	/**
	 * 获取该任务所有的巡查记录
	 */
	getPatrolRecords() {

	}

	/**
	 * 查询巡查记录详情
	 * @param currentRecord
	 */
	changePatrolDetails(currentRecord: any) {
		this.currentRecord = currentRecord;

	}
}
