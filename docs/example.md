## Example

The following code loads a DOM ready interface that checks for existing settings on localstorage, sets new values for a variety of options, persists the changes to localstorage, and renders a style tag to the document head.

```js
import { KewtDOM } from 'kewt';

KewtDOM
  .set('font', 'monospaced-sans-serif')
  .set('fontSize', '4')
  .set('fontEdge', 'shadow')
  .set('edgeHighlight', 'yellow')
  .set('edgeOpacity', 50)
  .set('textColor', 'teal')
  .set('textOpacity', 25)
  .set('backgroundColor', 'purple')
  .set('backgroundOpacity', '100')
  .persist()
  .render();
```
