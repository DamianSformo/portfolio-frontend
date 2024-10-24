import { Exhibition } from "./exhibition.model";
import { Prize } from "./prize.model";

export interface ExhibitionComplete {
    exhibitionGroup: Array<Exhibition>;
    exhibitionIndividual: Array<Exhibition>;
    prizes: Array<Prize>;
}