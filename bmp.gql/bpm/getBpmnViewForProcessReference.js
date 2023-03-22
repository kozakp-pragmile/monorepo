let data = {
  "query": "query BpmnViewForProcessReference { bpmnViewForProcessReference(bpmnViewRid: \"3651453130030950748\") { altText bpmnXml bpmnModelName bpmnModel { connections { id sourceId targetId name nameBounds { x y width height } type conditionExpression waypoints { x y } } shapes { id name bounds { x y width height } type ... on bpmnUserTask { pageId } } } height displayProcessRoles processRoles { userTaskDefinitionId name } taskLinks { taskDefinitionId rid } isEditDisabled }}",
  "operationName": "BpmnViewForProcessReference",
  "variables": {}
};

fetch("/CorpoWebserver/graphql", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
