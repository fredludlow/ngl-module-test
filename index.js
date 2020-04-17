import { Stage } from 'ngl'

document.addEventListener('DOMContentLoaded', function () {
  const stage = new Stage('viewport')
  stage.loadFile("rcsb://1crn", { defaultRepresentation: true })
})

