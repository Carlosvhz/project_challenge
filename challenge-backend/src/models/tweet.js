const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    creator_name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tweets", tweetSchema);