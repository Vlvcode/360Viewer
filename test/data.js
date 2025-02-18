var APP_DATA = {
  "scenes": [
    {
      "id": "0-360_1",
      "name": "360_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.3063230932071761,
        "pitch": 0.1755426333658523,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.07193626342737325,
          "pitch": 0.05278927247666587,
          "rotation": 0,
          "target": "1-360_2"
        },
        {
          "yaw": -1.1749297349733183,
          "pitch": 0.054121609805145354,
          "rotation": 0,
          "target": "2-360_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360_2",
      "name": "360_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.1438405619840566,
        "pitch": 0.20194500448561392,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.3201682033430693,
          "pitch": 0.0558942762019452,
          "rotation": 0,
          "target": "2-360_3"
        },
        {
          "yaw": -3.099891936611634,
          "pitch": 0.06991330673192664,
          "rotation": 0,
          "target": "0-360_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360_3",
      "name": "360_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.0451880329966272,
        "pitch": 0.22135070768345244,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.6883865983838184,
          "pitch": 0.04507420524465111,
          "rotation": 0,
          "target": "0-360_1"
        },
        {
          "yaw": 0.5005483442390641,
          "pitch": 0.0452669254806608,
          "rotation": 0,
          "target": "1-360_2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
