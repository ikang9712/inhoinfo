# [inho.info](https://inho.info)

## Credit

I give warm credit to Studio of Eric Van Holtz and all of its members. The design of this website is inspired from their website. It is clean and beautiful and filled up with stunning animations. I tried to implement my website in similar manner to give the same refined web experience to the visitors. Thank you again for your beautiful work Van Holtz Co! Check their website [here](https://vanholtz.co).

## Future Implementation (Todo List)

- set up jest and ~~enzyme~~, instead RTL, for testing
  - enzyme is dead. There is no support for React 18.
  - clean up the setup and testing for enzyme and need to get used to RTL.

## Getting Started

```
yarn install
yarn dev
```

You can easily run the same website as mine with simple command. You can also run debug mode if you want.

## Packages

For dev-dependencies,

- _prettier_ is used as a code formatter.
- _husky_ helps me to coordinate the commits and pushs in uniformed manner. For example, before commit, it runs ESLint to check any warnings or errors. While pusing to repo, it runs _yarn build_ to check any potential hazard for building. You can check the commit formats and rules on commitlint.config.js and .husky folder.

For dependencies,

- _sass_ and _react-icons_ were used for stylings and icons.
- _swiper_ creates an image slider in work pages. I initially tried to build my own image slider with javascript, but it is very tedious to create your own considering that it has to work in both web and mobile. Swiper helps you to make image slider with many different modules with easy styling. You only need to change the variable within swiper class.
- _tua-body-scroll-lock_ is the best body scroll lock package. I initially used _body-scroll-lock_, but it has weird bugs in mobile environment such as jumping to the top of the page and weirdly change the viewport width of the page while lock is enabled. Use _tua-body-scroll-lock_!!

## Structure

```
$PROJECT_ROOT
├── public
└── src
   ├── component
   ├── context
   ├── pages
   ├── provider
   ├── styles
   └── types
```

- _public_ contains fonts and images.
- _component_ contains reusable jsx components. _layout_ folder, which is one of the subfolders, is the layout of all pages. It is used as a wrapper in \_app.tsx file.
- _context_ and _provider_ prevent props drilling as Header component exists in every page and need to update its state based on user interaction and screen size.
- _styles_ right under the src folder contains global SCSS files. global.scss file imports all the local scss files to apply styling to the website.
- _types_ contains types declarations.

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project.
