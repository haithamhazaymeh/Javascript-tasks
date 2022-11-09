function flags() {
    var x = document.getElementById("mySelect").value;
    switch (x)
    {
        case "Jordan":
        document.getElementById("flag").src="https://img.freepik.com/free-photo/jordan-metallic-flag-textured-flag-grunge-flag_559531-11214.jpg?w=900&t=st=1667927986~exp=1667928586~hmac=563f747d2543914e896ddb42b8c88af7f8021a2557ebd38a7ba225e55a892ba9"
        break;
        case "Qater":
        document.getElementById("flag").src="https://img.freepik.com/premium-photo/qatar-metallic-flag-textured-flag-grunge-flag_559531-11283.jpg?w=900"
        break;
        case "palastain":
            document.getElementById("flag").src="https://img.freepik.com/free-photo/palestine-metallic-flag-textured-flag-grunge-flag_559531-11275.jpg?w=900&t=st=1667928010~exp=1667928610~hmac=422537ca93735c80d0155881c12a27106d1a8a203109f290f05f46ee7a841149"
            break;
            case "kuwait":
            document.getElementById("flag").src="https://img.freepik.com/free-photo/kuwait-metallic-flag-textured-flag-grunge-flag_559531-11220.jpg?w=900&t=st=1667928023~exp=1667928623~hmac=8371c223b9f9307712eef6cd48e2b0f3d9ffafd9d201bb95ecf161a02ab0e5d2"
            break;
            case "egypt":
                document.getElementById("flag").src="https://img.freepik.com/premium-photo/egypt-metallic-flag-textured-flag-grunge-flag_559531-11169.jpg?w=900"
                break;
    }
  }