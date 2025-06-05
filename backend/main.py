from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

app = FastAPI()

# Allow all origins (for dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models for incoming data
class Node(BaseModel):
    id: str
    type: str
    data: Dict

class Edge(BaseModel):
    id: str
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# POST endpoint to parse pipeline
@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    if num_nodes == 0:
        raise HTTPException(status_code=400, detail="No nodes provided.")

    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes to the graph
    for node in pipeline.nodes:
        G.add_node(node.id)

    # Add edges to the graph
    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)

    # Use NetworkX to check if the graph is a DAG
    is_dag = nx.is_directed_acyclic_graph(G)

    # Return response
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
