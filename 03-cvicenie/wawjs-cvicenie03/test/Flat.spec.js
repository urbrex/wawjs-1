const assert = require('assert');

		let flat = (o) => {
			for (let k in o) {
				o[k] = this.k;
			}

			return o;
		}

describe("Flat test ", function() {
	it('Flat', function(){
		let x = {px:10};
		let y = Object.create(x);
		let z = Object.create(y);
		y.py = 20;
		z.pz = 30;



		let real = flat(z);

		assert(real.hasOwnProperty("px"));
		assert(real.hasOwnProperty("py"));
		assert(real.hasOwnProperty("pz"));
		assert(real===z);
	})
})