const arrayToSearch: number[] = Array.from(Array(1000).keys())

function binarySearch(array: number[], target: number): void {
	if (target < 0 || target > array[array.length - 1]) {
		console.log(`Target too large or negative. Could not find ${target}`)
		return
	}

	let currentIndex: number = Math.floor(array.length / 2)
	let top: number = array.length
	let down: number = 0
	while (array[currentIndex] !== target) {
		// console.log(down,array[currentIndex], top, `currentIndex = ${currentIndex}`)
		if (array[currentIndex] > target) {
			top = currentIndex
			currentIndex = Math.floor((currentIndex - down) / 2) + down
		} else {
			down = currentIndex
			currentIndex += Math.ceil((top - currentIndex) / 2)
		}
	}
	if (array[currentIndex] === target) {
		console.log(down, currentIndex, top, `number: ${array[currentIndex]} (Found)`)
	} else {
		console.log(down, currentIndex, top, `number: ${array[currentIndex]} (Not found)`)
	}
}

// binarySearch(arrayToSearch, 0)
// binarySearch(arrayToSearch, 1)
// binarySearch(arrayToSearch, 5)
// binarySearch(arrayToSearch, 55)
// binarySearch(arrayToSearch, 100)
// binarySearch(arrayToSearch, 105)
// binarySearch(arrayToSearch, 177)
// binarySearch(arrayToSearch, 500)
// binarySearch(arrayToSearch, 505)
// binarySearch(arrayToSearch, 507)
// binarySearch(arrayToSearch, 508)
// binarySearch(arrayToSearch, 777)
// binarySearch(arrayToSearch, 888)
// binarySearch(arrayToSearch, 999)
// binarySearch(arrayToSearch, 1000)
// binarySearch(arrayToSearch, 1001)
// binarySearch(arrayToSearch, 1002)
// binarySearch(arrayToSearch, 1003)