export enum DIRECTIONS {
    LEFT = 1,
    UP = 2,
    RIGHT = 3,
    DOWN = 4
}
export const SIZE = 24;
export const LENGTH_MIN = 4;
export const GAME_VIEW_WIDTH = 31;
export const GAME_VIEW_HEIGHT = 39;
export const FRAME_DELTA_TIME = 0.1

export enum GAME_EVENT {
    GAME_OVER = "CLIENT_GAME_OVER",
    EAT_FOOD = "CLIENT_EAT_FOOD"
}