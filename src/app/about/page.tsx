import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
  <Flex
    vertical="center"
    horizontal="center"
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      overflow: "hidden",
      background: "white",
      border: "1px solid var(--color-neutral-medium)",
    }}
  >
    <img
      src="/images/pakistan-flag.png" // Path to Pakistan flag image
      alt="Pakistan Flag"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </Flex>
  <Text>Pakistan</Text>
</Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {/* {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )} */}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item) =>
                    item.link && (
                        <>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

{about.technical.display && (
  <>
    <Heading
      as="h2"
      id={about.technical.title}
      variant="display-strong-s"
      marginBottom="40"
    >
      {about.technical.title}
    </Heading>

    {/* Languages Section */}
    <Heading as="h3" variant="display-strong-xs" marginBottom="20">
      Languages
    </Heading>
    <Flex fillWidth gap="l" wrap marginBottom="40">
      {about.technical.skills
        .filter((skill) => skill.category === "languages")
        .map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            border="neutral-medium"
            radius="m"
            padding="m"
            gap="m"
            vertical="center"
            horizontal="center"
            style={{ minWidth: "120px", textAlign: "center", flex: "1 1 30%" }}
          >
            <Icon name={skill.icon} size="xl" />
            <Column gap="4">
              <Text variant="heading-strong-s">{skill.title}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {skill.description}
              </Text>
            </Column>
          </Flex>
        ))}
    </Flex>

    {/* Frameworks/Libraries Section */}
    <Heading as="h3" variant="display-strong-xs" marginBottom="20">
      Frameworks/Libraries
    </Heading>
    <Flex fillWidth gap="l" wrap marginBottom="40">
      {about.technical.skills
        .filter((skill) => skill.category === "frameworks")
        .map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            border="neutral-medium"
            radius="m"
            padding="m"
            gap="m"
            vertical="center"
            horizontal="center"
            style={{ minWidth: "120px", textAlign: "center", flex: "1 1 30%" }}
          >
            <Icon name={skill.icon} size="xl" />
            <Column gap="4">
              <Text variant="heading-strong-s">{skill.title}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {skill.description}
              </Text>
            </Column>
          </Flex>
        ))}
    </Flex>

    {/* Web Development Tools Section */}
    {/* <Heading as="h3" variant="display-strong-xs" marginBottom="20">
      Web Development Tools
    </Heading> */}
    <Flex fillWidth gap="l" wrap marginBottom="40">
      {about.technical.skills
        .filter((skill) => skill.category === "web-tools")
        .map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            border="neutral-medium"
            radius="m"
            padding="m"
            gap="m"
            vertical="center"
            horizontal="center"
            style={{ minWidth: "120px", textAlign: "center", flex: "1 1 30%" }}
          >
            <Icon name={skill.icon} size="xl" />
            <Column gap="4">
              <Text variant="heading-strong-s">{skill.title}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {skill.description}
              </Text>
            </Column>
          </Flex>
        ))}
    </Flex>

    {/* Databases Section */}
    <Heading as="h3" variant="display-strong-xs" marginBottom="20">
      Databases
    </Heading>
    <Flex fillWidth gap="l" wrap marginBottom="40">
      {about.technical.skills
        .filter((skill) => skill.category === "databases")
        .map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            border="neutral-medium"
            radius="m"
            padding="m"
            gap="m"
            vertical="center"
            horizontal="center"
            style={{ minWidth: "120px", textAlign: "center", flex: "1 1 30%" }}
          >
            <Icon name={skill.icon} size="xl" />
            <Column gap="4">
              <Text variant="heading-strong-s">{skill.title}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {skill.description}
              </Text>
            </Column>
          </Flex>
        ))}
    </Flex>

    {/* Developer Tools Section */}
    <Heading as="h3" variant="display-strong-xs" marginBottom="20">
      Developer Tools
    </Heading>
    <Flex fillWidth gap="l" wrap marginBottom="40">
      {about.technical.skills
        .filter((skill) => skill.category === "dev-tools")
        .map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            border="neutral-medium"
            radius="m"
            padding="m"
            gap="m"
            vertical="center"
            horizontal="center"
            style={{ minWidth: "120px", textAlign: "center", flex: "1 1 30%" }}
          >
            <Icon name={skill.icon} size="xl" />
            <Column gap="4">
              <Text variant="heading-strong-s">{skill.title}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {skill.description}
              </Text>
            </Column>
          </Flex>
        ))}
    </Flex>
  </>
)}
        </Column>
      </Flex>
    </Column>
  );
}
