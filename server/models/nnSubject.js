const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nnsubjectSchema = mongoose.Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    department: {
      type: String
    },
    grade: {
      type: String
    },
    subjectName: {
      type: String
    },
    professorName: {
      type: String
    },
    subjectType: {
      type: String
    },
    subjectPoint: {
      type: Number
    },
    date: {
      type: String
    },
    subjectCode: {
      type: String
    },
    classroom: {
      type: String
    },
    division: {
      type: String
    },
    rate: {
      type: String
    }, 
    countApply: {
        type: String
      },
    limitApply: {
      type: String
    },
    competitionRate: {
        type: String
      }
    },
   { timestamps: true }
);

const nnSubject = mongoose.model("nnSubject", nnsubjectSchema);

module.exports = { nnSubject };
