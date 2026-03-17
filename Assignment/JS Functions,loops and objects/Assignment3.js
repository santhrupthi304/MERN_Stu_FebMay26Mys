function mergeSettings(savedSettingsJSON, defaultSettings) {
    const savedSettings = JSON.parse(savedSettingsJSON);
    const merged = { ...defaultSettings };
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}
const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};
const savedSettingsJSON = '{"theme":"dark","language":"fr"}';
const result = mergeSettings(savedSettingsJSON, defaultSettings);
console.log(result.mergedObject);
console.log(result.mergedJSON);