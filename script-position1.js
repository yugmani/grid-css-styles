const contentDiv = document.querySelector('.content');

const codeDiv = document.createElement('div');
codeDiv.classList.add('code');

let html = `
<div>Content</div>
<div class="code">
<ul>
<li class="selector">.container {</li>
<li>&emsp;grid-template-columns:<span class="properties"> repeat(12, 1fr);</span></li>
      <li>&emsp;grid-template-rows:<span class="properties"> 48px auto 48px;</span></li>
      <li>&emsp;grid-gap:<span class="properties">5px;</span></li>      
      <li class="selector">}</li>
      </ul>`;

html += `<ul>
<li class="selector">.header {</li>
      <li>&emsp;grid-column:<span class="properties"> 3 / 13;</span></li>
    <li class="selector">}</li>
      </ul>`;

html += `<ul>
<li class="selector">.menu {</li>
      <li>&emsp;grid-column:<span class="properties"> 1 / span 2;</span></li>
      <li>&emsp;grid-row:<span class="properties"> 1 / span 2;</span></li>
    <li class="selector">}</li>
      </ul>`;
html += `<ul>
<li class="selector">.content{</li>
      <li>&emsp;grid-column:<span class="properties">3 / -1;</span></li>      
    <li class="selector">}</li>
      </ul>`;

html += `<ul>
<li class="selector">.footer{</li>
      <li>&emsp;grid-column:<span class="properties">1 / 13;</span></li>      
    <li class="selector">}</li>
      </ul>`;

html += `</div>`;

contentDiv.innerHTML = html;
