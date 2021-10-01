import { NgModule }         from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule }    from "@angular/material/icon";

const materials = [
	MatToolbarModule,
	MatIconModule
];

@NgModule({
	imports: materials,
	exports: materials
})
export class AppMaterialModule {
}
