function isPrime(numbers) {
    for (let i = 2; i < numbers; i++) {
      if (numbers % i === 0) {
        return false;
      }
    }

    return numbers !== 1;
  }
  let array = [1, 2, 3, 13, 14, 21, 23, 32, 35];
  let primes = array.filter(isPrime);
  
  console.log(array);
  console.log(primes);