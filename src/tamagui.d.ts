import type { TamaguiCustomConfig } from './tamagui.config'

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiCustomConfig {}
}
