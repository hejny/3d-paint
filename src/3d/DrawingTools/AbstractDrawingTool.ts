import * as BABYLON from 'babylonjs';
import { World } from '../World/World';
import { IFrame } from '../../model/IFrame';

export default class AbstractDrawingTool {
    public drawing: boolean = false;
    //public drawingMesh: BABYLON.Mesh | null;
    public currentFrame: IFrame;

    //private _toolMesh: BABYLON.Mesh;

    constructor(public world: World) {
        //this._toolMesh = this.createToolMesh();
    }

    createToolMesh(): BABYLON.Mesh {
        return BABYLON.Mesh.CreateSphere('sphere', 16, 1, this.world.scene);
    }

    start() {
        if (this.drawing === false) {
            //todo is it best solution?
            this.restart();
        }
    }

    restart() {
        this.drawing = true;
        //this.drawingMesh = null;
    }

    end() {
        this.drawing = false;
        //console.log('Drawed ', this.drawingMesh);
    }

    back() {}

    update(frame: IFrame) {
        this.currentFrame = frame;

        //this._toolMesh.position = point.position;
        //todo this._toolMesh.scaling = BABYLON.Vector3.One().scaleInPlace(this.intensityToRadius(point.intensity));
    }
}
