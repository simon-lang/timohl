window.gallery = [
'DSC_9828-600.jpg',
'DSC_9871-642.jpg',
'DSC_9873-644.jpg',
'DSC_9887-658.jpg',
'DSC_9907-678.jpg',
'DSC_9911-682.jpg',
'DSC_9914-685.jpg',
'IOU-639.jpg',
'IOU-643.jpg',
'IOU-646.jpg',
'IOU-662.jpg',
'IOU-713.jpg',
'IOU-722.jpg',
'IOU-783.jpg',
'IOU-787.jpg',
'IOU-843.jpg',
'IOU-853.jpg',
'tim3.jpg'
]

var app = angular.module('app', [])

app.run(function($rootScope) {
  $rootScope.gallery = gallery
})

