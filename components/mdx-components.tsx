// components/MDXComponents.tsx
const InlineCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="bg-text-200/5 border border-0.5 border-border-300 text-danger-000 whitespace-pre-wrap rounded-[0.4rem] px-1 py-px text-[0.9rem] font-mono">
      {children}
    </code>
  );
};

// This handles the code blocks (```) separately
const Pre = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
      {children}
    </pre>
  );
};

export const mdxComponents = {
  // Logic: if it's NOT inside a <pre>, use our custom styles
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: (props: any) => {
    // If the parent is NOT a pre, it's inline code
    return <InlineCode {...props} />;
  },
  pre: Pre,
};
