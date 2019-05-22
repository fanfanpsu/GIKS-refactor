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

export const matrixHeaderBuilder = (nodes) =>{

    let headers = [];
    for (let i = 0; i < nodes.length; i++) {
        headers.push(nodes[i].data.id);
    }
    return headers;
}

export const nodeMatrixRowGeneration = ( nodes ) =>{
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }];
    // alert("nodeMatrixRowGeneration nodes: " + nodes);
    let rows = [];
    for (let i = 0; i < nodes.length; i++) {

        let currentRow = {};
        currentRow["node"] = nodes[i].data.id.charAt(0).toUpperCase() + nodes[i].data.id.slice(1); ;

        for (let j = 0; j < nodes.length; j++) {
            currentRow[nodes[j].data.id] = 0;
        }
        rows.push(currentRow);
    }
    return rows;
}