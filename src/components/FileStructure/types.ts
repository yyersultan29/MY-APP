export type FileType = "file" | "folder";

export interface IFile {
  name: string;
  type: FileType;
  children?: IFile[];
}
