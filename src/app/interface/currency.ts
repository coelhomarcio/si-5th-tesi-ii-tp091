export interface Currency {
	timeISO: string;
	upDown: {
		USD: string,
		EUR: string,
		BTC: string
	};
	BTC: { BRL: number; USD: number; EUR: number; };
	USD: { BRL: number; };
	EUR: { BRL: number; };
}
