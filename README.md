# kelli@airshipcms.io
Purely Functional Website

# Install

Install gatsby-cli globally:
```
npm install -g gatsby-cli
```

Install project dependencies:
```
yarn install
```

# Start Dev Server

```
npm start
```

or
```
gatsby develop
```

Open the browser to localhost:8000

Work on a branch off of master. Build and merge into master when ready to launch changes.

## Site Metadata

Global site metadata is located in `gatsby-config.js`
```
siteMetadata: {
  og_image: `./src/images/gatsby-icon.png`,
  og_url: 'https://kelli@airshipcms.io',
  title: ``,
  description: `default description here`,
  twitter_creator: '',
  keywords: ''
},
```

# Images

## Image `<img>`

Import at the top:
`import launchIllustrationBackground from '../../images/illustration-background.png'`

Include in `<img src>`:
`src={launchIllustrationBackground}`

## Inline Background Image `style="background-image:url()`

## SCSS Background Image

### Images
In SCSS, the path is `background-image: url(../images/download-bluegrey.png);`
Images need to be dropped into `src/images`

### SVGs
In SCSS, the path is `background-image: url(../static/download-bluegrey.svg);`
Images need to be dropped into `src/static`


## OG:Image

Since the OG image isn't used anywhere when the source files are compiled, the file (or files, if alternate images are used on other pages) must be placed manually in the static/ folder. Then the image can be linked as:

og_image: `/OG-Image-Main@300px.jpg`

`git push` on the `master` branch will launch `compartments/` to `kelli@airshipcms.io`


# Building for Production

To generate static files in the simplest way, run:
```
gatsby build
```
or
```
npm run build
```

The `public/` directory will contain all the files necessary to copy to the server.

To test the production build locally, run
```
gatsby serve
```
Open the browser to localhost:9000

