export interface BaseReactProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}
