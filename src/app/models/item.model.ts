export class ItemModel {
  public itemId: string;
  public description: string;

  constructor(json: any) {
    var keys = Array.from(Object.keys(json));

    keys.forEach(key => {
      this.setProperty(key, json[key]);
    });
  }

  private setProperty(key, value) {
    switch(key) {
      case 'itemId':
        this.itemId = value;
        break;

      case 'description':
        this.description = value;
        break;
    }
  }
}