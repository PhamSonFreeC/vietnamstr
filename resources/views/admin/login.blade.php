<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Đăng Nhập</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="admin_asset/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/login.css"/>
</head>
<body>
	<div class="login-clean">
		<form action="admin" method="post" >
			<input type="hidden" name="_token" value="{{csrf_token()}}">
			<h2 class="sr-only">ĐĂNG NHẬP</h2>
			<div class="illustration">
				<img src="upload/logo_vns.png" alt="logo" style="width: 70%">
			</div>
			<div>
            <div>
                @if(count($errors) >0)
                    <div class="alert alert-danger">
                        @foreach($errors->all() as $err)
                            {{$err}}<br>
                        @endforeach
                    </div>
                @endif
                @if(session('thongbao'))
                    <div class="alert alert-success">
                        {{session('thongbao')}}
                    </div>
                @endif
            </div>
			<div class="form-group">
				<input class="form-control" type="email" name="email" placeholder="Email">
			</div>
			<div class="form-group">
				<input class="form-control" type="password" name="password" placeholder="Mật khẩu">
			</div>
			<div class="form-group">
				<button class="btn btn-primary btn-block" type="submit">Đăng nhập</button>
			</div>
			<a class="forgot" href="#">Quên mật khẩu?</a>
		</form>
	</div>
</body>
</html>