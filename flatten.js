const fs = require("fs");

function flattenObject(obj, prefix = "") {
    const flattened = {};

    for (const key in obj) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}_${key}` : key;

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            Object.assign(flattened, flattenObject(value, newKey));
        } else {
            flattened[newKey] = value;
        }
    }

    return flattened;
}

// Process each language file
["en", "bn"].forEach((lang) => {
    const filePath = `messages/${lang}.json`;

    // Read the file
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Flatten it
    const flattened = flattenObject(data);

    // Write it back
    fs.writeFileSync(filePath, JSON.stringify(flattened, null, 2), "utf8");

    console.log(
        `✓ Flattened ${filePath} - ${Object.keys(flattened).length} keys`,
    );
});

console.log("\nAll translation files have been flattened!");
