function buildUpdateClause(fields, allowed) {
  const keys = Object.keys(fields).filter(
    (k) => allowed.includes(k) && fields[k] !== undefined
  );
  return {
    clause: keys.map((k) => `${k} = ?`).join(', '),
    values: keys.map((k) => fields[k]),
    hasFields: keys.length > 0,
  };
}

module.exports = { buildUpdateClause };
