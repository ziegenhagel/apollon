<template>
  <div>

    <h1>Transition Test</h1>

    <div v-show="show != '1'" class="box" data-morph-name="thebox">
      <h2>Bla b ad jkdsfj ska</h2>
      <p>Lorem ipsum jkfla sjdsaöj fkj lfakjlas fdkjlas dfk jl asfkjl afskjlö asfköj</p>
      <p>Lorem ipsum jkfla sjdsaöj fkj lfakjlas fdkjlas dfk jl asfkjl afskjlö asfköj</p>
    </div>

    <div v-show="show != '0'" class="something-else" data-morph-name="thebox">
      <h2>Bla b ad jkdsfj ska</h2>
      <p>Lorem ipsum jkfla sjdsaöj fkj lfakjlas fdkjlas dfk jl asfkjl afskjlö asfköj</p>
      <h2>Bla b ad jkdsfj ska</h2>
      <h2>Bla b ad jkdsfj ska</h2>
      <h2>Bla b ad jkdsfj ska</h2>
    </div>

    <div class="overlay"></div>

    <a @click="trigger()">Trigger</a>
  </div>
</template>

<script setup>
import html2canvas from 'html2canvas'

const getScreenshotOfElement = async (element) => {
  //const [x, y, w, h] = [element.offsetLeft, element.offsetTop, element.offsetWidth, element.offsetHeight]
  const canvas = await html2canvas(element, {})
  canvas.className = 'morph-canvas'

  return canvas
}

const fromTo = async (fromElement, toElement) => {

  const fromCanvas = await getScreenshotOfElement(fromElement)
  const toCanvas = await getScreenshotOfElement(toElement)

  // hide the original elements
  fromElement.style.visibility = 'hidden'
  toElement.style.visibility = 'hidden'

  // hide .overlay
  document.querySelector('.overlay').style.visibility = 'hidden'

  // dimm opacity of the screenshots
  toCanvas.style.opacity = 0

  // create the morphing animation wrapper
  const morphElement = document.createElement('div')
  morphElement.style.left = fromElement.offsetLeft + 'px'
  morphElement.style.top = fromElement.offsetTop + 'px'
  console.log("from width", fromElement.offsetWidth)
  morphElement.style.width = fromElement.offsetWidth + 'px'
  morphElement.style.height = fromElement.offsetHeight + 'px'
  morphElement.className = 'morph-wrapper'

  // add the screenshots to the wrapper
  morphElement.appendChild(fromCanvas)
  morphElement.appendChild(toCanvas)

  // add the wrapper to the DOM
  document.body.appendChild(morphElement)

  // animate the wrapper to the new size

  // animate the wrapper to the new position
  morphElement.style.left = toElement.offsetLeft + 'px'
  morphElement.style.top = toElement.offsetTop + 'px'
  morphElement.style.width = toElement.offsetWidth + 'px'
  morphElement.style.height = toElement.offsetHeight + 'px'
  toCanvas.style.opacity = 1

  setTimeout(function () {
    // remove the wrapper from the DOM
    document.body.removeChild(morphElement)

    // show the original elements
    toElement.style.visibility = 'visible'

  }, 1000)

}

const show = ref(2)

const trigger = () => {
  if (typeof document == 'undefined') return

  // take a screenshot of every [data-morph-name="thebox"]
  const [from, to] = document.querySelectorAll('[data-morph-name="thebox"]')
  fromTo(from, to)

}

// when the component is mounted, trigger the transition
onMounted(() => {
  setTimeout(() => {
    trigger()
  }, 200)
})
</script>


<style>
.morph-wrapper {
  position: absolute;
  z-index: 9999;
  transition: 1s;
}

.morph-canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100% !important;
  height: 100% !important;
  transition: 1s;
}

.box {
  width: 300px;
  margin: 30px;
  background: #333;
  border: 5px solid red;
}

.box p {
  color: orange;
}


.something-else {
  background: #555;
  width: 800px;
  font-size: .4em;
  border: 5px solid blue;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  bottom: 0;
  background: blue;
  z-index: 10001;
}
</style>