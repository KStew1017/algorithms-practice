function two_crystal_balls(breaks) {
    let low = 0;
    let high = breaks.length - 1;

	while (low < high) {
		let midpoint = Math.floor(low + (high - low) / 2);
		if (breaks[midpoint]) {
			high = midpoint;
			for (let i = 0; i <= high; ++i) {
				if (breaks[i]) {
                    console.log(i)
                    return i;
				}
			}
		} else {
			low = midpoint + 1;
			for (let i = low; i <= high; ++i) {
                if (breaks[i]) {
                    console.log(i)
					return i;
				}
			}
		}
    }
    console.log("Not found")
    return -1
}

two_crystal_balls([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true])