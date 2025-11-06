export default function Button({
  children,
  as = "button",
  className = "",
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
