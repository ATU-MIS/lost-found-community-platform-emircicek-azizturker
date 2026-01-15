document.getElementById("navbar").innerHTML = `
<nav class="navbar">
    <div class="logo">
        <a href="index.html">Lost & Found</a>
    </div>

    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="login.html" class="login-btn">Login</a></li>
    </ul>
</nav>
`;
document.getElementById("navbar").innerHTML = `
<nav class="navbar">
    <div class="logo">
        <a href="index.html">Lost & Found</a>
    </div>

    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="login.html" class="login-btn">Login</a></li>
    </ul>

    <button id="theme-toggle">🌙</button>
</nav>
`;

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
