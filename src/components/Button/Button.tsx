import { Button as TButton, Text } from 'tamagui'

type Props = {
  title: string
  onPress?: () => void
  full?: boolean
}

export const Button = ({ title, onPress, full }: Props) => {
  return (
    <TButton
      width={full ? '100%' : 'auto'}
      onPress={onPress}
      backgroundColor="$blue10"
      pressStyle={{ backgroundColor: '$blue9' }}
    >
      <Text color="white">{title}</Text>
    </TButton>
  )
}
