var APP_DATA = {
  "scenes": [
    {
      "id": "0-planta-baja",
      "name": "Planta baja",
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
      "faceSize": 707.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16166711170859038,
          "pitch": 0.039996042910726004,
          "rotation": 0,
          "target": "1-primer-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6352795584682855,
          "pitch": 0.20272237248005176,
          "title": "Bienvenid@ a Capsule Home",
          "text": "Te presentamos un hábitat modular concebido para responder a las condiciones de climas extremos como el del desierto del Sahara.<div>Una propuesta que integra eficiencia energética y soluciones constructivas adapatadas al entorno.</div>"
        },
        {
          "yaw": -1.1923738967025859,
          "pitch": 0.22174085135464594,
          "title": "Mas informacion",
          "text": "Para acceder a la ficha técnica haz click aqui:&nbsp;https://surl.li/xvfwoc"
        }
      ]
    },
    {
      "id": "1-primer-nivel",
      "name": "Primer nivel",
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
      "faceSize": 707.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.45857358367988077,
          "pitch": 0.17387455810965413,
          "title": "Espacios interiores",
          "text": "Este sector se plantea como un espacio de pausa y recuperación, destinado al descanso dentro de un entorno exigente. También se incorpora un espacio destinado al desarrollo de actividades de investigación, observación y trabajo."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
