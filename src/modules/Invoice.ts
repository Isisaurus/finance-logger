import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  readonly client: string;
  details: string;
  private amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}!`;
  }
}
