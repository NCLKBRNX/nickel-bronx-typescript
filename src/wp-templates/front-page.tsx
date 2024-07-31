import { gql } from "../__generated__";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import HeroSection from "../components/hero-section";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props?.data?.primaryMenuItems?.nodes ?? [];
  const brandLogo = props.data.nickelBronxHeader.config.brandLogo.node.sourceUrl;
  const ctaText   = props.data.nickelBronxHeader.config.ctaText;
  const ctaLink   = props.data.nickelBronxHeader.config.ctaLink;
  // @ts-ignore
  const currentEditorBlocks   = props?.data?.page?.editorBlocks;
  console.log(currentEditorBlocks);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
        BrandLogo={brandLogo}
        CTAText={ctaText}
        CTALink={ctaLink}
      />
      
      {/* Content */}
      {/* {currentEditorBlocks.map((item, clientId ) => { item.__typename === 'AcfHeroSection' ?? <HeroSection heroTitle={item.__typen} />})} */}
      {currentEditorBlocks && (
          <div>
            hello
          </div>
        )
      }
      <Footer />
    </>
  );
};

Component.query = gql(`
query GetHomePage {
  generalSettings {
    title
    description
  }
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    nodes {
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
  }
  nickelBronxHeader {
    config {
      ctaText
      ctaLink
      brandLogo {
        node {
          sourceUrl
        }
      }
    }
  }
  page(id: "cG9zdDoyMw==") {
    editorBlocks {
      ... on AcfHeroSection {
        heroSectionBlocks {
          heroCta {
            ctaLink {
              target
              title
              url
            }
            ctaText
          }
          heroDescription
          heroTitle
        }
        clientId
      }
    }
  }
}
`);

export default Component;
