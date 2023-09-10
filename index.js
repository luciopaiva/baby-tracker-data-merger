
import process from "node:process";
import fs from "node:fs";
import assert from "node:assert";

function main(f1, f2) {
    const base = JSON.parse(fs.readFileSync(f1, { encoding: "utf-8" }));
    const extra = JSON.parse(fs.readFileSync(f2, { encoding: "utf-8" }));

    assert(Array.isArray(base["records"]));
    assert(Array.isArray(extra["records"]));

    const allRecords = base["records"].concat(extra["records"]);

    for (const record of allRecords) {
        assert(typeof record["fromDate"] === "string");
    }

    allRecords.sort((r1, r2) => {
        return r2["fromDate"].localeCompare(r1["fromDate"]);
    });

    base["records"] = allRecords;

    console.info(JSON.stringify(base, null, 2));
}

if (process.argv.length < 3) {
    console.error("Missing arguments");
    process.exit(1);
}

const f1 = process.argv[2];
const f2 = process.argv[3];

main(f1, f2);
