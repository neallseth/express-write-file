import express from "express";
import fs from "fs/promises";
const server = express();
server.use(express.json());

server.post("/create", async (req, res) => {
  try {
    const { name, contents } = req.body;
    console.log(req.body);
    await fs.writeFile(`./storage/${name}.txt`, contents);
    res.json({ res: `successfully created file: ${name}.txt` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", msg: err });
  }
});

server.listen(3000, () => console.log("server started"));
