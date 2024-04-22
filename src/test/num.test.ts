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

it("test mul correct", async () => {
	const num = new Fr(73973378440894659502865346085498129804n);
	const num2 = new Fr(73973378440894659502865346085498129804n);

	const mul = num.mul(num2);
	console.log("mul: ", mul);
	console.log("mul: ", mul.toBigInt());
});

it("test mul wrong", async () => {
	const num = new Fr(2958935137635786380114613843419925192240n);
	const num2 = new Fr(73973378440894659502865346085498129804n);

	const mul = num.mul(num2);
	console.log("mul: ", mul);
	console.log("mul: ", mul.toBigInt());
});

it("test div wrong", async () => {
	const num = new Fr(10);
	const num2 = new Fr(3);
	const div = num.div(num2);
	console.log("div: ", div);
	console.log("div: ", div.toBigInt());
});

it("test div wrong large", async () => {
	const num = new Fr(
		10000000000000000000000000000000000000000000000000000000000000n
	);
	const num2 = new Fr(
		5000000000000000000000000000000000000000000000000000000000001n
	);

	const div = num.div(num2);
	console.log("div: ", div);
	console.log("div: ", div.toBigInt());
});

it("test div correct large", async () => {
	const num = new Fr(
		10000000000000000000000000000000000000000000000000000000000000n
	);
	const num2 = new Fr(
		5000000000000000000000000000000000000000000000000000000000000n
	);

	const div = num.div(num2);
	console.log("div: ", div);
	console.log("div: ", div.toBigInt());
});
