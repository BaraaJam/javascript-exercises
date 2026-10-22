function fetchConfig(jsonString) {
    try {
        const config = JSON.parse(jsonString);
        console.log("Configuration loaded successfully:", config);
        return config;
    } catch (error) {
        console.error("Configuration error: Please check your data.");
    }
}

// Test 1: Valid JSON string
const validJSON = '{"theme": "dark", "version": "1.0.0"}';
fetchConfig(validJSON);

// Test 2: Broken (invalid) JSON string
const brokenJSON = '{theme: dark, version: 1.0.0}';
fetchConfig(brokenJSON);