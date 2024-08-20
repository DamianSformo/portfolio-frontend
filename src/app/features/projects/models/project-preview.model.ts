import { ProjectFile } from "./project-file.model";

export interface ProjectPreview  {
    id: number
    title: string;
    year: number;
    orderIndex: number;
    projectFile: ProjectFile
}