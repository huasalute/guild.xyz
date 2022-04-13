import { Box, Center, Heading, Image, Link, SimpleGrid } from "@chakra-ui/react"
import Card from "components/common/Card"
import Head from "next/head"

function LegoCard({ href, img }) {
  return (
    <Link _hover={{ textDecor: "none" }} borderRadius="2xl" href={href}>
      <Card
        p={{ base: "8", md: "16" }}
        w="full"
        h="full"
        pos="relative"
        _before={{
          content: `""`,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bg: "primary.300",
          opacity: 0,
          transition: "opacity 0.2s",
        }}
        _hover={{
          _before: {
            opacity: 0.1,
          },
        }}
        _active={{
          _before: {
            opacity: 0.17,
          },
        }}
      >
        <Center h="full" w="full">
          <Image src={img} alt="Lego Assembly" h="full" />
        </Center>
      </Card>
    </Link>
  )
}

const Page = () => (
  <>
    <Head>
      <title>Guild Lego</title>
    </Head>
    <Box p={{ base: "6", md: "28" }} minH="100vh" d="flex" flexDirection={"column"}>
      <Heading
        fontFamily={"display"}
        fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
        textAlign="center"
        mb={{ base: 10, md: 20 }}
      >
        Guild Lego Assemblies
      </Heading>
      <SimpleGrid
        columns={{ md: 2 }}
        spacing={{ base: "6", md: "8", lg: "10" }}
        flexGrow={1}
      >
        <LegoCard
          href="https://lego.guild.xyz/GuildCastleAssembly.pdf"
          img="lego/castle.svg"
        />
        <LegoCard
          href="https://lego.guild.xyz/GuildDudeAssembly.pdf"
          img="lego/dude.svg"
        />
        <LegoCard
          href="https://lego.guild.xyz/GuildFoxAssembly.pdf"
          img="lego/fox.svg"
        />
        <LegoCard
          href="https://lego.guild.xyz/GuildGhostAssembly.pdf"
          img="lego/ghost.svg"
        />
      </SimpleGrid>
    </Box>
  </>
)

export default Page
