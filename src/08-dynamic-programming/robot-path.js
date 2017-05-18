/**
 * 8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
 *
 * @param rows
 * @param columns
 * @param obstacle
 * @param path
 * @param position
 * @returns {*}
 */
function findRobotPath(rows, columns, obstacle = [], path = [], position = {row: 0, column:0}) {
  const lastRow = rows - 1;
  const lastColumn = columns - 1;

  if(position.row === lastRow && position.column === lastColumn) {
    return path;
  } else if(obstacle.some((o) => o.row === position.row && o.column === position.column) || position.row > lastRow || position.column > lastColumn) {
    return false;
  } else {
    const moveRight = {row: position.row, column: position.column + 1};
    const rightPath = path.concat([moveRight]);

    const moveDown = {row: position.row + 1, column: position.column};
    const downPath = path.concat([moveDown]);

    return findRobotPath(rows, columns, obstacle, rightPath, moveRight) ||
      findRobotPath(rows, columns, obstacle, downPath, moveDown);
  }
}

module.exports = findRobotPath;