use dep::std::bigint::{Bn254Fr, bn254_fr};
use dep::std::println;

fn main() {

    let num = field_to_bn254fr(21888242871839275222246405745257275088548364400416034343698204186575808495616);
    let num2 = field_to_bn254fr(3189391831712126);

    let ret = num.mul(num2);
    println(bn254fr_to_field(ret));
    // let exp = field_to_bn254fr(21888242871839275222246405745257275088548364400416034343698200997183976783491);
    // assert(ret.eq(exp));

    let ret = num.div(num2);
    println(bn254fr_to_field(ret));

    // let exp = field_to_bn254fr(17503393246338744135796705401862936143640286084087976183614677346605260623896);
    // assert(ret.eq(exp));
}
    
#[test]
fn test_main() {
    main();
}


    fn field_to_bn254fr(x:Field) -> Bn254Fr {
        let bytes = x.to_le_bytes(32);
        let big_int = Bn254Fr::from_le_bytes(bytes);
        big_int
    }

    #[test]
    fn test_field_to_bn254fr() {
        let x = 5000;
        let x_big_int = field_to_bn254fr(x);
        let ret = x_big_int.to_le_bytes();
    }


    fn bn254fr_to_field(x:Bn254Fr) -> Field {
        let ret = x.to_le_bytes();
        let bytes_u8_32_ret = u8_to_u8_32(ret);
        let field_ret = bytes32_to_field(bytes_u8_32_ret);
        field_ret
    }

    fn u8_to_u8_32(arr: [u8]) -> [u8; 32] {
       let mut as_field: [u8; 32] = [0 as u8; 32];
       for i in 0..32 {
          as_field[i] = arr[i];
       }
       as_field
    }

    fn bytes32_to_field(bytes32: [u8; 32]) -> Field {
      let mut v = 1;
      let mut ret = 0 as Field;

      for i in 0..32 {
         ret = ret + (bytes32[i] as Field) * v;
         v = v * 256;
      }

      ret
    }