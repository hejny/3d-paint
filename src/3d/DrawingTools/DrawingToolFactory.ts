import { PathDrawingToolDefaultOptions } from './drawingTools/PathDrawingTool';
import { DrawingToolAdapter } from './DrawingToolAdapter';
import { IDrawingToolConfig } from '../../model/IDrawingToolConfig';
import { IWorld } from '../World/IWorld';
import { waitAnimationFrame } from '../../tools/wait';

//is this needed?
export class DrawingToolFactory {
    constructor(private world: IWorld) {}

    //todo cache
    getDrawingTool(
        drawingToolConfig: IDrawingToolConfig<any>,
    ): DrawingToolAdapter {
        if (drawingToolConfig.toolId === 'path') {
            drawingToolConfig.options = Object.assign(
                {},
                PathDrawingToolDefaultOptions,
                drawingToolConfig.options,
            );
            drawingToolConfig.structureId = drawingToolConfig.structureId;

            //console.log('creating tool',JSON.parse(JSON.stringify(drawingToolConfig)));

            return new DrawingToolAdapter(this.world, drawingToolConfig);
        } else {
            throw new Error(`Not path`);
        }
    }

    async replayState(percentCallback?: (percent: number) => void) {
        let i = 0;
        for (const drawing of this.world.openedFile.drawings) {
            if (percentCallback)
                percentCallback(i / this.world.openedFile.drawings.length);

            const drawingTool = this.getDrawingTool(drawing.drawingToolConfig);
            await drawingTool.replayState(drawing);
            drawingTool.dispose();

            await waitAnimationFrame();
            i++;
        }

        if (percentCallback) percentCallback(1);
    }
}
