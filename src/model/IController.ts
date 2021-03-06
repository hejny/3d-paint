import { IDrawingToolConfig } from './IDrawingToolConfig';
import { IFrame } from './IFrame';

export type TWheelChangingOptions =
    | 'SIZE'
    | 'COLOR_HUE'
    | 'COLOR_SATURATION'
    | 'COLOR_LIGHT';
export const WHEEL_CHANGING_OPTIONS: TWheelChangingOptions[] = [
    'SIZE',
    'COLOR_HUE' /*,'COLOR_SATURATION','COLOR_LIGHT'*/,
];

export interface IController {
    id: string;
    wheelChanging: TWheelChangingOptions;
    drawingToolConfig: IDrawingToolConfig<{}>;
    currentFrame: null | IFrame;
}
