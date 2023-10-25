const Introduction = require("../models/introduction");

exports.getFetchIntroduction = (req, res, next) => {
  Introduction.find()
    .then((intros) => {
      return res.status(200).json({
        introductions: intros,
      });
    })
    .catch((err) => next(err));
};

exports.postIntroduction = (req, res, next) => {
  const pName = req.body.postName;
  const intro = req.body.introduction;

  const newPost = new Introduction({
    postName: pName,
    introduction: intro,
  });

  newPost
    .save()
    .then((result) => {
      return res.status(201).json({
        postId: result._id,
      });
    })
    .catch((err) => next(err));
};

exports.getIntroduction = (req, res, next) => {
  const pId = req.params.postId;

  Introduction.findById(pId)
    .then((intro) => {
      return res.status(200).json({
        postId: intro._id,
        postName: intro.postName,
        introduction: intro.introduction,
        postTime: intro.postTime,
      });
    })
    .catch((err) => next(err));
};

exports.getQueryIntroduction = (req, res, next) => {
  const pId = req.query.postId;

  Introduction.findById(pId)
    .then((intro) => {
      return res.status(200).json({
        postId: intro._id,
        postName: intro.postName,
        introduction: intro.introduction,
        postTime: intro.postTime,
      });
    })
    .catch((err) => next(err));
};

exports.updateIntroduction = (req, res, next) => {
  const pId = req.body.postId;
  const pName = req.body.postName;
  const introduction = req.body.introduction;

  Introduction.findById(pId).then((intro) => {
    intro.postName = pName;
    intro.introduction = introduction;

    intro
      .save()
      .then((result) => {
        return res.status(201).json({
          postId: intro._id,
        });
      })
      .catch((err) => next(err));
  });
};

exports.deleteIntroduction = (req, res, next) => {
  const pId = req.params.postId;

  Introduction.deleteOne({ _id: pId })
    .then(() => {
      return res.status(200).json({
        message: "success",
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
