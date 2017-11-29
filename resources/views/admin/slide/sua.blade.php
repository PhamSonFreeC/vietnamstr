@extends('admin.layout.index')
@section('content')
<!-- Page Content -->
<div id="page-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Slide
                    <small>{{$slide->Ten}}</small>
                </h1>
            </div>
            <!-- /.col-lg-12 -->
            <div class="col-lg-4">
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
            <div class="col-lg-12" style="padding-bottom:120px">
                <form action="admin/slide/sua/{$slide->id}" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="{{csrf_token()}}">
                    <div class="form-group">
                        <label>Tên</label>
                        <input class="form-control" name="Ten" placeholder="Nhập tên slide.." value="{{$slide->Ten}}" />
                    </div>
                    <div class="form-group">
                        <label>Nội dung</label>
                        <textarea name="NoiDung" id="demo" class="form-control ckeditor" row="15" value="{{$slide->NoiDung}}">{{$slide->NoiDung}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Link</label>
                        <p>
                            <img width="300px" src="upload/slide/{{$slide->Hinh}}" alt="">
                        </p>
                        <input class="form-control" name="link" placeholder="Nhập Link..." value="{{$slide->link}}">
                    </div>
                    <div class="form-group">
                        <label>Hình ảnh</label>
                        <input class="form-control" type="file" name="Hinh" ">
                    </div>
                    <button type="submit" class="btn btn-default">Sữa</button>
                    <button type="reset" class="btn btn-default">Làm mới</button>
                <form>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /#page-wrapper -->
@endsection