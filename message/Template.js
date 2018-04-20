class Template{

  //basic text message template //usage: this.basic_text("hello world!");
  function basic_text (message){
    var response;
    response = {
      "text": message
    }
    return response;
  }

}
module.exports = Template
