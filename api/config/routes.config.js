const express = require("express");
const router = express.Router();
const communities = require("../controllers/communities.controller");
const users = require("../controllers/users.controller");
const communitiesMid = require("../middlewares/communities.mid");
const usersMid = require("../middlewares/users.mid");

router.get('/communities', communities.list);
router.get('/communities/:id', communitiesMid.exists, communities.detail);
router.post('/communities/', communities.create);
router.patch('/communities/:id', communitiesMid.exists, communities.update);
router.delete('/communities/:id', communitiesMid.exists, communities.delete);

router.get("/users", users.list);
router.post("/users", users.create);
router.get("/users/:id", usersMid.exists, users.detail);
router.get("/users/:id/confirm", usersMid.exists, users.confirm);
router.patch("/users/:id", usersMid.exists, users.update);
router.delete("/users/:id", usersMid.exists, users.delete);

module.exports = router;