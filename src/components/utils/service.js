/* eslint-disable class-methods-use-this */
export default class Service {
	async getID() {
		const response = await fetch('https://aviasales-test-api.kata.academy/search');
		if (response.status === 404) {
			throw new Error('This is end!');
		}
		const data = await response.json();
		return data.searchId;
	}

	async getInfo(id) {
		const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
		if (response.status === 500) {
			return this.getInfo(id);
		}
		if (response.status === 404) {
			throw new Error('This is end!');
		}
		const data = await response.json();
		return data;
	}
}
