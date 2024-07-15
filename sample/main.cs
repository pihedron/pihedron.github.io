using System;

namespace Pihedron
{
    class Program
    {
        static int Factorial(int n)
        {
            if (n == 0)
            {
                return 1;
            }
            return Factorial(n - 1) * n;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(Factorial(69));
        }
    }
}