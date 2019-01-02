import { Component, ViewChild } from '@angular/core';
import { MapPage } from '../map/map';
import { RulesPage } from '../rules/rules';
import { ToolsPage } from '../tools/tools';
import { StatusBar } from '@ionic-native/status-bar';
import { ConfigService } from '../../services/config.service';
import { Tabs } from 'ionic-angular';
import { PatrolPage } from '../patrol/patrol';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild('mainTabs') mainTabs: Tabs;
	tab1Root: any = MapPage;
	tab3Root: any = RulesPage;
	tab4Root: any = ToolsPage;
	tab5Root: any = PatrolPage;

	constructor(private statusBar: StatusBar,
				private config: ConfigService) {
	}

	ionViewDidEnter() {
		this.statusBar.backgroundColorByHexString(this.config.mainStatusBarColor);
	}
}
