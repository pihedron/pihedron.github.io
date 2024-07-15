function factorial(n: number) {
  if (n === 0) return 1
  return factorial(n - 1) * n
}

console.log(factorial(69))