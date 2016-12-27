// $( document ).ready(function() {
//   console.log( "document ready!" );
//   onVrViewLoad();
// });
window.addEventListener('load', onVrViewLoad);



function onVrViewLoad() {
  console.log('onVrViewLoad');
  var vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: 'starbucks-converted.jpg'
  });
}
