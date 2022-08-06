declare namespace ISpline {
  export interface IProps {
    points: IPoints[];
    tension: number;
    close: boolean;
    cb?: Callback;
  }

  interface Callback<T> {
    (error: Error): void;
    (error: null, value: T): void;
  }

  export interface IPoints {
    x: number;
    y: number;
    originX?: number;
    originY?: number;
    noiseOffsetX?: number;
    noiseOffsetY?: number;
  }
}

export { ISpline };
