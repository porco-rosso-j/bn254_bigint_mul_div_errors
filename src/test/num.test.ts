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
