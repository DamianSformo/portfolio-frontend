import { Exhibition } from "./exhibition.model";

export interface ExhibitionComplete {
    exhibitionGroup: Array<Exhibition>;
    exhibitionIndividual: Array<Exhibition>;
}