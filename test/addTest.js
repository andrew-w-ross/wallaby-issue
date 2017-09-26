import {add} from "../src"
import {expect} from "chai"
import "./setupTest"

describe("add", function(){
	it("should add", function(){
		expect(add(1,1)).equal(2)
	})
})