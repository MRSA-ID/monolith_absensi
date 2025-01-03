<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $users = User::paginate(10);
        // dd($users);
        return Inertia::render('User/Index',[
            'users' => $users
        ]);
    }
}
