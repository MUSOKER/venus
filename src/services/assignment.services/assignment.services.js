const { AssignmentsModel } = require('../../models');

const createAssignment = async ({
  title,
  description,
  requirements,
  statuss,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
}, transaction) => {
  const Assignment = new AssignmentsModel({
    title,
    description,
    requirements,
    statuss,
    category,
    topics,
    createdBy,
    difficultyLevel,
    deadline,
    marks,
  });
  const saveAssignment = await Assignment.save({ transaction });
  return saveAssignment;
};

const getAssignments = async ({
  title, category, statuss, difficultyLevel,
  marks,
}) => {
  const query = {};
  if (title) {
    query.title = title;
  }
  if (statuss) {
    query.statuss = statuss;
  }
  if (difficultyLevel) {
    query.difficultyLevel = difficultyLevel;
  }
  if (category && category.length > 0) {
    query.category = { $in: category };
  }
  if (marks) {
    query.marks = marks;
  }
  return AssignmentsModel.find(query);
};

const updateTheAssignment = async ({
  assignmentId,
  title,
  description,
  requirements,
  statuss,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
}) => AssignmentsModel.findByIdAndUpdate(assignmentId, {
  title,
  description,
  requirements,
  statuss,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
});

const deleteAssignment = async (AssignmentID) => AssignmentsModel.findByIdAndDelete(AssignmentID);

module.exports = {
  createAssignment,
  getAssignments,
  deleteAssignment,
  updateTheAssignment,
};
