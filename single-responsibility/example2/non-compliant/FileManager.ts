export default class FileManager {
  readFile(filePath: string): string {
    console.log(`Reading file from ${filePath}`);
    return 'file content';
  }

  writeFile(filePath: string, content: string) {
    console.log(`Writing to file at ${filePath}`);
  }

  processFile(filePath: string, content: string) {
    this.log('Starting file processing');
    this.writeFile(filePath, content);
    this.log('File processing completed');
  }

  private log(message: string) {
    console.log(`Log: ${message}`);
  }
}
