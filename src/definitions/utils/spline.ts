import { ISpline } from "./spline.d";

function formatPoints(points: ISpline.IPoints[], close = false) {
  let _points: number[][] = [];
  _points = points.map(({ x, y }) => [x, y]);

  if (close) {
    const lastPoint = _points[points.length - 1];
    const secondToLastPoint = _points[points.length - 2];

    const firstPoint = _points[0];
    const secondPoint = _points[1];

    _points.unshift(lastPoint);
    _points.unshift(secondToLastPoint);

    _points.push(firstPoint);
    _points.push(secondPoint);
  }

  return _points.flat();
}

function spline(
  points: ISpline.IPoints[],
  tension: number | 1,
  close: boolean | false,
  // cb = undefined,
): string {
  const _points: number[] = formatPoints(points, close);

  const size = _points.length;
  const last = size - 4;

  const startPointX = close ? _points[2] : _points[0];
  const startPointY = close ? _points[3] : _points[1];

  let path = "M" + [startPointX, startPointY];

  // cb && cb("MOVE", [startPointX, startPointY]);

  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? _points[i - 2] : _points[0];
    const y0 = i ? _points[i - 1] : _points[1];

    const x1 = _points[i + 0];
    const y1 = _points[i + 1];

    const x2 = _points[i + 2];
    const y2 = _points[i + 3];

    const x3 = i !== last ? _points[i + 4] : x2;
    const y3 = i !== last ? _points[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];

    // cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }

  return path;
}

export { spline };
