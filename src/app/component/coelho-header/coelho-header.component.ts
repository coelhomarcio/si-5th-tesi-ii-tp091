import { Component, Input } from "@angular/core";

import { Header }              from "../../interface/header";
import { CoelhoWalletService } from "../../service/coelho-wallet.service";

@Component({
	selector:    "app-coelho-header",
	templateUrl: "./coelho-header.component.html"
})
export class CoelhoHeaderComponent {
	@Input() public header!: Header;

	constructor(public wallet: CoelhoWalletService) {
	}
}
