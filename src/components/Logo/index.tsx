import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";
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
        <Image
          src="/logoPreta.png"
          alt="Manual do Vestibulando"
          height={49}
          width={130}
        />
      </a>
    </Link>
  );
}
