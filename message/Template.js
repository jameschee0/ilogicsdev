class Template{

  //basic text message template //usage: this.basic_text("hello world!");
  basicText (message){
    var response;
    response = {
      "text": message
    }
    return response;
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
                  "title":"History",
                  "type":"postback",
                  "payload":"HISTORY_PAYLOAD"
                },
                {
                  "title":"Contact Info",
                  "type":"postback",
                  "payload":"CONTACT_INFO_PAYLOAD"
                }
              ]
            },
            {
              "type":"web_url",
              "title":"Latest News",
              "url":"http://www.messenger.com/",
              "webview_height_ratio":"full"
            }
          ]
        },
        {
          "locale":"zh_CN",
          "composer_input_disabled":false,
          "call_to_actions":[
            {
              "title":"Pay Bill",
              "type":"postback",
              "payload":"PAYBILL_PAYLOAD"
            }
          ]
        }
      ]
    }
  return response;
  }
}



module.exports = Template
