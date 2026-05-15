import type * as hast from 'hast'
import type { RehypePlugin } from '@astrojs/markdown-remark'

const REFERRAL_HREF = 'https://cursor.com/referral?code=FBX2U1YQIKB0'

/** Nie zamieniamy „cursor” w treści od razu wykluczonej z auto-linków */
const SKIP_SUBTREE_TAGS = new Set([
  'a',
  'code',
  'kbd',
  'pre',
  'samp',
  'script',
  'style',
  'textarea',
])

const CURSOR_WORD = /\bcursor\b/gi

function linkifyCursorText(value: string): hast.RootContent[] {
  const parts: hast.RootContent[] = []
  let lastIndex = 0
  CURSOR_WORD.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = CURSOR_WORD.exec(value)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: value.slice(lastIndex, match.index) })
    }
    parts.push({
      type: 'element',
      tagName: 'a',
      properties: { href: REFERRAL_HREF },
      children: [{ type: 'text', value: match[0] }],
    })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < value.length) {
    parts.push({ type: 'text', value: value.slice(lastIndex) })
  }
  return parts.length > 0 ? parts : [{ type: 'text', value }]
}

function transformTree(node: hast.Root | hast.Element) {
  if (!node.children?.length) return

  const next: hast.RootContent[] = []

  for (const child of node.children) {
    if (child.type === 'text') {
      next.push(...linkifyCursorText(child.value))
    } else if (child.type === 'element') {
      if (SKIP_SUBTREE_TAGS.has(child.tagName)) {
        next.push(child)
      } else {
        transformTree(child)
        next.push(child)
      }
    } else {
      next.push(child)
    }
  }

  node.children = next
}

export const rehypeCursorReferral: RehypePlugin = () => {
  return function (tree: hast.Root) {
    transformTree(tree)
  }
}

export default rehypeCursorReferral
