import React from "react";
import Graph from "react-graph-vis";


const example = {
    1: [2, 3],
    2: [4],
    3: [5, 6]
}
const exampleNodes = [1, 2, 3, 4, 5, 6];

const makeNodes = (array) => {
    let nodes = [];
    for (let i = 0; i < array.length; i++) {
        nodes.push({
            id: (i + 1),
            label: array[i].toString()
        })
    }
    return nodes;
}
const makeEdges = (list, nodes) => {
    let edges = [];
    for (let i = 0; i < nodes.length; i++) {
        if (list[nodes[i]]) {
            for (let j = 0; j < list[nodes[i]].length; j++) {
                edges.push({
                    from: nodes[i],
                    to: list[nodes[i]][j]
                })
            }
        }
    }
    return edges;
}

const GraphVisual = () => {
  const graph = {
    nodes: makeNodes(exampleNodes),
    edges: makeEdges(example, exampleNodes),
  };

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };


  return (
    <Graph
      graph={graph}
      options={options}
    />
  );
}
export default GraphVisual;