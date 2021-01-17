
export class Atom {
  public readonly important?: boolean;
  public readonly module?: string;
  public readonly value: string;
  public readonly attribute?: string;
  public readonly pseudoClasses?: string[];
  public readonly pseudoElement?: string;
  public readonly medias?: string[];

  constructor(className: string) {

    let parts = className.split('-');

    if (parts.length < 2) {
      throw `Class parts requires at least the Module and Value`
    }

    // MEDIAS
    let part = parts[parts.length - 1];

    // If the last part match with Breakpoints
    // and it doesn't have a pseudo element separator
    if (part.match(/^[A-Z]+$/) && parts.length >=2 && parts[parts.length - 2] != "") {
      this.medias = part.split('');
      parts.splice(-1, 1);
    }

    // PSEUDO ELEMENT
    part = parts[parts.length - 1];

    // If the last part match with Pseudo Elements
    // and it has a pseudo element separator
    if (part.match(/^[A-Z]+$/) && parts.length >=2 && parts[parts.length - 2] === "") {
      this.pseudoElement = part;
      parts.splice(-2, 2);
    }

    // PSEUDO CLASSES
    part = parts[parts.length - 1];
    // If the last part match with Pseudo Classes
    // and it has a pseudo class separator
    if (part.match(/^[a-z]+(A[a-z]+)*$/) && parts.length >=2 && parts[parts.length - 2] === "") {
      this.pseudoClasses = part.split('A');
      parts.splice(-2, 2);
    }

    if (parts.length < 2) {
      throw "Class parts requires the Module and Value"
    }

    part = parts[0];

    // MODULE
    if (part.match(/^!?[a-z]+$/)) {

      // IMPORTANT
      if (part[0] === "!") {
        this.important = true;
        this.module = part.substr(1);
      } else {
        this.module = part;
      }
      parts.splice(0, 1);
    } else {
      throw `Invalid Module characters "${part}"`;
    }

    // ATTRIBUTE
    if (parts.length == 2) {
      part = parts[0];
      if (part.match(/^[a-z]+$/)) {
        this.attribute = part;
        parts.splice(0, 1);
      } else {
        throw `Invalid Attribute characters "${part}"`;
      }
    }

    // VALUE
    part = parts[0];
    if (part.trim().length == 0) {
      throw "Value is empty"
    }

    this.value = part;
    parts.splice(0, 1);

    if (parts.length > 1) {
      throw `These class parts are invalid "${parts.join('-')}"`
    } else if (parts.length == 1) {
      throw `This class part is invalid "${part}"`
    }
  }
}