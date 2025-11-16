import type * as hast from 'hast'
import type { RehypePlugin } from '@astrojs/markdown-remark'

export const rehypeUtmSource: RehypePlugin = (_options?) => {
  function isElement(content: hast.RootContent): content is hast.Element {
    return content.type === 'element'
  }

  function isExternalLink(href: string): boolean {
    return href.startsWith('http://') || href.startsWith('https://')
  }

  function addUtmSource(url: string): string {
    try {
      const urlObj = new URL(url)
      // Sprawdź, czy parametr utm_source już istnieje
      if (!urlObj.searchParams.has('utm_source')) {
        urlObj.searchParams.set('utm_source', 'neuronowa.pl')
      }
      return urlObj.toString()
    } catch {
      // Jeśli URL jest nieprawidłowy, zwróć oryginalny
      return url
    }
  }

  function transformTree(node: hast.Root | hast.Element) {
    if (node.children) {
      node.children = node.children.map((child) => {
        if (isElement(child)) {
          if (child.tagName === 'a' && child.properties?.href) {
            const href = String(child.properties.href)
            if (isExternalLink(href)) {
              child.properties.href = addUtmSource(href)
            }
          } else {
            transformTree(child) // Recursively process child nodes
          }
        }
        return child
      })
    }
  }

  return function (tree: hast.Root) {
    transformTree(tree) // Start the recursive transformation
  }
}

export default rehypeUtmSource

