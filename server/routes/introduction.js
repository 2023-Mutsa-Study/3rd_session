const express = require('express');

const introController = require('../controllers/introduction.js');

const router = express.Router();



// 자기소개 전체 조회
router.get("/", introController.getFetchIntroduction);

// 자기소개 추가
router.post("/", introController.postIntroduction);

// 자기소개 조회
// -> req.query.postId || http://localhost:8000/introduce/query?postId=6538cef7e3b9391b27f02c6f
router.get("/getQuery", introController.getQueryIntroduction);
// -> req.params.postId  || http://localhost:8000/introduce/6538cef7e3b9391b27f02c6f
router.get("/:postId", introController.getIntroduction);


//자기소개 수정
router.patch("/", introController.updateIntroduction);

// 자기소개 삭제
router.delete("/:postId", introController.deleteIntroduction);





module.exports = router;
