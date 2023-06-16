
/* eslint-env mocha */

"use strict";

import assert from "node:assert";
import axios from "./helpers.js";

describe("GET /", function() {
	it("responds with a 200 status", async () => {
		const response = await axios.get("/");
		assert.equal(response.status, 200);
		assert.equal(response.data, "OK");
	});
});
