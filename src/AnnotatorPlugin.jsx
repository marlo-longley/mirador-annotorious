import React from 'react';
import { Annotorious, OpenSeadragonAnnotator, OpenSeadragonAnnotationPopup } from '@annotorious/react';
import AnnotatorViewer from './AnnotatorViewer';

const AnnotatorPlugin = (props) => {
  return (
    <Annotorious>
        <OpenSeadragonAnnotator>
            <AnnotatorViewer {...props} />
            <OpenSeadragonAnnotationPopup popup={(props) => (
                <div>
                  Hello World
                </div>
              )} />
        </OpenSeadragonAnnotator>
    </Annotorious>
  );
};

export default AnnotatorPlugin;