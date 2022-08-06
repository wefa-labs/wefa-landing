declare namespace ILayout {
  export interface IProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    stickyHeader?: boolean;
    darkHeader?: boolean;
    footer?: React.ReactNode;
    aside?: React.ReactNode;
  }
}

export { ILayout };
