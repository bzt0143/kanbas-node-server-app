import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Create a new assignment
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.status(201).json(newAssignment);
  });

  // Retrieve all assignments
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.getAllAssignments();
    res.json(assignments);
  });

  // Retrieve an assignment by ID
  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = dao.getAssignmentById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "Assignment not found" });
    }
    res.json(assignment);
  });

  // Update an assignment by ID
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
    if (!updatedAssignment) {
      return res.status(404).json({ error: "Assignment not found" });
    }
    res.json(updatedAssignment);
  });

  // Delete an assignment by ID
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const success = dao.deleteAssignment(assignmentId);
    if (!success) {
      return res.status(404).json({ error: "Assignment not found" });
    }
    res.json({ message: "Assignment deleted successfully" });
  });
}
