function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pRz5mZ4gtN":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwsSESnwlpsIOb4DLsijmPKziJoUxMSoCzUfC2QULpuX5ZGcGGJzoI0LzqWzxiuzFOQ/exec"

var player=GetPlayer()


fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache: 'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect: 'follow',
	body:JSON.stringify({nama:player.GetVar("nama"),soalA:player.GetVar("soalA"),soalB:player.GetVar("soalB"),soalC:player.GetVar("soalC"),soalD:player.GetVar("soalD"),soalE:player.GetVar("soalE"),soalF:player.GetVar("soalF"),soalG:player.GetVar("soalG"),soalH:player.GetVar("soalH"),soalI:player.GetVar("soalI"),soalJ:player.GetVar("soalJ")})


	}
	)
	
}

