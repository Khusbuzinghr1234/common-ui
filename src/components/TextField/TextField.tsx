import { YStack, Text, Input } from 'tamagui'

type Props = {
  label?: string
  value: string
  onChangeText: (text: string) => void
}

export const TextField = ({ label, value, onChangeText }: Props) => {
  return (
    <YStack gap="$2">
      {label && <Text fontWeight="600">{label}</Text>}

      <Input
        value={value}
        onChangeText={onChangeText}
        borderWidth={1}
        borderColor="$borderColor"
      />
    </YStack>
  )
}
