export enum ErrorType {
  Marformed = "Marformed",
  NotMatching = "NotMatching",
  InvalidValue = "InvalidValue"
}

export class LeptonsError {
  constructor(
    public readonly type: ErrorType,
    public readonly className: string,
    public readonly message: string) {
  }
}