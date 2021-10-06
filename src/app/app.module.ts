import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule }             from "@angular/forms";
import { HttpClientModule }        from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import br                     from "@angular/common/locales/pt";

import { AppRoutingModule }  from "./module/app-routing.module";
import { AppMaterialModule } from "./module/app-material.module";

import { AppComponent }            from "./app.component";
import { CoelhoHeaderComponent }   from "./component/coelho-header/coelho-header.component";
import { CoelhoFooterComponent }   from "./component/coelho-footer/coelho-footer.component";
import { CoelhoHomeComponent }     from "./component/coelho-home/coelho-home.component";
import { CoelhoCurrencyComponent } from "./component/coelho-currency/coelho-currency.component";
import { CoelhoWalletComponent }   from "./component/coelho-wallet/coelho-wallet.component";

import { CoelhoWalletService }   from "./service/coelho-wallet.service";
import { CoelhoIntervalService } from "./service/coelho-interval.service";

registerLocaleData(br);

@NgModule({
	declarations: [
		AppComponent,
		CoelhoHeaderComponent,
		CoelhoFooterComponent,
		CoelhoHomeComponent,
		CoelhoCurrencyComponent,
		CoelhoWalletComponent
	],
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		AppMaterialModule
	],
	providers:    [CoelhoWalletService, CoelhoIntervalService],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
