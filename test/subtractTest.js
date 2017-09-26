import { subtract } from "../src"
import { expect } from "chai"
import "./setupTest"

describe("add", function () {
	it("should add", function () {
		expect(subtract(1, 1)).equal(0)
	})
})