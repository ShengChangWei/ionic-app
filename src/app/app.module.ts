import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login';
import { TabsPage } from './pages/tabs/tabs';
import { MapPage } from './pages/map/map';
import { RulesPage } from './pages/rules/rules';
import { SettingsPage } from './pages/settings/settings';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';
import { ConfigService } from './services/config.service';
import { TipsService } from './services/tips.service';
import { LoginService } from './services/login.service';
import { ToolsPage } from './pages/tools/tools';
import { RealTimeTrafficPage } from './pages/tools/subpages/realTimeTraffic/realTimeTraffic';
import { WeatherReportPage } from './pages/tools/subpages/weatherReport/weatherReport';
import { EssenceIonicModule } from 'essence-ionic';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { IsDebug } from '@ionic-native/is-debug';
import { SatelliteCloudPage } from './pages/tools/subpages/satelliteCloud/satellite-cloud';
import { RadarMapPage } from './pages/tools/subpages/radarMap/radar-map';
import { ENgxServicesModule } from 'e-ngx-services';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { PatrolPage } from './pages/patrol/patrol';
import { PatrolRecordPage } from './pages/patrol/subpages/patrol-record/patrol-record';
import { ENgxEsriMapModule } from 'e-ngx-esrimap';
import { Camera } from '@ionic-native/camera';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(AppComponent, {
			mode: 'ios',
			iconMode: 'ios',
			backButtonText: '返回',
			tabsHideOnSubPages: 'true',
			modalEnter: 'modal-slide-in',
			modalLeave: 'modal-slide-out',
			tabsPlacement: 'bottom',
			pageTransition: 'ios'
		}),
		IonicStorageModule.forRoot(),
		EssenceIonicModule,
		ENgxServicesModule,
		ENgxEsriMapModule
	],
	declarations: [
		AppComponent,
		LoginPage,
		TabsPage,
		MapPage,
		RulesPage,
		PatrolPage,
		SettingsPage,
		ToolsPage,
		RealTimeTrafficPage,
		WeatherReportPage,
		SatelliteCloudPage,
		RadarMapPage,
		PatrolRecordPage
	],
	bootstrap: [IonicApp],
	entryComponents: [
		AppComponent,
		LoginPage,
		TabsPage,
		MapPage,
		RulesPage,
		PatrolPage,
		SettingsPage,
		ToolsPage,
		RealTimeTrafficPage,
		WeatherReportPage,
		SatelliteCloudPage,
		RadarMapPage,
		PatrolRecordPage
	],
	providers: [
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		ConfigService,
		AuthService,
		TipsService,
		LoginService,
		RequestService,
		AppVersion,
		Network,
		StatusBar,
		SplashScreen,
		FileOpener,
		File,
		ScreenOrientation,
		IsDebug,
		BackgroundMode,
		AndroidPermissions,
		Camera
	]
})
export class AppModule {
}
