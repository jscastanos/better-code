import FileHandler from './FileHandler';
import Logger from './Logger';

export default class FileProcessor {
  processFile(filePath: string, content: string) {
    Logger.log('Starting file processing');
    FileHandler.writeFile(filePath, content);
    Logger.log('File processing completed');
  }
}
