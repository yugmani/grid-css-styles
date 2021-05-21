const codeDiv = document.querySelector('.code');

let html = `<ul>
<li class="selector">.container {</li>
<li>&emsp;grid-template-columns:<span class="properties"> repeat(12, 1fr);</span></li>
      <li>&emsp;grid-template-rows:<span class="properties"> 48px auto 48px;</span></li>
      <li>&emsp;grid-template-areas:</li>
      <li>&emsp;&emsp;<span class="properties">"m m h h h h h h h h h h"</span></li>
      <li>&emsp;&emsp;<span class="properties">"m m c c c c c c c c c c"</span></li>
      <li>&emsp;&emsp;<span class="properties">". . f f f f f f f f f ."</span></li>
      <li>&emsp;&emsp;<span class="properties">/* . (dot) represents blank column */</span></li>
      <li class="selector">}</li></ul>`;

html += `<ul>
<li class="selector">.header {</li>
      <li>&emsp;grid-area: <span class="properties">h;</li>
    <li class="selector">}</li>
    </ul>`;

html += `<ul>
<li class="selector">.menu {</li>
      <li>&emsp;grid-area:<span class="properties"> m;</li>
    <li class="selector">}</li>
    </ul>`;

html += `<ul>
<li class="selector">.content {</li>
      <li>&emsp;grid-area:<span class="properties"> c;</li>
    <li class="selector">}</li>
    </ul>`;

html += `<ul>
<li class="selector">.footer {</li>
      <li>&emsp;grid-area:<span class="properties">f;</li>
    <li class="selector">}</li>
    </ul>`;

codeDiv.innerHTML = html;
