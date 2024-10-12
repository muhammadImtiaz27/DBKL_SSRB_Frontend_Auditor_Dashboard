const details = document.querySelector('.details');

// Check if navigator exists (older browsers don't support navigator)
// prettier-ignore
if (navigator.geolocation) {
    // If navigator exists, attempt to get user's current location.
    navigator.geolocation.getCurrentPosition(function(){alert("Current location found!")}, function(){alert("Could not get your position")});
} 
else {
    alert('Geolocation is not supported by this browser.');
}
