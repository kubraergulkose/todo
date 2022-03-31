export class Model {

  items;

  constructor() {

      this.items = [  ];

  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
      this.description = description;
      this.action = action;
  }
}
