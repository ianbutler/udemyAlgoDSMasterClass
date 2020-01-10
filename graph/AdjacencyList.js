class AdjacencyList {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (this.list[vertex]) return;
    this.list[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.list[v1] || !this.list[v2]) return;

    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.list[v1] || !this.list[v2]) return;

    this.list[v1] = this.list[v1].filter(item => item !== v2);
    this.list[v2] = this.list[v2].filter(item => item !== v1);
  }

  removeVertex(vertex) {
    if (!this.list[vertex]) return;

    this.list[vertex].forEach(connection => {
      this.removeEdge(vertex, connection);
    });

    delete this.list[vertex];
  }
}

let a = new AdjacencyList();
a.addVertex("Tokyo");
a.addVertex("Dallas");
a.addVertex("New York");
a.addEdge("Tokyo", "Dallas");
a.addEdge("Tokyo", "New York");
a.removeVertex("New York");
console.log(a);
