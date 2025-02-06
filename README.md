# Radar Hub

This repository contains the source code for the Radar Community Hub website. The project was developed to create an interactive, transparent platform that connects the Aarhus community with Radar's cultural mission. By providing features like live voting, discussion forums, and real-time insights, the website enables users to see how their contributions impact Radar's operations and the local cultural scene.

- Visit the live website: [radarhub.peterhalldahl.dk](https://radarhub.peterhalldahl.dk)

## Eksamensprojekt
## Multimedieproduktion 1
## Multimediedesigneruddannelsen, Erhvervsakademi Aarhus
## Eksamensprojekt 1. semester, Efterår 2024

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [The concept](#the-concept)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

The task is to develop a separate website for Radar, a well-established live music venue in Aarhus facing a funding crisis starting January 2025. The website must clearly communicate Radar's cultural value and significance while mobilizing support from young Aarhusians and key local stakeholders. It should serve as an interactive, transparent hub that conveys Radar's mission, showcases its impact on the local arts scene, and engages the community through features like user contributions, real-time updates, and interactive elements. The objective is to create a dynamic digital platform that informs, inspires, and facilitates community involvement to secure Radar's future as a vital cultural institution in Aarhus.

### The concept

Radar Community Hub is a digital platform designed to connect the Aarhus community with the cultural mission of Radar. With the upcoming challenges in funding, the platform provides a transparent space where users can explore how Radar operates and see the impact of their contributions. It offers interactive features such as live voting, discussion forums, and real-time insights into decision-making processes. The clean and responsive design ensures that whether you are a dedicated supporter or a curious newcomer, you can easily engage, share ideas, and help shape the future of one of Aarhus's most cherished cultural institutions.

### Projektets mappestruktur:

radar-hub/
├── assets/
│   ├── favicon/
│   │   ├── *.webp
│   │   └── *.svg
│   ├── css/
│   │   ├── style.css
│   │   ├── global/
│   │   │   └── global.css
│   │   └── components/
│   │       └── *.css
│   └── js/
│       └── *.js
├── index.html
├── about.html
├── hub.html
├── contact.html
├── robots.txt
├── sitemap.xml
└── README.md



### Built with

- **Semantic HTML5 markup**: Provides a clear and structured foundation for the website's content, improving accessibility and SEO.
- **CSS Custom Properties (CSS Variables)**:  Centralized management of styles through reusable variables defined in `global.css`, enhancing maintainability and theme consistency.
- **`global.css` file**: Dedicated stylesheet for defining global styles and CSS Custom Properties, promoting a well-organized CSS architecture.
- **`style.css` as CSS import hub**:  Main CSS file using `@import` to manage and organize other stylesheets (`header.css`, `footer.css`, etc.) for a modular CSS structure.
- **Flexbox**:  Enables efficient and responsive layouts for various website components, ensuring adaptability across different screen sizes.
- **CSS Grid**:  Facilitates complex, grid-based page layouts, providing precise control over element positioning and website structure.
- **`clamp()` CSS function**:  Implements responsive typography and element sizing, ensuring fluid adjustments across different viewport widths.
- **Vanilla JavaScript (ES6+)**: Adds interactive features and dynamic behavior to the website, enhancing user experience without external libraries.
- **Embedded JavaScript**:  Strategic use of inline `<script>` for specific functionalities alongside external JavaScript files for broader interactions, balancing implementation approaches.


### What I learned

- Separating CSS files per subpage/section element was not as straightforward as I initially thought. However, organizing the code in this manner proved to be beneficial for maintenance and readability.
- I discovered that embedding inline JavaScript can negatively affect site performance. When evaluated using Lighthouse, the impact was more significant than anticipated.
- Minimizing media queries and letting the browser/viewport make the site responsive dynamically when avoid fixed formats and instead using max-width, padding(clamp),fontsize(clamp) with relative value ranges.
- Using external CSS files for common elements like the header and footer allowed for reliable reuse and consistency across the website.
- Overall, the project reinforced the value of performance optimization and modular code organization in modern web development.


### Useful resources

- [Modern CSS Tips and Approaches for Responsive Web Design](https://youtu.be/2IV08sP9m3U?si=DJ5RbO2jWw-PF-WM)  
  This video offers modern CSS tips and approaches for responsive web design.

- [Hands On Problem Solving Common Responsive Coding Issues](https://youtu.be/x4u1yp3Msao?si=YydHuKVsM3mgEwq1)  
  A hands-on guide to solving common responsive coding issues, covering grid layouts, the pros and cons of units (px, vw, em, etc.), and media queries.

- [Separating CSS Files and Structuring Global Styles](https://youtu.be/nl9VlTA-AfE?si=oDfXnBSdGl9tPuZI)  
  This resource was instrumental in learning how to separate all CSS files by using a global.css file and importing individual CSS files into style.css, which helped in creating a well-organized code structure.

- [Creating Responsive Font Sizes with Clamp](https://youtu.be/G1buM51f09s?si=AFMYW0ds1mzMiGf4)  
  A helpful video on creating responsive font sizes by using CSS variables with relative clamp values.

- [Removing Text Decoration in CSS](https://www.w3schools.com/css/css_text_decoration.asp)  
  This guide helped me understand how to remove text decoration from my highly styled font to improve readability and accessibility.

- [Real Favicon Generator](https://realfavicongenerator.net/)  
  A useful tool for generating favicon assets.

- [Linearly Scale Font Size with CSS Clamp Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)  
  This article provided additional insight into using clamp to create responsive font sizes.

































 Radar-Hub 
## Eksamensprojekt
## Multimedieproduktion 1
## Multimediedesigneruddannelsen, Erhvervsakademi Aarhus
## Eksamensprojekt 1. semester, Efterår 2024
 

This repository contains the source code for the Radar Community Hub website. The project was developed to create an interactive, transparent platform that connects the Aarhus community with Radar's cultural mission. By providing features like live voting, discussion forums, and real-time insights, the website enables users to see how their contributions impact Radar's operations and the local cultural scene.

Visit the live website: [radarhub.peterhalldahl.dk](https://radarhub.peterhalldahl.dk)



# Projektets mappestruktur:

radar-hub/
│
│── assets/
│   ├── favicon/
│   ├── *.webp
│   ├── *.svg
│
├── css/
│   ├── style.css
│   ├── global/
│   │   ├── global.css
│   ├── components/
│   │   ├── *.css
│
├── js/
│   ├── *.js
│
├── index.html
├── about.html
├── hub.html
├── contact.html
│
├── robots.txt
├── sitemap.xml
├── README.md



