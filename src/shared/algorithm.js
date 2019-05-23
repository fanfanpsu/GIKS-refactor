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

    let rows = [];
    for (let i = 0; i < nodes.length; i++) {

        let currentRow = {};
        currentRow["node"] = nodes[i].data.id.charAt(0).toUpperCase() + nodes[i].data.id.slice(1); ;

        for (let j = 0; j < nodes.length; j++) {
            currentRow[nodes[j].data.id] = {
                edge: nodes[i].data.id + "-" + nodes[j].data.id,
                value:0
            };
        }
        rows.push(currentRow);
    }
    return rows;
}


export const nodeMatrixheaderGeneration = ( nodes ) =>{
    let headers = Object.values(nodes)
        .map(node => {
            return node.data.id;
        }).reduce((arr, el,index) => {

        let header = {};
        header["Header"] = el.charAt(0).toUpperCase() + el.slice(1);
        header["accessor"] = el.toString() + ".value";
        header["getProps"] = (state, rowInfo) => {
            console.log()
            return {
                style: {
                    background: rowInfo && rowInfo.row
                    && rowInfo.row[el.toString() + ".value"] === 1 ? '#85cc00' : '#ffbf00',
                    transition: 'all .5s ease-out'
                },
            };
        }

        return arr.concat(header);
    }, []);

    headers.splice(0, 0, {
        Header : "",
        accessor : "node"
    });
    return headers;
}