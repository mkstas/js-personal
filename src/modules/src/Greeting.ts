interface UserData {
  message: string;
  githubUrl: string;
}

export class Greeting {
  private userData: UserData;
  private messageElement: HTMLElement;
  private githubElement: HTMLAnchorElement;

  constructor(userData: UserData, messageElement: HTMLElement, githubElement: HTMLAnchorElement) {
    this.userData = userData;
    this.messageElement = messageElement;
    this.githubElement = githubElement;
  }

  public init(): void {
    this.messageElement.innerText = this.userData.message;
    this.githubElement.href = this.userData.githubUrl;
    this.githubElement.target = '_blank';
  }
}
