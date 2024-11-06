import Mirador from 'mirador/dist/es/src/init'
import { getWindow } from 'mirador/dist/es/src/state/selectors/getters';
import { getAnnotations } from 'mirador/dist/es/src/state/selectors/annotations';
import AnnotatorPlugin from './AnnotatorPlugin';
import { getCurrentCanvas } from 'mirador/dist/es/src/state/selectors/canvases';
import { Annotorious } from '@annotorious/react';

// https://github.com/jbaiter/mirador3-plugin-dev-tutorial
const myPlugin = {
    // The plugin component that should be added
    component: AnnotatorPlugin,
    // The name of the plugin-aware Mirador 3 component that this plugin targets
    target: 'OpenSeadragonViewer',
    // Can be 'add' or 'wrap', defines how the plugin component is rendered
    /**
     * To check if a given component supports add plugins, search for uses of the PluginHook component inside of src/components modules in the Mirador 3 source code (or use this GitHub Link). The position of the <PluginHook /> definition will be the position where the plugin component is rendered.

    For components that support wrap plugins, search for uses of the withPlugins HOC inside of the src/containers modules, (or use this GitHub Link). All of the container components that are wrapped with this HOC can be wrapped by a plugin component.
     */
    mode: 'wrap',
    mapDispatchToProps: (dispatch, props) => { return {testProps: props} },
    mapStateToProps: (state, { windowId }) => {
        const allAnnotations = getAnnotations(state);
        const currentCanvas = getCurrentCanvas(state, { windowId });
        const currentCanvasAnnotations = allAnnotations[currentCanvas.id];
        
        const annotoriousFormatAnnotations = {};    
        for (const [ source, obj ] of Object.entries(currentCanvasAnnotations)) { 
            if (obj.json && obj.json.type === 'AnnotationPage') {
                if (!annotoriousFormatAnnotations[windowId]) {
                    annotoriousFormatAnnotations[windowId] = [];
                }
                annotoriousFormatAnnotations[windowId].push(...obj.json.items);
            }
        }
    
        return {
            manifestId: getWindow(state, { windowId }).manifestId,
            annotations: annotoriousFormatAnnotations[windowId] || [],
            currentCanvas,
        };
    },
    provider: Annotorious,
    // Define new sub-stores along with their respective reducers
    // reducers: { /* ... */ },
    // Define a custom saga that should be run as part of the Mirador 3 root saga
    // saga: myCustomSaga,
}

const miradorCfg = {
    id: 'mirador-test',
    windows: [{
        manifestId: 'https://iiif.io/api/cookbook/recipe/0021-tagging/manifest.json',
        // thumbnailNavigationPosition: 'bottom',
        allowClose: false,
    }],
    window: {
        allowWindowSideBar: false,
        sideBarPanel: '',
        sideBarOpen: true,
    },
    workspace: {
        type: 'not-mosaic-or-elastic',
    },
    // Needed for Annotorious to render WebGL
    osdConfig: {
        crossOriginPolicy: 'Anonymous',
    },
};

Mirador.viewer(miradorCfg, [myPlugin]);
