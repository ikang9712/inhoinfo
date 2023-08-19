# analysis

- responsive design. padding and margin changes to better see images and texts. The top navigation bar changes its form and create hamburger drop down menu for mobile viewers.

- animation. Not a great animation tricks. Color change for buttons and moving arrow animation for hover actions.

- applied local fonts

# reflection

- converted all the plain HTML elements in one file, index.tsx to several components and saved those components in component folder. Some of them are reused several times, but there are still a room for improvements. Looking into types for ProductTile, ShopSectionTwo and ShopSectionThree, they share similar props. Although they are differed in styling, we can pass on extra string as a className for styling and apply different styling.

- style.scss file can be more organized.

- consider lazy loading images using intersection observer API for better web performance + visual effects.

- consider using CDN, as I will have more images in the future.
