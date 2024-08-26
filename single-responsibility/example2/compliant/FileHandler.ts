export default class FileHandler {
  static readFile(filePath: string): string {
    console.log(`Reading file from ${filePath}`);
    return 'file content';
  }

  static writeFile(filePath: string, content: string) {
    console.log(`Writing to file at ${filePath}`);
  }
}
