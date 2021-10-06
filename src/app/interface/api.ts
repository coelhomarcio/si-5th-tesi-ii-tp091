export interface API {
	time: { updatedISO: string };
	bpi: {
		BRL: { rate_float: number };
		USD: { rate_float: number };
		EUR: { rate_float: number };
	};
}
