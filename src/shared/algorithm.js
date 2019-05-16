//node paring
export const nodePairing = (nodes) => {
    let edges = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            edges.push(
                {
                    group: 'edges',
                    data: {
                        id: nodes[i].data.id + "-" + nodes[j].data.id,
                        source: nodes[i].data.id,
                        target: nodes[j].data.id
                    }
                }
            )
        }
    }
    return edges;
}