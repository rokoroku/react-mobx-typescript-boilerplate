import { observable } from 'mobx';

export class TodoModel {
  readonly id: number;
  @observable public text: string;
  @observable public completed: boolean;

  constructor(text: string, completed: boolean = false) {
    this.id = TodoModel.generateId();
    this.text = text;
    this.completed = completed;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default TodoModel;
