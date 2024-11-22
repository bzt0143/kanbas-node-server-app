import db from "../Database/index.js";
let { assignments } = db;
export const getAllAssignments = () => assignments;
export const createAssignment = (assignment) => {
	const newAssignment = { ...assignment, _id: new Date().getTime().toString() };
	assignments.push(newAssignment);
	return newAssignment;
  };

export const updateAssignment = (id, updatedFields) => {
	const index = assignments.findIndex((a) => a._id === id);
	if (index === -1) return null;
	assignments[index] = { ...assignments[index], ...updatedFields };
	return assignments[index];
  };
  

export const deleteAssignment = (id) => {
	const index = assignments.findIndex((a) => a._id === id);
	if (index === -1) return false;
	assignments.splice(index, 1);
	return true;
  };