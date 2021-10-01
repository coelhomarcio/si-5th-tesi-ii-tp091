import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm }                       from "@angular/forms";

import { CoelhoWalletService } from "../../service/coelho-wallet.service";

@Component({
	selector:    "app-coelho-wallet",
	templateUrl: "./coelho-wallet.component.html"
})
export class CoelhoWalletComponent implements OnInit {
	private _isDeposit = false;
	private _isInput = false;
	private _isMessage = false;
	private _isError = false;
	public valueModel = 0;

	@ViewChild("form") private _form!: NgForm;

	constructor(public wallet: CoelhoWalletService) {
	}

	public get isDeposit(): boolean {
		return this._isDeposit;
	}

	public get isInput(): boolean {
		return this._isInput;
	}

	public get isMessage(): boolean {
		return this._isMessage;
	}

	public get isError(): boolean {
		return this._isError;
	}

	public showInput(isDeposit: boolean) {
		this._form.resetForm();
		this._isDeposit = isDeposit;
		this._isInput = true;
		this._isMessage = false;
		this._isError = false;
	}

	public hideInput() {
		this._isInput = false;
	}

	public submitForm() {
		if (this.wallet.currencies.data.length > 0) {
			if (this.valueModel !== null && this.valueModel >= 0.01) {
				if (this._isDeposit)
					this.wallet.deposit(this.valueModel);
				else if (this.valueModel / this.wallet.lastCurrency.BTC.BRL > this.wallet.BTCBalance)
					this._isError = true;
				else
					this.wallet.withdraw(this.valueModel);
				this._isInput = false;
				this._isMessage = true;
				this.valueModel = 0;
				setTimeout(() => this._isMessage = false, 5000);
			}
		}
	}

	ngOnInit(): void {
	}
}
