import err from "express/lib/router/route";
import res from "express/lib/response";

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500), send('something went wrong');
})