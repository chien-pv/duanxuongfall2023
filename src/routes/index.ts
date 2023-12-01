import express from "express";
import { getLogger } from "@/utils/loggers";
const router = express.Router();
const logger = getLogger("INDEX_ROUTE");
// import MdUser from "@/models/user";

/* GET home page. */
router.get("/", async function (_req, res, _next) {
  logger.info("hello Express");
  // console.log(await MdUser.findAll());
  res.render("index", { title: "Express" });
});

export default router;
