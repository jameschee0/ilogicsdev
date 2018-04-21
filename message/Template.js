class Template{

  //basic text message template //usage: this.basic_text("hello world!");
  basicText (message){
    var response;
    response = {
      "text": message
    }
    return response;
  }

}

  persistentMenu(){
    var response;
    response={
      "persistent_menu":[
        {
          "locale":"default",
          "composer_input_disabled": true,
          "call_to_actions":[
            {
              "title":"My Account",
              "type":"nested",
              "call_to_actions":[
                {
                  "title":"Pay Bill",
                  "type":"postback",
                  "payload":"PAYBILL_PAYLOAD"
                },
                {
                  "type":"web_url",
                  "title":"Latest News",
                  "url":"https://www.messenger.com/",
                  "webview_height_ratio":"full"
                }
              ]
            }
          ]
        }
      ]
    }
  return response;
  }

module.exports = Template
