const navbar = document.createElement('template');
navbar.innerHTML = `
      <nav class="flexbox">
        <ul class="fullwidth">
          <li><img src="images/my-github-logo.jpg" style="width: 30px", class="logo"></li>
          <li><a href="/">Home</a></li>
        </ul>
        <ul class="fullwidth">
          <li><a href="news.html">News</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
`
const footer = document.createElement('template');
footer.innerHTML = `
<footer class="page-footer">
  <ul>
    <li><a href="https://github.com/engeir"><i class="fa fa-github"></i></a></li>
    <li><a href="https://twitter.com/EngerEirik"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://www.instagram.com/eirikre/"><img class="insta"
    style="max-height:19px;max-width:19px" src="images/instagram-logo.png"
    alt="Instagram"></a></li>
    <li><a href="https://www.linkedin.com/in/eirik-rolland-enger/"><i class="fa
    fa-linkedin"></i></a></li>
    <!-- <li><a href="images/wallet-of-satoshi.png"><img class="wos"
    style="max-height:16px;max-width:16px" src="images/wallet-of-satoshi-icon.png"
    alt="Wallet of Satoshi"></a></li> -->
    <li><a href="images/monero-qr.png"><img class="monero"
    style="max-height:20px;max-width:20px" src="images/monero-logo.png"
    alt="Monero QR"></a></li>
    <li><a href="https://github.com/engeir/flottflyt"><i class="fa fa-git-square"></i></a></li>
  </ul>
</footer>
`
document.getElementById('nav').appendChild(navbar.content);
document.getElementById('foot').appendChild(footer.content);
