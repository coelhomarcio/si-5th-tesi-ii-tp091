import { NgModule }           from "@angular/core";
import { MatToolbarModule }   from "@angular/material/toolbar";
import { MatButtonModule }    from "@angular/material/button";
import { MatIconModule }      from "@angular/material/icon";
import { MatMenuModule }      from "@angular/material/menu";
import { MatListModule }      from "@angular/material/list";
import { MatTableModule }     from "@angular/material/table";
import { MatTooltipModule }   from "@angular/material/tooltip";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule }     from "@angular/material/input";

const materials = [
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatMenuModule,
	MatListModule,
	MatTableModule,
	MatTooltipModule,
	MatPaginatorModule,
	MatFormFieldModule,
	MatInputModule
];

@NgModule({
	imports: materials,
	exports: materials
})
export class AppMaterialModule {
}
