export type informationBlock = {
  blockName: string
  items: informationBlockItems[]
}

export type informationBlockItems = {
  title?: string
  timeframe?: string
  subtitle?: string
  contents: string[]
  links?: string[]
}