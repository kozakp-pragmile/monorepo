let input = {
  "process": null,
  "messages": [
    {
      "id": "Message_1mi8yeg",
      "name": "riskAnalysisCompleted",
      "__typename": "bpmnMessage"
    },
    {
      "id": "Message_1674222108881",
      "name": "riskAnalysisCompleted_new",
      "__typename": "bpmnMessage"
    },
    {
      "id": "Message_0ue2t0e",
      "name": "startRiskAnalysis",
      "__typename": "bpmnMessage"
    },
    {
      "id": "Message_1674222095203",
      "name": "startRiskAnalysis_new",
      "__typename": "bpmnMessage"
    }
  ],
  "connections": [
    {
      "id": "Flow_15qxo0j",
      "sourceId": "Event_1muukxh",
      "targetId": "Activity_1ij0isk",
      "name": null,
      "nameBounds": null,
      "type": "messageFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1150.5,
          "y": 543,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1150.5,
          "y": 420.25,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 930,
          "y": 420.25,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 930,
          "y": 297.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0bvaszk",
      "sourceId": "Gateway_0e05ist",
      "targetId": "Activity_0cp9xp7",
      "name": "Rejected",
      "nameBounds": {
        "x": 1522,
        "y": 153,
        "width": 44,
        "height": 14,
        "__typename": "bpmnBounds"
      },
      "type": "sequenceFlow",
      "conditionExpression": "${Form_1674221460518=='Reject'}",
      "waypoints": [
        {
          "x": 1515,
          "y": 232.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1515,
          "y": 132,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 380,
          "y": 132,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 380,
          "y": 217.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1c7rz5c",
      "sourceId": "Event_1oafcwz",
      "targetId": "Event_094xvt9",
      "name": null,
      "nameBounds": null,
      "type": "messageFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 787.5,
          "y": 275,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 787.5,
          "y": 408.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 686,
          "y": 408.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 686,
          "y": 542,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0iyy49b",
      "sourceId": "Activity_0cp9xp7",
      "targetId": "Activity_1cdtfbp",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 430,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 490,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_17zbqqe",
      "sourceId": "Activity_1cdtfbp",
      "targetId": "Activity_12rtdcu",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 590,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 640,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0hbvbwe",
      "sourceId": "Event_094xvt9",
      "targetId": "Activity_0cqwq19",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 703.5,
          "y": 559.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 794,
          "y": 559,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_19k6hfd",
      "sourceId": "Event_1p1wcu8",
      "targetId": "Event_1oafcwz",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 707.5,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 770,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_02o6h6q",
      "sourceId": "Activity_179l6h2",
      "targetId": "Activity_1saapc0",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1260,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1320,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0h0tj5a",
      "sourceId": "Activity_1pgap16",
      "targetId": "Event_1muukxh",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1040,
          "y": 560,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1133,
          "y": 560.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_171qvw4",
      "sourceId": "Gateway_0e05ist",
      "targetId": "Activity_06uy49u",
      "name": "Approved",
      "nameBounds": {
        "x": 1536,
        "y": 230,
        "width": 48,
        "height": 14,
        "__typename": "bpmnBounds"
      },
      "type": "defaultFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1540,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1690,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0x4b9hr",
      "sourceId": "Activity_1saapc0",
      "targetId": "Gateway_0e05ist",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1420,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1490,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_13ygarg",
      "sourceId": "StartEvent_1",
      "targetId": "Activity_0cp9xp7",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 285,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 330,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_1t5chkt",
      "sourceId": "Activity_1ij0isk",
      "targetId": "Event_0isihqe",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 980,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1050,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_023yepj",
      "sourceId": "Activity_12rtdcu",
      "targetId": "Activity_179l6h2",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1107,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1160,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0d7sl38",
      "sourceId": "Activity_0cqwq19",
      "targetId": "Activity_1pgap16",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 894,
          "y": 559,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 940,
          "y": 560,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0z8nq6w",
      "sourceId": "Event_1oafcwz",
      "targetId": "Activity_1ij0isk",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 805,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 880,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    },
    {
      "id": "Flow_0sbl42g",
      "sourceId": "Activity_06uy49u",
      "targetId": "Event_1a0q67x",
      "name": null,
      "nameBounds": null,
      "type": "sequenceFlow",
      "conditionExpression": null,
      "waypoints": [
        {
          "x": 1790,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        },
        {
          "x": 1880,
          "y": 257.5,
          "__typename": "bpmnWaypoint"
        }
      ],
      "__typename": "bpmnConnection"
    }
  ],
  "shapes": [
    {
      "id": "Event_1muukxh",
      "parentId": "Lane_1674221676031",
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 1133,
        "y": 543,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": "Message_1674222108881",
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_1saapc0",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": "Evaluate Risk Assessment",
      "type": "userTask",
      "bounds": {
        "x": 1320,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": "evaluateRiskAssessmentPage",
      "happyPath": null,
      "roles": null,
      "formFields": [
        {
          "id": "Form_1674221460518",
          "name": "approveRiskAssessment",
          "type": "ENUM",
          "required": true,
          "values": [
            {
              "id": "Value_1674221468007",
              "name": "Approve",
              "__typename": "bpmnFormFieldValue"
            },
            {
              "id": "Value_1674221468158",
              "name": "Reject",
              "__typename": "bpmnFormFieldValue"
            }
          ],
          "__typename": "bpmnFormField"
        }
      ],
      "__typename": "bpmnUserTask"
    },
    {
      "id": "Activity_06uy49u",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": "Close Risk Assessment",
      "type": "serviceTask",
      "bounds": {
        "x": 1690,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "implementationTopic": "Extended;closeRiskAssessmentScript",
      "__typename": "bpmnServiceTask"
    },
    {
      "id": "Event_1oafcwz",
      "parentId": "Activity_12rtdcu",
      "childIds": [],
      "name": null,
      "type": "intermediateThrowEvent",
      "bounds": {
        "x": 770,
        "y": 240,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": "Message_1674222095203",
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_12rtdcu",
      "parentId": "Participant_1rw0sdt",
      "childIds": [
        "Event_0isihqe",
        "Event_1p1wcu8",
        "Activity_1ij0isk",
        "Event_1oafcwz"
      ],
      "name": null,
      "type": "subProcess",
      "bounds": {
        "x": 640,
        "y": 158,
        "width": 467,
        "height": 200,
        "__typename": "bpmnBounds"
      },
      "__typename": "bpmnShapeDefault"
    },
    {
      "id": "Gateway_0e05ist",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": null,
      "type": "exclusiveGateway",
      "bounds": {
        "x": 1490,
        "y": 233,
        "width": 50,
        "height": 50,
        "__typename": "bpmnBounds"
      },
      "__typename": "bpmnShapeDefault"
    },
    {
      "id": "Activity_179l6h2",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": "Update Risk Status",
      "type": "serviceTask",
      "bounds": {
        "x": 1160,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "implementationTopic": "Extended;updateProcessStatusAnalysisComplete",
      "__typename": "bpmnServiceTask"
    },
    {
      "id": "Event_1p1wcu8",
      "parentId": "Activity_12rtdcu",
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 673,
        "y": 240,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_1cdtfbp",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": "Get Risks for Analysis",
      "type": "serviceTask",
      "bounds": {
        "x": 490,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "implementationTopic": "Extended;getRiskForAnalysis",
      "__typename": "bpmnServiceTask"
    },
    {
      "id": "Activity_1ij0isk",
      "parentId": "Activity_12rtdcu",
      "childIds": [],
      "name": "Receive analyzed risk",
      "type": "receiveTask",
      "bounds": {
        "x": 880,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnReceiveTask"
    },
    {
      "id": "Event_1a0q67x",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 1880,
        "y": 240,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Event_0isihqe",
      "parentId": "Activity_12rtdcu",
      "childIds": [],
      "name": null,
      "type": "endEvent",
      "bounds": {
        "x": 1050,
        "y": 240,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Lane_1674221676031",
      "parentId": null,
      "childIds": [
        "Activity_1pgap16",
        "Activity_0cqwq19",
        "Event_094xvt9",
        "Event_1muukxh"
      ],
      "name": null,
      "type": "participant",
      "bounds": {
        "x": 580,
        "y": 450,
        "width": 604,
        "height": 200,
        "__typename": "bpmnBounds"
      },
      "process": {
        "id": "process_1624221676031",
        "name": null,
        "__typename": "bpmnProcessDescription"
      },
      "__typename": "bpmnParticipant"
    },
    {
      "id": "Activity_1pgap16",
      "parentId": "Lane_1674221676031",
      "childIds": [],
      "name": "Update Risk Status",
      "type": "serviceTask",
      "bounds": {
        "x": 940,
        "y": 520,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "implementationTopic": "Extended;updateRiskStatus",
      "__typename": "bpmnServiceTask"
    },
    {
      "id": "Event_094xvt9",
      "parentId": "Lane_1674221676031",
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 669,
        "y": 542,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": "Message_1674222095203",
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_0cqwq19",
      "parentId": "Lane_1674221676031",
      "childIds": [],
      "name": "Analyze Risk",
      "type": "userTask",
      "bounds": {
        "x": 794,
        "y": 519,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": "analyzeRiskPage",
      "happyPath": null,
      "roles": null,
      "formFields": null,
      "__typename": "bpmnUserTask"
    },
    {
      "id": "StartEvent_1",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": null,
      "type": "startEvent",
      "bounds": {
        "x": 250,
        "y": 240,
        "width": 35,
        "height": 35,
        "__typename": "bpmnBounds"
      },
      "messageRef": null,
      "__typename": "bpmnEvent"
    },
    {
      "id": "Activity_0cp9xp7",
      "parentId": "Participant_1rw0sdt",
      "childIds": [],
      "name": "Identify Risk",
      "type": "userTask",
      "bounds": {
        "x": 330,
        "y": 218,
        "width": 100,
        "height": 80,
        "__typename": "bpmnBounds"
      },
      "pageId": "identifyRiskPage",
      "happyPath": null,
      "roles": null,
      "formFields": null,
      "__typename": "bpmnUserTask"
    },
    {
      "id": "Participant_1rw0sdt",
      "parentId": null,
      "childIds": [
        "Gateway_0e05ist",
        "Activity_0cp9xp7",
        "Activity_1cdtfbp",
        "StartEvent_1",
        "Activity_179l6h2",
        "Activity_1saapc0",
        "Activity_12rtdcu",
        "Activity_06uy49u",
        "Event_1a0q67x"
      ],
      "name": "Risk Assessment (process owner)",
      "type": "participant",
      "bounds": {
        "x": 159,
        "y": 84,
        "width": 1765,
        "height": 311,
        "__typename": "bpmnBounds"
      },
      "process": {
        "id": "process_16142216489123",
        "name": "Risk Assessment Process",
        "__typename": "bpmnProcessDescription"
      },
      "__typename": "bpmnParticipant"
    }
  ],
  "__typename": "bpmnModel"
}
let data = {
  query: "mutation SaveBpmnView($deploymentName: String, $model: bpmnModelInput, $activate: Boolean) { saveBpmnView(deploymentName: $deploymentName, model: $model, activate: $activate) { bpmnModel { connections { id } } message status }}",
  operationName: "SaveBpmnView",
  variables: {"deploymentName": "Mutation-SimpleRiskAssessmentProcess", "activate": true, "model": input}
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

