export default {

	async getData () {
		var teste = await service.getUrlAppSmith();
		showAlert(teste);
	},

}
