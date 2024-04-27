export default {
	async create() {
		let data = await Create.run().catch(error => {
			let message = Create.data;
			service.setUIError(message);//vai salvar o erro em um widget com o nome errorWidget
		});
		return data;
	}
}