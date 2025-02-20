import * as THREE from 'three'
import { codeToHtml } from 'https://esm.sh/shiki@1.0.0'

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

function render3D() {
  let tick = 0
  let width = window.innerWidth
  let height = window.innerHeight
  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000, 0)
  $('#canvas').appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 0
  scene.add(camera)

  const skeleton = new THREE.Object3D()

  scene.add(skeleton)

  const wired = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide,
  })

  const frame = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), wired)
  const scale = 1
  frame.scale.x = frame.scale.y = frame.scale.z = scale
  skeleton.add(frame)

  const ambientLight = new THREE.AmbientLight(0x999999)
  scene.add(ambientLight)

  const light = new THREE.DirectionalLight(0xffffff, 2)
  light.position.set(0, 1, 0)
  scene.add(light)

  function animate() {
    requestAnimationFrame(animate)
    width = window.innerWidth
    height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    skeleton.rotation.x -= 0.001
    skeleton.rotation.y += 0.002

    renderer.render(scene, camera)
    tick++
  }

  const app = $('#app')
  app.addEventListener('scroll', e => {
    const max = height
    const fraction = Math.min(1, app.scrollTop / max)
    skeleton.position.z = fraction * -8
    const pihedron = $('#pihedron')
    pihedron.style.opacity = 1 - fraction
    pihedron.style.top = `${height / 2 - fraction * height / 2}px`
  })

  animate()
}

render3D()