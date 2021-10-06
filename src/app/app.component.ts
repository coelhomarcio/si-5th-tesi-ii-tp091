import { Component, OnInit } from "@angular/core";

import { Header } from "./interface/header";
import { Footer } from "./interface/footer";

import { CoelhoIntervalService } from "./service/coelho-interval.service";
import { CoelhoWalletService }   from "./service/coelho-wallet.service";

@Component({
	selector: "app-root",
	template: `
		          <app-coelho-header [header]="header"></app-coelho-header>
		          <router-outlet></router-outlet>
		          <app-coelho-footer [footer]="footer"></app-coelho-footer>
	          `
})
export class AppComponent implements OnInit {
	private readonly _header: Header = {
		title:    "Wallet BTC",
		menuIcon: "menu",
		navList:  [
			{
				label: "home",
				link:  "home",
				icon:  "home"
			},
			{
				label: "cotações",
				link:  "currency",
				icon:  "timeline"
			},
			{
				label: "carteira",
				link:  "wallet",
				icon:  "account_balance_wallet"
			}
		]
	};
	private readonly _footer: Footer = {
		text:     "Desenvolvido por",
		dev:      {
			name:   "Marcio Rodrigues Paiva Coelho",
			RA:     "RA 0050831921015",
			gitHub: {
				label: "GitHub",
				link:  "https://github.com/coelhomarcio"
			}
		},
		icon:     "launch",
		coinDesk: {
			label: "Powered by CoinDesk",
			link:  "https://old.coindesk.com/price/bitcoin"
		}
	};

	public get header(): Header {
		return this._header;
	}

	public get footer(): Footer {
		return this._footer;
	}

	constructor(
		private wallet: CoelhoWalletService,
		private interval: CoelhoIntervalService
	) {
	}

	ngOnInit(): void {
		this.wallet.updateCurrencies().then();
		this.interval.startInterval();
	}
}
