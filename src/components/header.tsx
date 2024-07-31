import { gql } from "../__generated__";
import Link from "next/link";
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from "../__generated__/graphql";

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment["title"];
  siteDescription: HeaderGeneralSettingsFragmentFragment["description"];
  menuItems: PrimaryMenuItemFragmentFragment[];
  BrandLogo: string;
  CTAText: string;
  CTALink: string;
};

export default function Header({
  siteTitle,
  siteDescription,
  menuItems,
  BrandLogo,
  CTAText,
  CTALink
}: HeaderProps) {
  return (
    <header className="px-[23px] py-[20px] flex flex-row items-center justify-between bg-primary">
        <Link href="/">
            <img src={BrandLogo} alt={siteDescription} />
        </Link>

        <nav>
          <ul className="flex flex-row items-center list-none gap-[43px] font-kallisto">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link className="text-white text-[16px] uppercase hover:text-secondary" href={item.uri}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link className="btn-circle" href={CTALink}>{CTAText}</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `)
};
