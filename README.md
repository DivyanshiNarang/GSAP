# GreenSock Animation Platform (GSAP)

[GSAP Documentation](https://gsap.com/docs/v3/GSAP/)  
[CDN Link for GSAP](https://cdnjs.com/libraries/gsap)

## GSAP Basics

- GSAP used for animate elements
- **`gsap.to`** - Animates elements from an initial to a final position.
- **`gsap.from`** - Animates elements from a final to an initial position.

## ScrollTrigger

The `ScrollTrigger` plugin allows you to animate elements based on scroll position. Below are key properties for configuring `ScrollTrigger`:

- **`trigger`**: Specifies the element to trigger the animation.
- **`scroller`**: The element to be scrolled; usually set to `"body"`.
- **`start`**: Defines when the animation begins.
- **`end`**: Defines when the animation ends.
- **`markers`**: A Boolean that, when enabled, shows start and end markers. This helps in fine-tuning animations and can be removed later.
- **`scrub`**: Syncs the animation with the scroll position, allowing for a smooth effect. Accepts `true`, `false`, or a number between `1-5` to control the scrub intensity.
- **`pin`**: Pins the element in place during the animation.  
  **Note**: When using the `pin` property, ensure the trigger is the parent element.

