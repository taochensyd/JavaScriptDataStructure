// Function to check if a number is prime
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  // Loop through numbers from 2 to 1000 and console the prime numbers
  for (let i = 2; i <= 1000; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }