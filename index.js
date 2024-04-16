/**
 * performs `document.querySelector`
 * @param {string} query css selector
 * @returns {HTMLElement | null}
 */
export function $(query) {
  return document.querySelector(query)
}

/**
 * performs `document.querySelectorAll`
 * @param {string} query css selector
 * @returns {HTMLElement[]}
 */
export function $$(query) {
  return document.querySelectorAll(query)
}

$$('.cascade').forEach(element => {
  const chars = element.innerText.split('')
  element.innerHTML = ''
  chars.forEach((char, i) => {
    const span = document.createElement('span')
    span.classList.add('float')
    span.innerHTML = char
    span.style.animationDelay = i * 100 + 'ms'
    setTimeout(() => {
      span.classList.remove('float')
    }, 500 + i * 100)
    setTimeout(() => {
      span.classList.add('shrink')
    }, 500 + chars.length * 100)
    element.appendChild(span)
  })
})