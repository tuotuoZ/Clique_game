import React from 'react';
import logo from './logo.svg';
import './App.css';
import { draw } from 'd3';
var d3 = require('d3');
var jsnx = require('jsnetworkx');
var G;
function About() {
  return (
    <div>
      <h1>What is a clique?</h1>
      <h3>Let's hear from wiki: </h3>
      <p>In the mathematical area of graph theory, a clique is a subset of
        vertices of an undirected graph such that every two distinct vertices in
         the clique are adjacent; that is, its induced subgraph is complete.</p>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <h3>That is even more confusing right? Don't worry. Let us see a graph first.</h3>
       <p>Enter a number of how many nodes you want in your graph: </p>
       <input type="text" id="nodes"></input>
       <br></br>
       <a onClick={() => generate()} className="btn btn-primary">Generate</a>

       <div id="myCanvas">
           <svg height="120" width="120"></svg>
       </div>
       <p>click here to find a clique</p>
       <a onClick={() => findClique()} className="btn btn-primary">Find a Clique</a>
    </div>
  );
}

function generate() {

  var canvas = document.getElementById("myCanvas");
  var numNodes = document.getElementById("nodes");
  G = jsnx.binomialGraph(parseFloat(numNodes.value), 0.3);
  jsnx.draw(G, {
    element: canvas,
    weighted: true,
    edgeStyle: {
        'stroke-width': 10
    }
  });


}

function findClique() {
  var cliq = jsnx.genFindCliques(G);
  console.log(cliq);


}
export default About;
