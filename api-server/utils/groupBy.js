exports.groupBy = (arr, identifier) => {
  return arr.reduce((acc, cVal) => {
    acc[String(cVal[identifier])] = [
      ...(acc[String(cVal[identifier])] || []),
      cVal,
    ];
    return acc;
  }, {});
};
