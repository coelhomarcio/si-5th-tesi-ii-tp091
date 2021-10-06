import { Component } from "@angular/core";

import { Home } from "../../interface/home";

@Component({
	selector:    "app-coelho-home",
	templateUrl: "./coelho-home.component.html"
})
export class CoelhoHomeComponent {
	private readonly _home: Home = {
		subTitle1: "Bitcoin",
		text1:     "Bitcoin é a primeira criptomoeda descentralizada do " +
		           "mundo - um tipo de ativo digital que usa criptografia de " +
		           "chave pública para registrar, assinar e enviar " +
		           "transações pela blockchain Bitcoin.",
		text2:     "Cada bitcoin é composto de 100 milhões de satoshis (as " +
		           "menores unidades de bitcoin), tornando o bitcoin " +
		           "individual divisível em até 8 casas decimais.",
		subTitle2: "Sobre",
		text3:     "Esta aplicação foi desenvolviva para fornecer um " +
		           "histórico das cotações do Dólar, Euro e Bitcoin. Além de " +
		           "simular uma carteira virtual de Bitcoin com operações de " +
		           "depósito e saque."
	};

	public get home(): Home {
		return this._home;
	}
}
