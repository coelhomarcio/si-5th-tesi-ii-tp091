import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator }                                from "@angular/material/paginator";

import { CoelhoWalletService, Currency } from "../../service/coelho-wallet.service";

@Component({
	selector:    "app-coelho-currency",
	templateUrl: "./coelho-currency.component.html"
})
export class CoelhoCurrencyComponent implements OnInit, AfterViewInit {
	public columns = ["timeISO", "USD.BRL", "EUR.BRL", "BTC.BRL"];

	@ViewChild("paginator") paginator!: MatPaginator;

	constructor(
		public wallet: CoelhoWalletService
	) {
	}

	public tableData() {
		return this.wallet.currencies;
	}

	ngOnInit(): void {
	}

	public ngAfterViewInit(): void {
		this.wallet.currencies.paginator = this.paginator;
	}
}
