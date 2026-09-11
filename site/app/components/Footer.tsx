import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer className="border-t border-rule py-16 text-center mt-16">
      <p className="text-body-md text-body-md text-ink-2 mb-4">
        Looking for my next high-ownership backend role — Staff Engineer, Founding Engineer, or Backend Architect.
      </p>
      <Link
        href="mailto:mail4udhaya@gmail.com"
        className="font-label-mono-lg text-label-mono-lg font-semibold text-accent no-underline border-b-2 border-transparent transition-[border-color] duration-200 inline-flex items-center min-h-[44px] my-2 hover:border-accent focus:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        mail4udhaya@gmail.com
      </Link>
      {children}
    </footer>
  );
}
