function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];
  return matrix.reduce((acc, row, i) => {
    if (!Array.isArray(row) || row.length === 0) return acc;
    const ordered = i % 2 === 0 ? row : row.slice().reverse();
    acc.push(...ordered);
    return acc;
  }, []);
}

module.exports = towelSort;
