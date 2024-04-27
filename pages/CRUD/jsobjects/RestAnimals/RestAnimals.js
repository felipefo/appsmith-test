export default {

	async getAnimal () {
		return await service.getAnimal();

	},

	async removeAnimal (id) {
		return await service.getAnimal(id);

	} 
}