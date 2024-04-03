var Links = {
  SetColor: function (color) {
    // var lList = document.querySelectorAll("a");
    // for (var i = 0; i < lList.length; ++i) {
    //   lList[i].style.color = color;
    // }
    $("a").css("color", color); /* 위 코드를 jQuery를 사용하여 코드의 가독성을 높였다*/
  },
};
var Body = {
  SetColor: function (color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  SetBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};
var Button = {
  dataCheck: function (data) {
    if (data.dataset.front === "Light") {
      data.dataset.front = "Dark";
      data.dataset.back = "Light";
    } else {
      data.dataset.front = "Light";
      data.dataset.back = "Dark";
    }
  },
  Handler: function (self) {
    if (self.dataset.front === "Light") {
      Body.SetBackgroundColor("black");
      Body.SetColor("white");
      Button.dataCheck(self);
      Links.SetColor("yellow");
    } else {
      Body.SetBackgroundColor("white");
      Body.SetColor("black");
      Button.dataCheck(self);
      Links.SetColor("blue");
    }
  },
};
