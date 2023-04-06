let input = {
  "process": {
    "id": "Process_a2f5e6_a54_423e6_81c0_84fafcb3",
    "name": null,
    "__typename": "bpmnProcessDescription"
  },
  "connections": [
    {
      "id": "Flow_1677746327200",
      "sourceId": "StartEvent_1677746321445",
      "targetId": "Activity_1677746323504",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 195,
          "y": 117,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 390,
          "y": 117,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1677746333999",
      "sourceId": "Activity_1677746323504",
      "targetId": "Activity_1677746330554",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 490,
          "y": 117,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 670,
          "y": 117,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1677746339731",
      "sourceId": "Activity_1677746330554",
      "targetId": "EndEvent_1677746336379",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 770,
          "y": 117,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 990,
          "y": 117,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    }
  ],
  "shapes": [
    {
      "id": "EndEvent_1677746336379",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 990,
        "y": 100,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_1677746330554",
      "parentId": null,
      "childIds": [],
      "name": "Task 2",
      "type": "userTask",
      "bounds": {
        "x": 670,
        "y": 78,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": "Task2Form",
      "happyPath": null,
      "roles": null,
      "formFields": [
        {
          "id": "Form_1678290120029",
          "name": "Form_1678290120029",
          "type": "BOOLEAN",
          "required": true,
          "values": null,
          "__typename": "bpmnFormField"
        }
      ],
      "__typename": "bpmnUserTask"
    },
    {
      "id": "StartEvent_1677746321445",
      "parentId": null,
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 160,
        "y": 100,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_1677746323504",
      "parentId": null,
      "childIds": [],
      "name": "Task 1",
      "type": "userTask",
      "bounds": {
        "x": 390,
        "y": 78,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": "Task1Form",
      "happyPath": "Start risk treatment;5",
      "roles": [
        "my-role-1",
        "my-role-2"
      ],
      "formFields": [
        {
          "id": "Form_1678282713610",
          "name": "EnumField",
          "type": "ENUM",
          "required": false,
          "values": [
            {
              "id": "Value_1678283246542",
              "name": "Enum1",
              "__typename": "bpmnFormFieldValue"
            },
            {
              "id": "Value_1678283251294",
              "name": "Enum2",
              "__typename": "bpmnFormFieldValue"
            }
          ],
          "__typename": "bpmnFormField"
        }
      ],
      "__typename": "bpmnUserTask"
    }
  ],
  "__typename": "bpmnModel"
}
let  data = {
  query: "mutation SaveBpmnView($deploymentName: String, $model: bpmnModelInput, $activate: Boolean) { saveBpmnView(deploymentName: $deploymentName, model: $model, activate: $activate) { bpmnModel { connections { id } } message status }}",
  operationName: "SaveBpmnView",
  variables: {"deploymentName": "MyModel.bpmn", "activate": true, "model": input}
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

