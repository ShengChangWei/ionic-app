/**
 * Created by laixiangran on 2016/8/6.
 * homepage：http://www.laixiangran.cn
 * 登录服务
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RequestService} from './request.service';
import {ServerData} from '../models/server-data.model';

@Injectable()
export class LoginService {

	constructor(private requestService: RequestService) {
	}

	/**
	 * 登录
	 * @param access
	 * @returns {Observable<ServerData>}
	 */
	login(access): Observable<ServerData> {
		return this.requestService.post('/UserController/login', access);
	}

	/**
	 * 登出
	 * @returns {Observable<ServerData>}
	 */
	logout(): Observable<ServerData> {
		return this.requestService.post('/UserController/logout');
	}
}
