import { AWSFileStorage, GCPFileStorage, IFileStorage } from './FileStorage';

export class FileHandler {
  private fileStorage: IFileStorage;

  constructor(fileStorage: IFileStorage) {
    this.fileStorage = fileStorage;
  }

  writeFile(filePath: string, content: string) {
    this.fileStorage.writeFile(filePath, content);
  }
}

// Example:
// GCP
const gcpStorage = new GCPFileStorage();
const gcpFileHandler = new FileHandler(gcpStorage);

gcpFileHandler.writeFile('example.txt', 'Content for GCP');

// AWS
const awsStorage = new AWSFileStorage();
const awsFileHandler = new FileHandler(awsStorage);

awsFileHandler.writeFile('example.txt', 'Content for AWS');
