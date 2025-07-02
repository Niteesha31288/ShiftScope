import axios from 'axios';
interface Shift {
  workplaceId: number;
}
interface Workplace {
  id: number;
  name: string;
}
(async () => {
  try {
    const response = await axios.get<{ data: Shift[] }>('http://localhost:3000/shifts');
    const shifts = response.data.data;
    if (!Array.isArray(shifts)) {
      throw new Error('API response is not a valid array.');
    }
    // Counting shifts by workplaceId
    const countMap: Record<number, number> = {};
    for (const shift of shifts) {
      const id = shift.workplaceId;
      if (!countMap[id]) {
        countMap[id] = 0;
      }
      countMap[id]++;
    }
    // Sorting to pick top 5
    const sortedTop = Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    // Fetch names for top workplaces
    const result: { name: string; shifts: number }[] = [];
    for (const [id, count] of sortedTop) {
      try {
        const workplaceResp = await axios.get<{ data: Workplace }>(`http://localhost:3000/workplaces/${id}`);
        const name = workplaceResp.data.data.name;
        result.push({ name, shifts: count });
      } catch (err) {
        result.push({ name: `Workplace ${id}`, shifts: count });
      }
    }
    // Display result
    console.log(JSON.stringify(result, null, 2));
  } catch (error: any) {
    console.error('❌ Error fetching or processing data:', error.message || error);
    if (error.response) {
      console.error('🔍 Server responded with:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('📡 No response received.');
    } else {
      console.error('⚠️ Error details:', error);
    }
  }
})();

