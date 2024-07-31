import { gql } from "../__generated__";
import Link from "next/link";
import {
  HeroSectionBlocks
} from "../__generated__/graphql";

type HeroSectionProps = {
    heroCta: HeroSectionBlocks['heroCta'],
    heroTitle: HeroSectionBlocks['heroTitle'],
    heroDescription: HeroSectionBlocks['heroDescription']
}


export default function HeroSection( { heroTitle, heroDescription, heroCta } : HeroSectionProps ) {
    return (
      <section className="bg-primary">
        <h1>{heroTitle}</h1>
      </section>
    );
  }

  HeroSection.fragments = {
    heroSectionFragments: gql(`
        fragment HeroSectionBlocks on HeroSectionBlocks {
            __typename
            heroCta
            heroDescription
            heroTitle
        }
    `),
  }