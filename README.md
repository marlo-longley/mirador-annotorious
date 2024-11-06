Very much a Work In Progress / test!

To run locally:
`rm -rf .parcel-cache && npm install && npm start`

The parcel cache was playing tricks on me so watch out.

@annotorious/react node_module was modified to export `OpenSeadragonAnnotatorContext`
This change is in Github main now, but not released yet
https://github.com/annotorious/annotorious/blob/main/packages/annotorious-react/src/openseadragon/index.ts#L3
I cloned the plugin Github, added the line, and ran `npm pack`.
Then, I could include the following in `package.json`:
```
"@annotorious/react": "file:../annotorious/packages/annotorious-react/annotorious-react-3.0.11.tgz",
```