const getFeedbacks = async (i) => {
    const kv = await Deno.openKv();
    if (i===1) {
        const count = await kv.get(["feedback1"]);
        return count?.value ?? "0";
    } else if (i===2) {
        const count = await kv.get(["feedback2"]);
        return count?.value ?? "0";
    } else {
        const count = await kv.get(["feedback3"]);
        return count?.value ?? "0";
    }
};

const incFeedbacks = async (i) => {
    const kv = await Deno.openKv();
    if (i===1) {
        const count = await getFeedbacks(1)
        await kv.set(["feedback1"], count +1);
    } else if (i===2) {
        const count = await getFeedbacks(2)
        await kv.set(["feedback2"], count +1);
    } else {
        const count = await getFeedbacks(3)
        await kv.set(["feedback3"], count +1);
    }    
};

export { getFeedbacks, incFeedbacks };
