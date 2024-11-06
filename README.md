Very much a Work In Progress / test!

To run locally:
`rm -rf .parcel-cache && npm install && npm start`

The parcel cache was playing tricks on me so watch out.

@annotorious/react node_module was modified to export `OpenSeadragonAnnotatorContext`

This change is in Github main now, but not released yet
https://github.com/annotorious/annotorious/blob/main/packages/annotorious-react/src/openseadragon/index.ts#L3

I cloned the @annotorious/react plugin in a separete directory from Github, added the line, and ran `npm pack`.

Then, I could include the following in `package.json`:
```
"@annotorious/react": "file:../annotorious/packages/annotorious-react/annotorious-react-3.0.11.tgz",
```

You will end up with a viewer, and if you double click, you can begin to draw a polygon (the default annotorious tool). You can finish the drawing with another double click.
You will see this:
<img width="968" alt="Screenshot 2024-11-06 at 3 42 29 PM" src="https://github.com/user-attachments/assets/5bd9324d-fc14-46e9-ba93-6b29304ffc4d">



Inspired by https://github.com/rsimon/mirador-annotorious 
