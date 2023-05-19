module.exports = {
  "run": [
    {
      "method": "set",
      "params": {
        "local": {
          "creature": "A Scary Kaiju",
          "nation": "{{self.random(self.nations)}}",
          "animal": "{{self.random(self.animals)}}"
        }
      }
    },
    {
      "uri": "https://github.com/malfunctionize/lla/index.js",
      "method": "run",
      "params": {
        "message": {
          "m": "../models/stable-vicuna/13b_q4_0.bin",
          "p": "### Instruction\n\n\rI want you to give me a random landmark location in the nation of {{local.nation}}. simply write the name of the landmark location. No description. Just the name.\n\n\r### Response\n\n"
        }
      },
      "returns": "local.location"
    },
    {
      "method": "set",
      "params": {
        "local": {
          "prompt": "(((a {{local.creature}} that looks like {{local.animal}}))), in (({{local.location}})) {{nation}}. ((((black and white photography)))) Wide field of view, ((8k resolution)). ((ultra quality)), sharp focus, tack sharp, dof, film grain, centered, crystal clear"
        }
      }
    },
    {
      "uri": "https://github.com/malfunctionize/auto/index.js",
      "method": "run",
      "params": {
        "cfg_scale": 15,
        "steps": 30,
        "prompt": "{{local.prompt}}",
        "negative_prompt": "out of frame, watermark, text, caption, (blurry, un-sharp, fuzzy, un-detailed skin:1.4), (twins:1.4), (geminis:1.4), (wrong eyeballs:1.1), (cloned face:1.1), (perfect skin:1.2), (mutated hands and fingers:1.3), disconnected hands, disconnected limbs, amputation, (semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, doll, overexposed, photoshop, oversaturated:1.4)"
      }
    },
//    {
//      "method": "fs.write",
//      "params": {
//        "path": "img.png",
//        "buffer": "{{Buffer.from(input.images[0], 'base64')}}"
//      }
//    },
//    {
//      "method": "fs.write",
//      "params": {
//        "path": "prompt.txt",
//        "string": "<b>{{local.animal}} kaiju.</b><br><br>- spotted in {{local.location}} ({{local.nation}})."
//      }
//    }
    {
      "uri": "tumblr",
      "method": "publish",
      "params": {
        "header": "{{self.tumblr}}",
        "body": {
          "base64": "{{input.images[0]}}",
          "text": "<b>{{local.animal}} kaiju.</b><br><br>- spotted in {{local.location}} ({{local.nation}})."
        }
      }
    },
//    {
//      "method": "sleep",
//      "params": {
//        "min": 15
//      }
//    }
  ]
}
