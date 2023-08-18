import Express, { json } from "express";
import cors from "cors";

(() => {
  const app = Express();
  const port = 3001;
  app.use(json());
  app.use(cors());


  app.post("/api/logs", (req, res) => {
    const body = req.body;

    console.log(body)
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();
