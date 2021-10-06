import { HttpClient }         from "@angular/common/http";
import { Injectable }         from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { API }      from "../interface/api";
import { Currency } from "../interface/currency";

@Injectable({
	providedIn: "root"
})
export class CoelhoWalletService {
	private _urlBRL = "https://api.coindesk.com/v1/bpi/currentprice/BRL.json";
	private _urlUSD_EUR = "https://api.coindesk.com/v1/bpi/currentprice.json";
	private _currencies = new MatTableDataSource<Currency>();
	private _lastCurrency: Currency = {
		timeISO: "",
		upDown:  { USD: "", EUR: "", BTC: "" },
		BTC:     { BRL: 0, USD: 0, EUR: 0 },
		USD:     { BRL: 0 },
		EUR:     { BRL: 0 }
	};
	private _BTCBalance = 0;

	constructor(private http: HttpClient) {
	}

	public get lastCurrency(): Currency {
		return this._lastCurrency;
	}

	public get BTCBalance(): number {
		return this._BTCBalance;
	}

	public deposit(value: number) {
		if (this._currencies.data.length > 0)
			this._BTCBalance += value / this._lastCurrency.BTC.BRL;
	}

	public withdraw(value: number) {
		if (value / this._lastCurrency.BTC.BRL <= this._BTCBalance)
			this._BTCBalance -= value / this._lastCurrency.BTC.BRL;
	}

	public get currencies(): MatTableDataSource<Currency> {
		return this._currencies;
	}

	public async updateCurrencies() {
		const currency: Currency = {
			timeISO: "",
			upDown:  { USD: "", EUR: "", BTC: "" },
			BTC:     { BRL: 0, USD: 0, EUR: 0 },
			USD:     { BRL: 0 },
			EUR:     { BRL: 0 }
		};
		let dataBRL = await this.http.get<API>(this._urlBRL).toPromise();
		let dataUSD_EUR = await this.http.get<API>(this._urlUSD_EUR).toPromise();
		if (dataBRL.time.updatedISO !== dataUSD_EUR.time.updatedISO) {
			return;
		}
		else {
			currency.timeISO = dataBRL.time.updatedISO;
			currency.BTC.BRL = dataBRL.bpi.BRL.rate_float;
			currency.BTC.USD = dataUSD_EUR.bpi.USD.rate_float;
			currency.BTC.EUR = dataUSD_EUR.bpi.EUR.rate_float;
			currency.USD.BRL = currency.BTC.BRL / currency.BTC.USD;
			currency.EUR.BRL = currency.BTC.BRL / currency.BTC.EUR;
			if (this._currencies.data.length > 0) {
				if (currency.USD.BRL > this._lastCurrency.USD.BRL)
					currency.upDown.USD = "trending_up";
				else if (currency.USD.BRL < this._lastCurrency.USD.BRL)
					currency.upDown.USD = "trending_down";
				else
					currency.upDown.USD = "remove_circle_outline";
				if (currency.EUR.BRL > this._lastCurrency.EUR.BRL)
					currency.upDown.EUR = "trending_up";
				else if (currency.EUR.BRL < this._lastCurrency.EUR.BRL)
					currency.upDown.EUR = "trending_down";
				else
					currency.upDown.EUR = "remove_circle_outline";
				if (currency.BTC.BRL > this._lastCurrency.BTC.BRL)
					currency.upDown.BTC = "trending_up";
				else if (currency.BTC.BRL < this._lastCurrency.BTC.BRL)
					currency.upDown.BTC = "trending_down";
				else
					currency.upDown.BTC = "remove_circle_outline";
			}
			else {
				currency.upDown.USD = "remove_circle_outline";
				currency.upDown.EUR = "remove_circle_outline";
				currency.upDown.BTC = "remove_circle_outline";
			}
			this._lastCurrency = Object.assign({}, currency);
			this._currencies.data.push(this._lastCurrency);
			this._currencies._updateChangeSubscription();
		}
	}

	public isUSDUp(str: string) {
		return str === "trending_up";
	}

	public isUSDDown(str: string) {
		return str === "trending_down";
	}

	public isEURUp(str: string) {
		return str === "trending_up";
	}

	public isEURDown(str: string) {
		return str === "trending_down";
	}

	public isBTCUp(str: string) {
		return str === "trending_up";
	}

	public isBTCDown(str: string) {
		return str === "trending_down";
	}

	public isEmpty(str: string) {
		return str === "";
	}
}
