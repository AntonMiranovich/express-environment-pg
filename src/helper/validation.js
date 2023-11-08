function isValidEnviromentId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error("id must be a number");
    if (id < 1) throw new Error("id is not found");
  
    next();
  }
  
  function isValidBody(req, res, next) {
    const { label, category, priority } = req.body;
    if (!label) throw new Error("empty");
    if (!category) throw new Error("empty");
    if (!priority) throw new Error("empty");
  
    next();
  }
  
  module.exports = { isValidEnviromentId, isValidBody };