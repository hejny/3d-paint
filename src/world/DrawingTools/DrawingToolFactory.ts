import PathDrawingTool from "./drawingTools/PathDrawingTool";
import World from "../World";
import DrawingPoint from "./DrawingPoint";
import ITranformPath from "./transformPath/ITranformPath";
import GridDrawingTool from "./drawingTools/GridDrawingTool";


function compose<T>(...funcs: ((input: T) => T)[]): (input: T) => T {
    return (input: T) => funcs.reduce((input, func) => func(input), input);
}


export default class {

    constructor(private _world: World) {
    }

    async createPathTool(materialName: string) {


        const transformPath: ITranformPath =
            compose(
                //createTransformPathGrid(1),
                //createTransformPathIntensity()
            );

        return new PathDrawingTool(
            this._world,
            {
                transformPath,
                //modifySurfacePoint: (point: BABYLON.Vector3, center: DrawingPoint, tool: PathDrawingTool) => point,
                tessalationInLength: 0.02,
                tessalationInRadius: 7,
                countPointRadius: (center: DrawingPoint) => center.intensity / 40 + .01,
                material: (await this._world.materialFactory.getStructure(materialName)).babylonMaterial
            }
        );

    }


    async createGridTool(materialName: string, gridSize: number) {
        return new GridDrawingTool(
            this._world,
            {
                gridSize,
                material: (await this._world.materialFactory.getStructure(materialName)).babylonMaterial
            }
        );
    }

}