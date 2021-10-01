import { Component, Input } from "@angular/core";

import { Footer } from "../../interface/footer";

@Component({
	selector:    "app-coelho-footer",
	templateUrl: "./coelho-footer.component.html"
})
export class CoelhoFooterComponent {
	@Input() public footer!: Footer;
}
