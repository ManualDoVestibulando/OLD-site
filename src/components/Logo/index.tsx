import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type HeaderProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default function Header(props: HeaderProps) {
  return (
    <Link href="/">
      <a {...props}>
        <img
          src="/logoPreta.webp"
          alt="Manual do Vestibulando"
          width={130}
          height={48}
        />
      </a>
    </Link>
  );
}
