import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>,HTMLUListElement> {
    children?: ReactNode;
    href: string;
    items: {
        value: string;
        href?: string;
    }[];
}