## modulo multiplication and division error

### Behaviors

circuit:

```
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
```

println output:

```
// multiplication output
0x1569498e920eee22ea8c49c802b9f270b61bf490b42c2df555f62eba31994f4b
// division output
0x2c441177496e0648260def25a86a4346f60a6df06d09a9032ecf3c751823a89b
```

expected output:

```
0x30644e72e131a029b85045b68181585d2833e84879b9709143d6a0d7c8d23e83
0x26b291cadf48b919fc0e28a1ff0727816d942d9bb5bdc03ea7d4d4ad5a985018
```

The above expected outputs are computed by `mul` and `div` of `Fr` class like below:

```
import { Fr } from "@aztec/aztec.js";
import { it } from "@jest/globals";

it("test", async () => {
	const num = new Fr(
		21888242871839275222246405745257275088548364400416034343698204186575808495616n
	);
	const num2 = new Fr(3189391831712126n);

	const mul = num.mul(num2);
	console.log("mul: ", mul);
	console.log("mul: ", mul.toBigInt());

	const div = num.div(num2);
	console.log("div: ", div);
	console.log("div: ", div.toBigInt());
});

```
