let input = {
  "process": {
    "id": "Process_dc3cafbe_22aa_485a_aed5_c6f8f2e3fd17",
    "name": null,
    "__typename": "bpmnProcessDescription"
  },
  "messages": [],
  "connections": [
    {
      "id": "Flow_1676280906795",
      "sourceId": "StartEvent_1676280891140",
      "targetId": "Activity_1676280893344",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 195,
          "y": 127,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 310,
          "y": 127,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1676280908803",
      "sourceId": "Activity_1676280893344",
      "targetId": "Gateway_1676280895683",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 410,
          "y": 127,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 550,
          "y": 127,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1676878820958",
      "sourceId": "Gateway_1676280895683",
      "targetId": "Activity_1676280897879",
      "name": null,
      "nameBounds": null,
      "type": "defaultFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 600,
          "y": 127,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 720,
          "y": 127,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1676280912757",
      "sourceId": "Activity_1676280897879",
      "targetId": "EndEvent_1676280899982",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 820,
          "y": 127,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 930,
          "y": 127,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1676280915991",
      "sourceId": "Gateway_1676280895683",
      "targetId": "Activity_1676280902600",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": "${!Form_1676280962413}",
      "waypoints": [
        {
          "x": 575,
          "y": 152,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 575,
          "y": 260,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 410,
          "y": 260,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1676280919640",
      "sourceId": "Activity_1676280902600",
      "targetId": "Activity_1676280893344",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 360,
          "y": 220,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 360,
          "y": 167,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    }
  ],
  "shapes": [
    {
      "id": "StartEvent_1676280891140",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 160,
        "y": 110,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Gateway_1676280895683",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "exclusiveGateway",
      "bounds": {
        "x": 550,
        "y": 102,
        "width": 50,
        "height": 50,
        "__typename": "bpmnBounds"
      },
      "__typename": "bpmnShapeDefault"
    },
    {
      "id": "Activity_1676280897879",
      "parentId": null,
      "childIds": [],
      "name": "Do B",
      "type": "userTask",
      "bounds": {
        "x": 720,
        "y": 87,
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
      "id": "Activity_1676280902600",
      "parentId": null,
      "childIds": [],
      "name": "Prepare for new A",
      "type": "userTask",
      "bounds": {
        "x": 310,
        "y": 220,
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
      "id": "EndEvent_1676280899982",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 930,
        "y": 110,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_1676280893344",
      "parentId": null,
      "childIds": [],
      "name": "Do A",
      "type": "userTask",
      "bounds": {
        "x": 310,
        "y": 87,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": null,
      "happyPath": null,
      "roles": null,
      "formFields": [
        {
          "id": "Form_1676280962413",
          "name": "isCarClean",
          "type": "BOOLEAN",
          "required": false,
          "values": null,
          "__typename": "bpmnFormField"
        }
      ],
      "__typename": "bpmnUserTask"
    }
  ],
  "__typename": "bpmnModel"
}
let  data = {
  query: "mutation SaveBpmnView($deploymentName: String, $model: bpmnModelInput) { saveBpmnView(deploymentName: $deploymentName, model: $model) { bpmnModel { connections { id } } message status }}",
  operationName: "SaveBpmnView",
  variables: {"deploymentName": "Mutation-UserTasksWithFormAndGateways", "model": input}
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

