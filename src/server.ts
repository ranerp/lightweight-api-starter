import app from "./app";
import { normalizePort } from "./utils/network";

const port = normalizePort(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(
        `App running at http://localhost:${port} in ${app.get("env")} mode.`,
    );
});
