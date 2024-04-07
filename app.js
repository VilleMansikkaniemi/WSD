import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as feedbacks from "./feedbacks.js";

const app = new Hono();


app.get("/feedbacks/1", async (c) => {
    const count = await feedbacks.getFeedbacks(1);
    return c.text(`Feedback 1: ${count}`);
});
app.get("/feedbacks/2", async (c) => {
    const count = await feedbacks.getFeedbacks(2);
    return c.text(`Feedback 2: ${count}`);
});
app.get("/feedbacks/3", async (c) => {
    const count = await feedbacks.getFeedbacks(3);
    return c.text(`Feedback 3: ${count}`);
});


app.post("/feedbacks/1", async (c) => {
    await feedbacks.incFeedbacks(1);
});
app.post("/feedbacks/2", async (c) => {
    await feedbacks.incFeedbacks(2);  
});
app.post("/feedbacks/3", async (c) => {
    await feedbacks.incFeedbacks(3);
});


export default app;
