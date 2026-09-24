# Hero: portrait with sound-wave ring

## What changes

- Remove the faded background photo from the top of the page. Keep the subtle network grid and dark overlay so it doesn't look empty.
- Put the uploaded photo of Hari on the right side of the top section, cropped into a circle.
- Around the circle, add animated "music sound wave" effects:
  - A ring of thin bars around the photo that pulse up and down at different speeds, like an equalizer.
  - Two or three soft rings that ripple outward and fade, like sound spreading.
- Move the "Signal established" details (Based in, Focus, Education) below the name and buttons as a compact row, since the photo takes the right side.
- On phones, the photo appears above the name at a smaller size.
- Keep the gentle parallax: the photo moves slightly slower than the page as you scroll.
- If a visitor has reduced motion turned on, the waves stay still.

## Technical details

- Upload `user-uploads://hari.jpg` to Lovable Assets and import it with `src/assets/hari-portrait.jpg.asset.json`.
- In `src/routes/index.tsx`, remove the banner `<img>` in the hero and change it to a 2-column grid (`lg:grid-cols-[1.1fr_0.9fr]`). Add a `PortraitWaves` component: a circular image with about 48 absolutely positioned bars rotated around the circle (`rotate(i*7.5deg) translateY(-radius)`). Each bar uses an `eq-bar` scaleY keyframe animation with staggered delays and durations, and there are ripple rings that use a scale and opacity keyframe.
- Add the `eq-bar` and `ripple` keyframes and utilities to `src/styles.css`, using only the primary color token.
- Keep the banner asset file, since the old design may still refer to it. Remove only the hero usage.
