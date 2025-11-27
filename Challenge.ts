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
