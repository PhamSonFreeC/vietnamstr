<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\User;

class UserController extends Controller
{
    public function getDanhSach()
    {
        $user = User::all();
        return view('admin.user.danhsach',['user'=>$user]);
    }
    public function getThem()
    {
    	return view('admin.user.them');
    }
    public function postThem(Request $request)
    {
        $this->validate($request,
            [
                'name'=>'required|min:1',
                'email'=>'required|email|unique:users,email',
                'password'=>'required|min:1|max:32',
                'passwordAgain'=>'required|same:password',
            ],
            [
                'name.required'=>'Bạn chưa nhập Họ Tên người dùng',
                'name.min'=>'Tên người dùng phải ít nhất 1 kí tự',
                'email.required'=>'Bạn chưa nhập email',
                'email.email'=>'Bạn chưa nhập đúng email',
                'email.unique'=>'Email đã tồn tại',
                'password.required'=>'Bạn chưa nhập password',
                'password.min'=>'Password phải có ít nhất 1 kí tự và nhiều nhất 32 kí tự',
                'password.max'=>'Password phải có ít nhất 1 kí tự và nhiều nhất 32 kí tự',
                'passwordAgain.required'=>'Bạn chưa nhập lại Password',
                'passwordAgain.same'=>'Password nhập lại chưa đúng',
            ]);
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->quyen = $request->quyen;
        
        $user->save();
        return redirect('admin/user/them')->with('thongbao','Thêm thành công');
    }
    public function getSua($id)
    {
    	$user = User::find($id);

        return view('admin/user/sua',['user'=>$user]);
    }

    public function postSua(Request $request,$id)
    {
        $user = User::find($id);
        $this->validate($request,
            [
                'name'=>'required|min:1',
            ],
            [
                'name.required'=>'Bạn chưa nhập Họ Tên người dùng',
                'name.min'=>'Tên người dùng phải ít nhất 1 kí tự',
            ]);
        $user = User::find($id);
        $user->name = $request->name;
        $user->quyen = $request->quyen;

        if($request->changePassword == "on")
        {
            $this->validate($request,
            [
                'password'=>'required|min:1|max:32',
                'passwordAgain'=>'required|same:password',
            ],
            [
                'password.required'=>'Bạn chưa nhập password',
                'password.min'=>'Password phải có ít nhất 1 kí tự và nhiều nhất 32 kí tự',
                'password.max'=>'Password phải có ít nhất 1 kí tự và nhiều nhất 32 kí tự',
                'passwordAgain.required'=>'Bạn chưa nhập lại Password',
                'passwordAgain.same'=>'Password nhập lại chưa đúng',
            ]);
            $user->password = bcrypt($request->password);
        }
        $user->save();
        return redirect('admin/user/sua/'.$id)->with('thongbao','Sửa thành công');
    }

    public function getXoa($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect('admin/user/danhsach')->with('thongbao','Xóa thành công');
    }

    public function getAdminLogin()
    {
        return view('admin/login');
    }

    public function postAdminLogin(Request $request)
    {
        $this->validate($request,
            [
                'email'=>'required',
                'password'=>'required|min:3|max:32',
            ],
            [
                'email.required'=>'Bạn chưa nhập email',
                'password.required'=>'Bạn chưa nhập password',
                'password.min'=>'Password không hợp lệ',
                'password.max'=>'password không hợp lệ',
            ]);
        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password]))
            {
                return redirect('admin/theloai/danhsach');
            }
        else
        {
            return redirect('login')->with('thongbao','Đăng nhập không thành công');
        }
    }

    public function getLogout()
    {
        Auth::logout();

        return redirect('login');
    }
}
