import { NgModule }                from "@angular/core";
import { HttpClientModule }        from "@angular/common/http";
import { FormsModule }             from "@angular/forms";
import { MatButtonModule }         from "@angular/material/button";
import { MatCardModule }           from "@angular/material/card";
import { MatOptionModule }         from "@angular/material/core";
import { MatFormFieldModule }      from "@angular/material/form-field";
import { MatInputModule }          from "@angular/material/input";
import { MatListModule }           from "@angular/material/list";
import { MatMenuModule }           from "@angular/material/menu";
import { MatPaginatorModule }      from "@angular/material/paginator";
import { MatSelectModule }         from "@angular/material/select";
import { MatTableModule }          from "@angular/material/table";
import { MatTooltipModule }        from "@angular/material/tooltip";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData }      from "@angular/common";
import br                          from "@angular/common/locales/pt";

import { AppComponent }            from "./app.component";
import { CoelhoHeaderComponent }   from "./component/coelho-header/coelho-header.component";
import { CoelhoFooterComponent }   from "./component/coelho-footer/coelho-footer.component";
import { CoelhoHomeComponent }     from "./component/coelho-home/coelho-home.component";
import { CoelhoCurrencyComponent } from "./component/coelho-currency/coelho-currency.component";
import { CoelhoWalletComponent }   from "./component/coelho-wallet/coelho-wallet.component";

import { AppRoutingModule }      from "./module/app-routing.module";
import { AppMaterialModule }     from "./module/app-material.module";
import { CoelhoIntervalService } from "./service/coelho-interval.service";
import { CoelhoWalletService }   from "./service/coelho-wallet.service";

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
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		AppMaterialModule,
		MatListModule,
		MatMenuModule,
		MatButtonModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		MatSelectModule,
		MatOptionModule,
		MatCardModule,
		MatTableModule,
		MatPaginatorModule,
		MatTooltipModule
	],
	providers:    [CoelhoWalletService, CoelhoIntervalService],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
