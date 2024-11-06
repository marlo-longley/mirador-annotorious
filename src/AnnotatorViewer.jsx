import React, { useEffect, useContext } from 'react';
import { OSDReferences } from 'mirador/dist/es/src/plugins/OSDReferences';
import { OpenSeadragonAnnotatorContext, useAnnotator } from '@annotorious/react';

export default function AnnotatorViewer(props) {
    const { windowId } = props;
    const context = useContext(OpenSeadragonAnnotatorContext);
    const { setViewer } = context;

    console.log("Context Value: ", context);

    const anno = useAnnotator();

    useEffect(() => {
        const viewerInstance = OSDReferences.get(windowId);
        if (viewerInstance) {
            setViewer(viewerInstance.current);
        }
    }, [windowId, setViewer]);

    useEffect(() => {
        if (anno) {
            anno.setAnnotations(props.annotations);
            anno.setDrawingEnabled(true)
            anno.setStyle({
                fill: '#00ff00',
                fillOpacity: 1,
                stroke: '#00ff00',
                strokeOpacity: 1
            });

            anno.setDrawingTool('polygon');
            anno.setVisible(true);

            const handleCreate = annotation => {
                console.log("Annotation created:", annotation);
            };

            const handleUpdate = annotation => {
                console.log("Annotation updated:", annotation);
            };

            const handleDelete = annotation => {
                console.log("Annotation deleted:", annotation);
            };

            anno.on('createAnnotation', handleCreate);
            anno.on('updateAnnotation', handleUpdate);
            anno.on('deleteAnnotation', handleDelete);

            // Cleanup listeners on component unmount
            return () => {
                anno.off('createAnnotation', handleCreate);
                anno.off('updateAnnotation', handleUpdate);
                anno.off('deleteAnnotation', handleDelete);
                anno.destroy();
            };
        }
    }, [anno]);

    return (
        <props.TargetComponent {...props} />
    );
}
