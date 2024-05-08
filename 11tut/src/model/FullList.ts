import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }
  set list(list: ListItem[]) {
    this._list = list;
  }
  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") {
      return;
    }
    const parsedList: { _id: string; _item: string; _checked: boolean }[] = JSON.parse(storedList);
    parsedList.forEach((itemObj) => {
      const newListItem: ListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
      FullList.instance.addItem(newListItem);
    });
  }
  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    console.log("A");
    console.log(this.list);
    this._list = this._list.filter((item) => {
      return item.id !== id;
    });
    this.save();
    console.log("B");
    console.log(this.list);
  }
}
