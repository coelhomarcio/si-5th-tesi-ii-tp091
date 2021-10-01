import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoelhoHomeComponent }     from "../component/coelho-home/coelho-home.component";
import { CoelhoCurrencyComponent } from "../component/coelho-currency/coelho-currency.component";
import { CoelhoWalletComponent }   from "../component/coelho-wallet/coelho-wallet.component";

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", component: CoelhoHomeComponent },
	{ path: "currency", component: CoelhoCurrencyComponent },
	{ path: "wallet", component: CoelhoWalletComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
