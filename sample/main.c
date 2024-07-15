#include <stdio.h>

int factorial(int n)
{
  if (n == 0)
  {
    return 1;
  }
  return factorial(n - 1) * n;
}

int main()
{
  printf(factorial(69));
  return 0;
}