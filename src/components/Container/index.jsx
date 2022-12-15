

export default function Container({ children, className = '' }) {
  return (<div className={`px-2 md:px-24 w-full ${className}`}>{children}</div>);
}