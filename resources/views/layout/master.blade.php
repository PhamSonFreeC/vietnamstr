
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="{{asset('')}}">
    <link rel="stylesheet" href="layout_asset/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="layout_asset/css/main.css"/>
   	<link rel="stylesheet" href="layout_asset/css/font-awesome.css"/>
   	<link rel="stylesheet" href="layout_asset/css/fonts.css"/>
   	@yield('css')
</head>
<body>
	@include('layout.header')
		
	@yield('layout.content')	
	
	@include('layout.footer')
</body>
</html>
