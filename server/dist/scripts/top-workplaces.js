"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
(async () => {
    try {
        const response = await axios_1.default.get("http://localhost:3000/shifts");
        const shifts = response.data;
        if (!Array.isArray(shifts)) {
            throw new Error("API response is not a valid array.");
        }
        console.log("🔍 Sample shift (raw):", JSON.stringify(shifts[0], null, 2));
        const workplaceCountMap = {};
        for (const shift of shifts) {
            const id = shift.workplace?.id;
            const name = shift.workplace?.name || "Unknown";
            if (id !== undefined) {
                if (!workplaceCountMap[id]) {
                    workplaceCountMap[id] = { name, count: 0 };
                }
                workplaceCountMap[id].count += 1;
            }
        }
        const topWorkplaces = Object.entries(workplaceCountMap)
            .sort((a, b) => b[1].count - a[1].count)
            .slice(0, 5);
        console.log("\n✅ Top 5 Most Active Workplaces:");
        for (const [id, { name, count }] of topWorkplaces) {
            console.log(`🏢 Workplace ${name} (ID: ${id}): ${count} shifts`);
        }
    }
    catch (error) {
        console.error("❌ Error fetching or processing data:", error.message || error);
        if (error.response) {
            console.error("🔍 Server responded with:", error.response.status, error.response.data);
        }
        else if (error.request) {
            console.error("📡 No response received. Possible CORS or server issue.");
        }
        else {
            console.error("⚠️ Error details:", error);
        }
    }
})();
//# sourceMappingURL=top-workplaces.js.map