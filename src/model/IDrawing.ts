import { IDrawingTool } from "./IDrawingTool";
import { IFrame } from "./IFrame";

export interface IDrawing {
    id: string;
    drawingTool: IDrawingTool;
    frames: IFrame[];
}