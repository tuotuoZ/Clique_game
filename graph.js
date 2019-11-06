var numNodes = document.getElementById('Nodes');
var form = document.getElementById('ready');
var canvas = document.getElementById('myCanvas');



form.addEventListener('submit', function(event){
    // Generates a random graph with six nodes and
    // an edge between each node is created with a probability of 0.3
    var G = jsnx.binomialGraph(parseFloat(numNodes.value), 0.1);
    console.log(!d3);
    jsnx.draw(G, {
      element: canvas,
      weighted: true,
      edgeStyle: {
          'stroke-width': 10
      }
    });
    event.preventDefault();
});
