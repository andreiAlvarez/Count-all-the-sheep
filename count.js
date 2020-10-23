// solution 1 

const lostSheep = (friday,saturday,total) => total - friday.reduce((acc, next) => acc + next, 0) - saturday.reduce((acc, next) => acc + next, 0);

// solution 2

const lostSheep = (friday,saturday,total) => friday.concat(saturday).reduce((s,l)=>s-l,total);
