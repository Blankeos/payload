import type { HTMLConverter } from './types'

import { ParagraphHTMLConverter } from './converters/paragraph'
import { TextHTMLConverter } from './converters/text'

export const defaultHTMLConverters: HTMLConverter[] = [ParagraphHTMLConverter, TextHTMLConverter]
