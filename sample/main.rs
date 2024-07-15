fn factorial(n: u32) -> u32 {
    match {
        0 => 1,
        _ => factorial(n - 1) * n,
    }
}

fn main() {
    println!("{}", factorial(69));
}