export default {
	async create() {
		let data = await Creat.run().catch(error => {
			let message = Creat.data;
			service.setUIError(message);//vai salvar o erro em um widget com o nome errorWidget
		});
		return data;
	}
}