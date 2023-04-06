let input = {
  "process": {
    "id": "Process_1g9qd23",
    "name": null,
    "__typename": "bpmnProcessDescription"
  },
  "messages": [],
  "connections": [
    {
      "id": "Flow_0wzinjo",
      "sourceId": "StartEvent_1",
      "targetId": "Activity_0xcu3do",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 215,
          "y": 267,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 310,
          "y": 267,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0droliv",
      "sourceId": "Activity_015owmo",
      "targetId": "Activity_0xcu3do",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 760,
          "y": 410,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 760,
          "y": 460,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 360,
          "y": 460,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 360,
          "y": 307,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1pzq3j8",
      "sourceId": "Gateway_1s9jchw",
      "targetId": "Activity_015owmo",
      "name": "Score Under 800",
      "nameBounds": {
        "x": 581,
        "y": 353,
        "width": 84,
        "height": 14,
        "__typename": "bpmnBounds"
      },
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 520,
          "y": 292,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 520,
          "y": 370,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 700,
          "y": 370,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1jfd9ue",
      "sourceId": "Activity_0d1dk9m",
      "targetId": "Event_1g4v850",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 800,
          "y": 267,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 952,
          "y": 267,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0yip7k5",
      "sourceId": "Activity_0xcu3do",
      "targetId": "Gateway_1s9jchw",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 410,
          "y": 267,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 495,
          "y": 267,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1uwr2fu",
      "sourceId": "Activity_00ftrj8",
      "targetId": "Activity_0xcu3do",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 750,
          "y": 130,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 750,
          "y": 80,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 360,
          "y": 80,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 360,
          "y": 227,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_131ck3o",
      "sourceId": "Gateway_1s9jchw",
      "targetId": "Activity_0d1dk9m",
      "name": "Score over 1000",
      "nameBounds": {
        "x": 582,
        "y": 249,
        "width": 81,
        "height": 14,
        "__typename": "bpmnBounds"
      },
      "type": "defaultFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 545,
          "y": 267,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 700,
          "y": 267,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0g7ztu4",
      "sourceId": "Gateway_1s9jchw",
      "targetId": "Activity_00ftrj8",
      "name": "Score 800 - 1000",
      "nameBounds": {
        "x": 577,
        "y": 153,
        "width": 85,
        "height": 14,
        "__typename": "bpmnBounds"
      },
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 520,
          "y": 242,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 520,
          "y": 170,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 700,
          "y": 170,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    }
  ],
  "shapes": [
    {
      "id": "Gateway_1s9jchw",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "complexGateway",
      "bounds": {
        "x": 495,
        "y": 242,
        "width": 50,
        "height": 50,
        "__typename": "bpmnBounds"
      },
      "__typename": "bpmnShapeDefault"
    },
    {
      "id": "Activity_0d1dk9m",
      "parentId": null,
      "childIds": [],
      "name": "Attend University",
      "type": "userTask",
      "bounds": {
        "x": 700,
        "y": 227,
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
      "id": "StartEvent_1",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 179,
        "y": 249,
        "width": 36,
        "height": 36,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_0xcu3do",
      "parentId": null,
      "childIds": [],
      "name": "Take SAT",
      "type": "userTask",
      "bounds": {
        "x": 310,
        "y": 227,
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
      "id": "Activity_015owmo",
      "parentId": null,
      "childIds": [],
      "name": "Get Expensive Class",
      "type": "userTask",
      "bounds": {
        "x": 700,
        "y": 330,
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
      "id": "Event_1g4v850",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 952,
        "y": 249,
        "width": 36,
        "height": 36,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_00ftrj8",
      "parentId": null,
      "childIds": [],
      "name": "Read SAT Prep Book",
      "type": "userTask",
      "bounds": {
        "x": 700,
        "y": 130,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": null,
      "happyPath": null,
      "roles": null,
      "formFields": null,
      "__typename": "bpmnUserTask"
    }
  ],
  "__typename": "bpmnModel"
}

let  data = {
  query: "mutation SaveBpmnView($deploymentName: String, $model: bpmnModelInput, $activate: Boolean) { saveBpmnView(deploymentName: $deploymentName, model: $model, activate: $activate) { bpmnModel { connections { id } } message status }}",
  operationName: "SaveBpmnView",
  variables: {"deploymentName": "Mutation-ComplexGateway.bpmn", "model": input, "activate": true}
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

