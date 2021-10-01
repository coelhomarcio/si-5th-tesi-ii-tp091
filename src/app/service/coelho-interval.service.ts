import { Injectable } from "@angular/core";

import { CoelhoWalletService } from "./coelho-wallet.service";

@Injectable({
	providedIn: "root"
})
export class CoelhoIntervalService {
	private _interval: any;
	private _timeout = 60000;
	private _isOn = false;

	constructor(private wallet: CoelhoWalletService) {
	}

	public get isOn(): boolean {
		return this._isOn;
	}

	public switchOnOff() {
		this._isOn = !this._isOn;
	}

	public startInterval() {
		if (!this._isOn)
			this._interval = setInterval(() => {
				this.wallet.updateCurrencies().then();
			}, this._timeout);
	}

	public stopInterval() {
		if (this._isOn) {
			clearInterval(this._interval);
			this.switchOnOff();
		}
	}

	public restartInterval() {
		this.stopInterval();
		this.wallet.updateCurrencies().then();
		setTimeout(() => this.startInterval(), 5000);
	}
}
