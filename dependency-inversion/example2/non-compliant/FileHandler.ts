export class FileHandler {
  static readFile(filePath: string, storageType: 'GCP' | 'AWS') {
    if (storageType === 'GCP') {
      console.log(`Reading file from GCP: ${filePath}`);
    } else if (storageType === 'AWS') {
      console.log(`Reading file from AWS S3: ${filePath}`);
    } else {
      throw new Error('Unsupported storage type');
    }
    return 'file content';
  }
}
