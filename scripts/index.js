
function updateIframe() {
    var iframe = document.getElementById("preview");
    var html = document.getElementById("html").value;
    let style = document.querySelector('style');
    let js = document.querySelector('script');
    iframe.contentDocument.body.innerHTML = html + "<style>" + style +"<style>";
    iframe.contentWindow.eval(js);
}

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme");
    const body = document.body;
    
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
    });
});
