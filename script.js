<script>
var num = 4;
var myD = setInterval(function() {
window.d.innerHTML = num--;
if(num<-1) {
clearInterval(myD);
window.d.style.display = "none";
window.d2.style.display = "none";
window.d3.style.display = "block";
}
}, 1000);
</script>
