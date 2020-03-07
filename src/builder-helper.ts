import * as globby from "globby";
import * as fs from "fs";

export const distinctClasses = (classes: string[]): string[] => {
  return [...new Set(classes)];
}

export const extractClassesFromSource = (source: string[]): string[] => {
  const classes: string[] = [];

  globby
    .sync(source)
    .forEach(f => classes.push(...extractClassesFromFile(f)));

  return classes;
}

export const extractClassesFromFile = (file: string): string[] => {
  return extractClassesFromContent(fs.readFileSync(file, "utf8"));
}

export const extractClassesFromContent = (content: string): string[] => {
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