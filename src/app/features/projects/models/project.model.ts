import { ProjectFile } from "./project-file.model";

export interface Project  {
    title: string;
    description: string;
    text: string;
    year: number;
    site: string;
    technique: string;
    projectFiles: ProjectFile[]
}