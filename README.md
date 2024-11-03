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

## SVG Animations

Scalable vector Graphic (SVG) - used to make 2D graphics

- **SVG** : treated like a container and it has attributes height and width,
- **Path** : child of svg element , it can be used to create Lines, Curves, Arcs and more.
  - `stroke` : "color" => attribute used to provide color to the line or path 
  - `d` : "commands and parameters " => attribute contains series of commands and parameter used by these commands.

#### Example
```html 
<svg width="500" height="200">
     <path d="M x y Q x1 y1 x2 y2" stroke="black" fill="transparent" />  
</svg>

here, 
- M : "move to" command 
- x : x axis coordinate ,  
- y : y axis coordinate
```

#### Curves => in path curves are two types CUBIC CURVE and QUADRATIC CURVES
- C : used for cubic curve => it is complex and it has two control points (Beizer Curve)
- Q : used for Quadratic curve => it is simple than cubic and it has one control point

## GSAP property 

- attr : {key: value} => used to manipulate attributes of html element, it contains value as object in which key is attribute itself and value is value of attribute.
- ease : used for provide easing to element , there are multiple predefined easing functions you can check out on GSAP official website

YOU CAN use {ease : "elastic.out(1, 0.2)"}  which is predefined easing function to animate like guitar string
