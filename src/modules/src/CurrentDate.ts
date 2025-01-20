export class CurrentDate {
  private months: string[];
  private dateElement: HTMLElement;
  private date: Date;

  constructor(months: string[], dateElement: HTMLElement) {
    this.months = months;
    this.dateElement = dateElement;
    this.date = new Date();
  }

  private day(): number {
    return this.date.getDate();
  }

  private month(): string {
    return this.months[this.date.getMonth()];
  }

  private hour(): string {
    return this.date.getHours().toString().padStart(2, '0');
  }

  private minutes(): string {
    return this.date.getMinutes().toString().padStart(2, '0');
  }

  public init(): void {
    this.dateElement.innerText = `${this.day()} ${this.month()} ${this.hour()}:${this.minutes()}`;
  }
}
