<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyController extends Controller
{
    public function index(){
    	return view('layout/home');
    }
    public function detail(){
    	return view('layout/detail');
    }
    public function listing(){
    	return view('layout/listing');
    }
    public function exclusivenews(){
    	return view('layout/exclusivenews');
    }
    public function thu()
    {
        return view('layout/slide');
    }
}
