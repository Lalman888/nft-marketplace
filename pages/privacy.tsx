import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | My NFT Marketplace</title>
      </Head>
      <Container maxW="container.lg" py={10}>
        <Heading as="h1" size="2xl" mb={6}>
          Privacy Policy
        </Heading>
        <Text fontSize="xl" mb={6}>
          At My NFT Marketplace, accessible from https://mynftmarketplace.com,
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by My NFT Marketplace and how we use it.
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          Log Files
        </Heading>
        <Text fontSize="lg" mb={6}>
          My NFT Marketplace follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services{"'"} analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users{"'"} movement on the website,
          and gathering demographic information.
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          Cookies and Web Beacons
        </Heading>
        <Text fontSize="lg" mb={6}>
          Like any other website, My NFT Marketplace uses {"'cookies'"}. These
          cookies are used to store information including visitors{"'"}{" "}
          preferences, and the pages on the website that the visitor accessed or
          visited. The information is used to optimize the users{"'"} experience
          by customizing our web page content based on visitors{"'"} browser
          type and/or other information.
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          Privacy Policies
        </Heading>
        <Text fontSize="lg" mb={6}>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of My NFT Marketplace. Our Privacy Policy was
          created with the help of the Privacy Policy Generator and the Privacy
          Policy Generator Online.
        </Text>
        <Text fontSize="lg" mb={6}>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on My NFT Marketplace, which are
          sent directly to users{"'"} browser. They automatically receive your
          IP address when this occurs. These technologies are used to measure
          the effectiveness of their advertising campaigns and/or to personalize
          the advertising content that you see on websites that you visit.
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          Children{"'"}s Information
        </Heading>
        <Text fontSize="lg" mb={6}>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </Text>
        <Text fontSize="lg" mb={6}>
          My NFT Marketplace does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website,
        </Text>

        <Heading size="md" mb={4}>
          Log Files
        </Heading>
        <Text fontSize="lg" mb={6}>
          My NFT Marketplace follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services{"'"} analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users{"'"} movement on the website,
          and gathering demographic information.
        </Text>

        <Heading size="md" mb={4}>
          Cookies and Web Beacons
        </Heading>
        <Text fontSize="lg" mb={6}>
          Like any other website, My NFT Marketplace uses {"'cookies'"}. These
          cookies are used to store information including visitors{"'"}{" "}
          preferences, and the pages on the website that the visitor accessed or
          visited. The information is used to optimize the users{"'"} experience
          by customizing our web page content based on visitors{"'"} browser
          type and/or other information. For more general information on
          cookies, please read {"What Are Cookies"} from Cookie Consent.
        </Text>

        <Heading size="md" mb={4}>
          Advertising Partners Privacy Policies
        </Heading>
        <Text fontSize="lg" mb={6}>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of My NFT Marketplace. Third-party ad servers or
          ad networks uses technologies like cookies, JavaScript, or Web Beacons
          that are used in their respective advertisements and links that appear
          on My NFT Marketplace, which are sent directly to users{"'"} browser.
          They automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. Note that My NFT Marketplace
          has no access to or control over these cookies that are used by
          third-party advertisers.
        </Text>

        <Heading size="md" mb={4}>
          Third Party Privacy Policies
        </Heading>
        <Text fontSize="lg" mb={6}>
          My NFT Marketplace{"'"}s Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options. You can choose to disable
          cookies through your individual browser options. To know more detailed
          information about cookie management with specific web browsers, it can
          be found at the browsers{"'"} respective websites.
        </Text>

        <Heading size="md" mb={4}>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Heading>
        <Text fontSize="lg" mb={6}>
          Under the CCPA, among other rights, California consumers have the
          right to: Request that a business that collects a consumer{"'"}s
          personal data disclose the categories and specific pieces of personal
          data that a business has collected about consumers. Request that a
          business delete any personal data about the consumer that a business
          has collected. Request that a business that sells a consumer{"'"}s
          personal data, not sell the consumer{"'"}s personal data.
        </Text>

        <Heading size="md" mb={4}>
          GDPR Data Protection Rights
        </Heading>
        <Text fontSize="lg" mb={6}>
          We would like to make sure you are fully aware of all of your data
        </Text>
      </Container>
    </>
  );
}
