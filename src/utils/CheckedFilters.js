export class CheckedFilters {
	constructor(items = []) {
		this.items = items;
	}

	has(name) {
		return this.items.findIndex(item => item.name === name) >= 0;
	}

	add(item) {
		if (!this.has(item.name)) {
			return new CheckedFilters([ ...this.items, item ]);
		}
		return this;
	}

	delete(item) {
		if (this.has(item.name)) {
			return new CheckedFilters(this.items.filter(({ name }) => name !== item.name));
		}
		return this;
	}

	toggle(item) {
		if (!this.has(item.name)) return this.add(item);
		return this.delete(item);
	}

	clear() {
		return new CheckedFilters();
	}

	size() {
		return this.items.length;
	}
}
