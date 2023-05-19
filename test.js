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
    }
  ]
}
