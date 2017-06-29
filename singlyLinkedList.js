class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.count = 0;
	}

	length() {
		return this.count;
	}

	display() {
		return this;
	}

	add(val) {
		const node = {
			val,
			next: null
		}
		if (!this.head) {
			this.head = node;
			this.count++;
			return;
		}
		let current = this.head;
		while(current.next) {
			current = current.next;
		}
		current.next = node;
		this.count++;
	}

	deleteLast() {
		let current = this.head;
		if (!current.next) {
			current = null;
			this.count = 0;
		}
		while(current.next.next) {
			current = current.next;
		}
		current.next = null;
		this.count--;
		return this;
	}

	removeDuplicates() {
		let hash = {};
		let current = this.head;
		let runner = this.head.next;
		hash[current.val] = true;
		while(runner) {
			if (!(hash[runner.val])) {
				hash[runner.val] = true;
			} else {
				if (runner.next) {
					current.next = current.next.next;	
				} else {
					current.next = null;
				}
				this.count--;
			}
			current = current.next;
			runner = runner.next;
		}
		return this;
	}
};

let list1 = new SinglyLinkedList();
list1.add(3);
list1.add(5);
list1.add(4);
list1.add(3);
list1.deleteLast()