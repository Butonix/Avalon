let isDragging = false

export default function(element, options) {
  const moveFn = function(event) {
    if (options.drag) {
      options.drag(event)
    }
  }

  const endFn = function(event) {
    document.removeEventListener('mousemove', moveFn)
    document.removeEventListener('mouseup', endFn)
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    if (options.end) {
      options.end(event)
    }
  }

  element.addEventListener('mousedown', event => {
    if (isDragging) return
    event.preventDefault()
    document.onselectstart = function() {
      return false
    }
    document.ondragstart = function() {
      return false
    }
    document.addEventListener('mousemove', moveFn)
    document.addEventListener('mouseup', endFn)
    isDragging = true

    if (options.start) {
      options.start(event)
    }
  })
}
