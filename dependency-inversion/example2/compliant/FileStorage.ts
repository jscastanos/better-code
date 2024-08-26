export interface IFileStorage {
  writeFile(filePath: string, content: string): void;
}

export class GCPFileStorage implements IFileStorage {
  writeFile(filePath: string, content: string) {
    console.log(`Writing to GCP: ${filePath}`);
    // Implement GCP-specific file writing logic here
  }
}

export class AWSFileStorage implements IFileStorage {
  writeFile(filePath: string, content: string) {
    console.log(`Writing to AWS S3: ${filePath}`);
    // Implement AWS-specific file writing logic here
  }
}
