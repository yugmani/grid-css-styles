const codeDiv = document.querySelector('.code');

let html = `<ul>
<li class="selector">.container {</li>
<li>&emsp;grid-template-columns:<span class="properties"> 100px auto;</span></li>
      <li>&emsp;grid-template-rows:<span class="properties"> 100px auto 100px;</span></li>
      <li>&emsp;grid-gap:<span class="properties">5px;</span></li>      
      <li class="selector">}</li></ul>`;

codeDiv.innerHTML = html;
