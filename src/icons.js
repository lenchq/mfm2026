const paths = {
  '↗': 'M5 19 19 5M5 5h14v14',
  '→': 'M4 12h16m-7-7 7 7-7 7',
  '←': 'M20 12H4m7-7-7 7 7 7',
  '↳': 'M5 4v10h15m-6-6 6 6-6 6'
};

// Run after translation so dictionary phrases remain intact. Only text nodes
// become icons: accessible labels, links, and learning data are unchanged.
export function renderArrows(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (/[↗→←↳]/u.test(node.nodeValue) && !node.parentElement.closest('svg, script, style, textarea, code')) nodes.push(node);
  }
  for (const node of nodes) {
    const fragment = document.createDocumentFragment();
    for (const part of node.nodeValue.split(/([↗→←↳]\uFE0F?)/u)) {
      const path = paths[part.replace(/\uFE0F/g, '')];
      if (!path) { fragment.append(document.createTextNode(part)); continue; }
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'arrow-icon');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      const shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', path);
      svg.append(shape); fragment.append(svg);
    }
    node.replaceWith(fragment);
  }
}
