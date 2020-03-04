export class Builder {

  public static extractClasses(content: string): string[] {
    const regexAttribute = /class\=(?:\"(.+?)\"|'.+?')/g;
    let attributeMatches: RegExpExecArray | null;
    const classNames: string[] = [];

    const regexClass = /^[A-Za-z0-9-_]+$/;
    
    while (attributeMatches = regexAttribute.exec(content)) {
      const entries = attributeMatches[1].split(" ");

      for (let i = 0; i < entries.length; i++) {
        let classMatch = regexClass.exec(entries[i]);
        if (classMatch) {
          classNames.push(classMatch[0]);
        }
      }
    }

    return classNames;
  }
}