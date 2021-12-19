export function groupBy(list, key) {
  return list.reduce((acc, curr) => {
    if (acc[curr[key]]) {
      acc[curr[key]].push(curr);
      return acc;
    }
    return {
      ...acc,
      [curr[key]]: [curr]
    };
  }, {});
}
