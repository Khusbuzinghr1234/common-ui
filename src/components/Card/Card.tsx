import { YStack } from 'tamagui'

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <YStack
      padding="$4"
      borderRadius="$6"
      backgroundColor="$background"
      borderWidth={1}
      borderColor="$borderColor"
      shadowColor="$shadowColor"
      elevation={4}
    >
      {children}
    </YStack>
  )
}
