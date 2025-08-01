import { Exclude, Expose } from ('class-transformer');

export class TaskCreateDto {

    @Exclude()
    id_;

    @Expose()
    label;

    @Expose()
    description;

    @Expose()
    status;

    @Expose()
    tags;

    @Expose()
    taskTool;

    @Expose()
    dueDate;

    @Expose()
    priority;
}


function validateTaskInput(data) {
  const errors = [];

  // Required fields
  if (!data.label || typeof data.label !== 'string') {
    errors.push("Label is required and must be a string.");
  }

  if (!data.description || typeof data.description !== 'string') {
    errors.push("Description is required and must be a string.");
  }

  // Optional enum validation
  const validStatuses = ["TO-DO", "IN-PROGRESS", "REVIEW", "DONE"];
  if (data.status && !validStatuses.includes(data.status)) {
    errors.push(`Invalid status. Allowed values: ${validStatuses.join(", ")}.`);
  }

  const validPriorities = ["LOW", "MEDIUM", "HIGH"];
  if (data.priority && !validPriorities.includes(data.priority)) {
    errors.push(`Invalid priority. Allowed values: ${validPriorities.join(", ")}.`);
  }

  // Tags should be an array (of strings or ObjectIds ideally)
  if (data.tags && !Array.isArray(data.tags)) {
    errors.push("Tags must be an array.");
  }

  // taskTool is optional but must be a string if present
  if (data.taskTool && typeof data.taskTool !== 'string') {
    errors.push("taskTool must be a string.");
  }

  // dueDate must be a valid date if present
  if (data.dueDate && isNaN(Date.parse(data.dueDate))) {
    errors.push("dueDate must be a valid date.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

module.exports = {
    TaskCreateDto,
    validateTaskInput
};