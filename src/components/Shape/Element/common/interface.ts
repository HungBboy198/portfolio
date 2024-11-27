export interface elementPublicProps {
  className?: any
  targetRef?: React.LegacyRef<HTMLDivElement> | undefined
  id?: any
  style?: any
}
export interface elementProps extends elementPublicProps {
  children: React.ReactNode | JSX.Element
}
