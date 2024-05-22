import { Grid, GridItem } from "@yamada-ui/react"

const GridAsymmetrical = () => {
  return (
    <Grid
      gap="md"
      templateAreas={{
        base: `
        "one one two two two"
        "three three three four four"
        "five six seven seven seven"
      `,
        sm: `
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
      `,
      }}
      maxW="4xl"
      mx="auto"
    >
      <GridItem area="one" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="two" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="three" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="four" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="five" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="six" w="full" minH="4xs" rounded="md" bg="primary" />
      <GridItem area="seven" w="full" minH="4xs" rounded="md" bg="primary" />
    </Grid>
  )
}

export default GridAsymmetrical