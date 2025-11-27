function minimumCarsNeeded(P: number[], S: number[]) {
    // Count how many people need to travel
    const totalPeople = P.reduce((sum, x) => sum + x, 0);

    // Sort the cars by seat capacity in descending order
    const seatsSorted = [...S].sort((a, b) => b - a);

    let peopleRemaining = totalPeople;
    let carsUsed = 0;

    // Allocate cars until all people are accommodated
    for(const seats of seatsSorted) {
        if(peopleRemaining <= 0) break;

        // Put as many people as possible in the current car
        peopleRemaining -= seats;
        carsUsed++;
    }

    return carsUsed;
}

// Example usage:
console.log(minimumCarsNeeded([1, 4, 1], [1, 5, 1]))

console.log(minimumCarsNeeded([4, 4, 2, 4], [5, 5, 2, 5]))

console.log(minimumCarsNeeded([2, 3, 4, 2], [2, 5, 7, 2]))
