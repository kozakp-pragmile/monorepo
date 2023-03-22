let input = {
  "process": {
    "id": "Process_caafe04d_9849_4fda_b987_700d7053ae7cfidf",
    "name": null,
    "__typename": "bpmnProcessDescription"
  },
  "messages": [],
  "connections": [
    {
      "id": "Flow_1679042982054",
      "sourceId": "Activity_1679042974216",
      "targetId": "EndEvent_1679042976920",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 650,
          "y": 130,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 820,
          "y": 137.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1679042980286",
      "sourceId": "StartEvent_1679042972157",
      "targetId": "Activity_1679042974216",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 355,
          "y": 127.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 550,
          "y": 130,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    }
  ],
  "shapes": [
    {
      "id": "Activity_1679042974216",
      "parentId": null,
      "childIds": [],
      "name": "Task 1",
      "type": "userTask",
      "bounds": {
        "x": 550,
        "y": 90,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": null,
      "happyPath": null,
      "roles": null,
      "formFields": null,
      "__typename": "bpmnUserTask"
    },
    {
      "id": "EndEvent_1679042976920",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 820,
        "y": 120,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "StartEvent_1679042972157",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 320,
        "y": 110,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    }
  ],
  "__typename": "bpmnModel"
}

let modifiedInput = JSON.stringify(input).replaceAll(/"([^"]+)":/g, "$1:")
let data = {
  query: "mutation SaveBpmnView { saveBpmnView(deploymentName: \"first-upload\", model: " + modifiedInput + ") { bpmnModel { connections { id } } message status }}",
  operationName: "SaveBpmnView",
  variables: {}
};

fetch("/CorpoWebserver/graphql", {
  method: "POST",
  credentials: 'same-origin',
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

