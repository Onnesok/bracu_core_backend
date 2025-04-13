const ThesisGroup = require("../models/ThesisGroup");

// POST - Add thesis group
exports.addThesisGroup = async (req, res) => {
  try {
    const newGroup = new ThesisGroup(req.body);
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET - All groups
exports.getAllThesisGroups = async (req, res) => {
  try {
    const data = await ThesisGroup.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT - Update group
exports.updateThesisGroup = async (req, res) => {
  try {
    const updated = await ThesisGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Group not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE - Remove group
exports.deleteThesisGroup = async (req, res) => {
  try {
    const deleted = await ThesisGroup.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Group not found" });
    res.status(200).json({ message: "Group deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH - By domain
exports.searchByDomain = async (req, res) => {
  try {
    const domain = req.query.domain;
    const results = await ThesisGroup.find({ possibleDomains: domain });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
