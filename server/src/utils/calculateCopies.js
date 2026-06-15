function calculateTotalCopies(classes) {
  return classes.reduce((total, cls) => total + (parseInt(cls.student_count) || 0), 0);
}

module.exports = { calculateTotalCopies };
