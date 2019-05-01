declare function ri (selector: HTMLElement | String, options: ri.RadialIndicatorOptions): ri.RadialIndicatorInstance

declare namespace ri {
  export interface RadialIndicatorOptions {
    value?: number
    radius?: number
    barWidth?: number
    barBgColor?: string
    barColor?: { [key: number]: string } | string
    format?: string | RadialFormatFn
    frameTime?: number
    frameNum?: number
    fontColor?: string
    fontFamily?: string
    fontWeight?: string
    fontSize?: string
    textBaseline?: string
    interpolate?: boolean
    reverse?: boolean
    percentage?: boolean
    precision?: number
    displayNumber?: boolean
    roundCorner?: boolean
    minValue?: number
    maxValue?: number
    initValue?: number
    interaction?: boolean
    onChange?: () => void
  }

  export type RadialFormatFn = (value: number) => string

  export interface RadialIndicatorInstance {
    defaults: RadialIndicatorOptions
    animate: (value: number) => void
    value: (value: number) => void
    option: <Key extends keyof RadialIndicatorOptions>(
      property: Key,
      value: RadialIndicatorOptions[Key]
    ) => void
  }
}

export = ri
