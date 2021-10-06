import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  // refractored constructor with types and access types
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}!`;
  }
}
